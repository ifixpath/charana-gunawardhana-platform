-- LMS/CMS administrator allowlist.
--
-- A row means that user may administer courses through a trusted server.
-- There are no roles. No administrator is seeded here.
-- The browser cannot insert, update, or delete this table.

create table public.admin_users (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

revoke all on table public.admin_users from public, anon, authenticated;

grant select on table public.admin_users to authenticated;

grant all on table public.admin_users to service_role;

create policy admin_users_select_own
on public.admin_users
for select
to authenticated
using (user_id = auth.uid());
