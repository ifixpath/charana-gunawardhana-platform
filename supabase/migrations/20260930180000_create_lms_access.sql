-- LMS access foundation: profiles, course offers, and enrollments.
--
-- This file is not imported by the React app. No course is seeded.
-- Do not put a service-role key in frontend code.
--
-- Marketing copy stays on programs and program_translations.
-- A program may have no course. A course belongs to one program.
-- The browser cannot create a course or an enrollment.

grant execute on function public.touch_updated_at() to authenticated;

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_display_name_check check (
    display_name is null
    or char_length(btrim(display_name)) between 1 and 80
  )
);

create trigger profiles_touch_updated_at
before update on public.profiles
for each row
execute function public.touch_updated_at();

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null unique references public.programs (id) on delete restrict,
  slug text not null unique,
  price_amount integer not null,
  currency text not null default 'LKR',
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint courses_price_amount_check check (price_amount >= 0),
  constraint courses_slug_not_blank check (char_length(btrim(slug)) > 0),
  constraint courses_currency_not_blank check (char_length(btrim(currency)) > 0),
  constraint courses_currency_check check (currency ~ '^[A-Z]{3}$'),
  constraint courses_status_check check (status in ('draft', 'published'))
);

create index courses_status_idx on public.courses (status);

create trigger courses_touch_updated_at
before update on public.courses
for each row
execute function public.touch_updated_at();

create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_id uuid not null references public.courses (id) on delete restrict,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint enrollments_user_course_key unique (user_id, course_id),
  constraint enrollments_status_check check (status in ('active', 'revoked'))
);

create trigger enrollments_touch_updated_at
before update on public.enrollments
for each row
execute function public.touch_updated_at();

alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.enrollments enable row level security;

revoke all on table public.profiles from public, anon, authenticated;
revoke all on table public.courses from public, anon, authenticated;
revoke all on table public.enrollments from public, anon, authenticated;

grant select on table public.profiles to authenticated;
grant update (display_name) on table public.profiles to authenticated;

grant select on table public.courses to anon, authenticated;

grant select on table public.enrollments to authenticated;

grant all on table public.profiles to service_role;
grant all on table public.courses to service_role;
grant all on table public.enrollments to service_role;

create policy profiles_select_own
on public.profiles
for select
to authenticated
using (id = auth.uid());

create policy profiles_update_own
on public.profiles
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

create policy courses_select_published
on public.courses
for select
to anon, authenticated
using (status = 'published');

create policy enrollments_select_own
on public.enrollments
for select
to authenticated
using (user_id = auth.uid());

-- Runs as the function owner so signup can insert a profile despite RLS.
-- anon and authenticated cannot call it. supabase_auth_admin fires it.
create or replace function public.handle_auth_user_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  safe_name text;
begin
  if tg_op = 'INSERT' then
    safe_name := nullif(btrim(new.raw_user_meta_data ->> 'display_name'), '');

    if safe_name is not null then
      safe_name := left(safe_name, 80);
    end if;

    insert into public.profiles (id, email, display_name)
    values (new.id, new.email, safe_name)
    on conflict (id) do nothing;

    return new;
  end if;

  if new.email is distinct from old.email then
    update public.profiles
    set email = new.email
    where id = new.id;
  end if;

  return new;
end;
$$;

revoke all on function public.handle_auth_user_profile() from public, anon, authenticated;

grant execute on function public.handle_auth_user_profile() to service_role;

do $$
begin
  if exists (select 1 from pg_roles where rolname = 'supabase_auth_admin') then
    grant execute on function public.handle_auth_user_profile() to supabase_auth_admin;
  end if;
end;
$$;

create trigger auth_user_profile_insert
after insert on auth.users
for each row
execute function public.handle_auth_user_profile();

create trigger auth_user_profile_email_sync
after update of email on auth.users
for each row
execute function public.handle_auth_user_profile();

insert into public.profiles (id, email, display_name)
select
  users.id,
  users.email,
  nullif(left(btrim(users.raw_user_meta_data ->> 'display_name'), 80), '')
from auth.users as users
on conflict (id) do nothing;
