-- Course structure: modules and lessons under an existing course.
--
-- This file is not imported by the React app. No rows are seeded.
-- Lesson body and media are not stored here.
--
-- Student policies read courses and enrollments as the caller.
-- courses_select_published already shows published courses to authenticated.
-- enrollments_select_own already shows the caller every own row, including revoked.
-- The checks below add published and active. Neither policy calls the other
-- in a cycle, so no security-definer helper is required.

create table public.course_modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses (id) on delete restrict,
  title text not null,
  description text,
  sort_order integer not null,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint course_modules_title_check check (char_length(btrim(title)) between 1 and 160),
  constraint course_modules_description_check check (
    description is null
    or char_length(btrim(description)) between 1 and 500
  ),
  constraint course_modules_sort_order_check check (sort_order >= 0),
  constraint course_modules_status_check check (status in ('draft', 'published')),
  constraint course_modules_course_sort_key unique (course_id, sort_order)
);

create trigger course_modules_touch_updated_at
before update on public.course_modules
for each row
execute function public.touch_updated_at();

create table public.course_lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.course_modules (id) on delete restrict,
  title text not null,
  lesson_type text not null,
  sort_order integer not null,
  status text not null default 'draft',
  duration_seconds integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint course_lessons_title_check check (char_length(btrim(title)) between 1 and 160),
  constraint course_lessons_type_check check (
    lesson_type in ('text', 'video', 'download', 'live')
  ),
  constraint course_lessons_sort_order_check check (sort_order >= 0),
  constraint course_lessons_status_check check (status in ('draft', 'published')),
  constraint course_lessons_duration_check check (
    duration_seconds is null
    or duration_seconds >= 0
  ),
  constraint course_lessons_module_sort_key unique (module_id, sort_order)
);

create trigger course_lessons_touch_updated_at
before update on public.course_lessons
for each row
execute function public.touch_updated_at();

alter table public.course_modules enable row level security;
alter table public.course_lessons enable row level security;

revoke all on table public.course_modules from public, anon, authenticated;
revoke all on table public.course_lessons from public, anon, authenticated;

grant select on table public.course_modules to authenticated;
grant select on table public.course_lessons to authenticated;

grant all on table public.course_modules to service_role;
grant all on table public.course_lessons to service_role;

create policy course_modules_select_enrolled
on public.course_modules
for select
to authenticated
using (
  status = 'published'
  and exists (
    select 1
    from public.courses
    where courses.id = course_modules.course_id
      and courses.status = 'published'
      and exists (
        select 1
        from public.enrollments
        where enrollments.course_id = courses.id
          and enrollments.user_id = auth.uid()
          and enrollments.status = 'active'
      )
  )
);

create policy course_lessons_select_enrolled
on public.course_lessons
for select
to authenticated
using (
  status = 'published'
  and exists (
    select 1
    from public.course_modules
    where course_modules.id = course_lessons.module_id
      and course_modules.status = 'published'
      and exists (
        select 1
        from public.courses
        where courses.id = course_modules.course_id
          and courses.status = 'published'
          and exists (
            select 1
            from public.enrollments
            where enrollments.course_id = courses.id
              and enrollments.user_id = auth.uid()
              and enrollments.status = 'active'
          )
      )
  )
);
