-- Draft LMS course for the existing Paradigm Shifting for Abundance program.
--
-- One course row only. No modules, lessons, enrollments, or program changes.
-- price_amount is NULL because the selling price is not configured.
-- NULL is not a free price. 0 would mean genuinely free and is not used here.

do $$
declare
  paradigm_program_id uuid := '20dd00a2-8ba6-4782-8596-c77d521a71c9';
  paradigm_course_id uuid := 'f4915d51-f645-4917-9e49-e12c5e4d62c4';
  paradigm_slug text := 'paradigm-shifting-for-abundance';
  program_record public.programs%rowtype;
  course_record public.courses%rowtype;
  course_count integer;
begin
  select *
  into program_record
  from public.programs
  where id = paradigm_program_id;

  if not found then
    raise exception 'Paradigm program % was not found', paradigm_program_id;
  end if;

  if program_record.slug is distinct from paradigm_slug
    or program_record.official_name is distinct from 'Paradigm Shifting for Abundance'
    or program_record.format_id is distinct from 'recordedCourse'
    or program_record.status is distinct from 'published'
  then
    raise exception 'Paradigm program % does not match the expected published recorded course', paradigm_program_id;
  end if;

  select count(*)
  into course_count
  from public.courses
  where id = paradigm_course_id
    or program_id = paradigm_program_id
    or slug = paradigm_slug;

  if course_count > 1 then
    raise exception 'Multiple courses already occupy the Paradigm course identity';
  end if;

  if course_count = 1 then
    select *
    into strict course_record
    from public.courses
    where id = paradigm_course_id
      or program_id = paradigm_program_id
      or slug = paradigm_slug;

    if course_record.id = paradigm_course_id
      and course_record.program_id = paradigm_program_id
      and course_record.slug = paradigm_slug
      and course_record.price_amount is null
      and course_record.currency = 'LKR'
      and course_record.status = 'draft'
    then
      return;
    end if;

    raise exception 'A different course already occupies the Paradigm course identity';
  end if;

  insert into public.courses (
    id,
    program_id,
    slug,
    price_amount,
    currency,
    status
  ) values (
    paradigm_course_id,
    paradigm_program_id,
    paradigm_slug,
    null,
    'LKR',
    'draft'
  );
end;
$$;
