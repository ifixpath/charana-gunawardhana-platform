-- Public program CMS foundation for charana-learning-platform.
--
-- This file is not imported by the React app. The website keeps reading
-- src/data and src/i18n. Do not put a service-role key in frontend code.
--
-- Seed copy is taken from src/i18n/translations/{en,si,ta}.ts.
-- Columns stay null when that program has no matching field.
-- Mind Magic stores overview.heading/body in about_heading/about_body,
-- because that is its about section. Homework, multi-format copy, journey,
-- duration, focus, and The Secret are not seeded.
-- Morning Gym has hero.supporting, not hero.descriptor, so hero_descriptor
-- stays null. Unstoppable duration is not copied into the format columns.

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

revoke all on function public.touch_updated_at() from public, anon, authenticated;

grant execute on function public.touch_updated_at() to service_role;

create table public.programs (
  id uuid primary key,
  slug text not null,
  official_name text not null,
  format_id text,
  path text not null,
  status text not null default 'draft',
  sort_order integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint programs_slug_key unique (slug),
  constraint programs_path_key unique (path),
  constraint programs_slug_not_blank check (char_length(btrim(slug)) > 0),
  constraint programs_official_name_not_blank check (char_length(btrim(official_name)) > 0),
  constraint programs_path_not_blank check (char_length(btrim(path)) > 0),
  constraint programs_path_absolute check (path like '/%'),
  constraint programs_status_check check (status in ('draft', 'published')),
  constraint programs_format_id_check check (
    format_id is null
    or format_id in ('program', 'workshop', 'zoomClass', 'longTerm', 'recordedCourse')
  )
);

create index programs_status_idx on public.programs (status);

create trigger programs_touch_updated_at
before update on public.programs
for each row
execute function public.touch_updated_at();

create table public.program_translations (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references public.programs (id) on delete cascade,
  locale text not null,
  meta_title text,
  meta_description text,
  hero_eyebrow text,
  hero_descriptor text,
  about_heading text,
  about_body text,
  format_heading text,
  format_value text,
  cta_enquire text,
  cta_all_programs text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint program_translations_program_locale_key unique (program_id, locale),
  constraint program_translations_locale_check check (locale in ('en', 'si', 'ta'))
);

create trigger program_translations_touch_updated_at
before update on public.program_translations
for each row
execute function public.touch_updated_at();

alter table public.programs enable row level security;
alter table public.program_translations enable row level security;

revoke all on table public.programs from public, anon, authenticated;
revoke all on table public.program_translations from public, anon, authenticated;

grant select on table public.programs to anon, authenticated;
grant select on table public.program_translations to anon, authenticated;

create policy programs_select_published
on public.programs
for select
to anon, authenticated
using (status = 'published');

create policy program_translations_select_published_parent
on public.program_translations
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.programs
    where programs.id = program_translations.program_id
      and programs.status = 'published'
  )
);

insert into public.programs (
  id,
  slug,
  official_name,
  format_id,
  path,
  status,
  sort_order
) values
  (
    '0dedba68-f6be-4505-8a07-80d063777222',
    'morning-gym',
    'Morning Gym',
    null,
    '/programs/morning-gym',
    'published',
    1
  ),
  (
    '2f961f4a-8883-43d8-b298-0d34111c7f7a',
    'mind-magic',
    'Mind Magic',
    'program',
    '/programs/mind-magic',
    'published',
    2
  ),
  (
    '74275d1b-197e-4ac2-9175-d1eeeaa239b6',
    'optimistic-magnet',
    'Optimistic Magnet',
    'program',
    '/programs/optimistic-magnet',
    'published',
    3
  ),
  (
    '032c7093-3d52-46f2-a9fc-2b6115247e71',
    'social-media-business-development',
    'Social Media for Business Development',
    'zoomClass',
    '/programs/social-media-business-development',
    'published',
    4
  ),
  (
    '20741dfe-051a-44a9-b9bf-c78c0ad9d32a',
    'unstoppable',
    'Unstoppable',
    'longTerm',
    '/programs/unstoppable',
    'published',
    5
  ),
  (
    '0ed69570-1436-4e6b-94f5-58e528dd19c0',
    'experience-your-100',
    'Experience Your 100%',
    'workshop',
    '/programs/experience-your-100',
    'published',
    6
  ),
  (
    '4c70bc16-e122-47e1-8a62-c012cdcf9809',
    'reality-room',
    'Reality Room',
    'workshop',
    '/programs/reality-room',
    'published',
    7
  ),
  (
    '20dd00a2-8ba6-4782-8596-c77d521a71c9',
    'paradigm-shifting-for-abundance',
    'Paradigm Shifting for Abundance',
    'recordedCourse',
    '/programs/paradigm-shifting-for-abundance',
    'published',
    8
  );

insert into public.program_translations (
  program_id,
  locale,
  meta_title,
  meta_description,
  hero_eyebrow,
  hero_descriptor,
  about_heading,
  about_body,
  format_heading,
  format_value,
  cta_enquire,
  cta_all_programs
) values
  (
    '0dedba68-f6be-4505-8a07-80d063777222',
    'en',
    $txt$Morning Gym — Charana Gunawardhana$txt$,
    $txt$A guided morning experience focused on mindset, discipline and intentional action.$txt$,
    $txt$Program$txt$,
    null,
    $txt$About Morning Gym$txt$,
    $txt$A guided morning experience focused on mindset, discipline and intentional action.$txt$,
    null,
    null,
    $txt$Enquire About Morning Gym$txt$,
    $txt$View All Programs$txt$
  ),
  (
    '0dedba68-f6be-4505-8a07-80d063777222',
    'si',
    $txt$Morning Gym — Charana Gunawardhana$txt$,
    $txt$මානසිකත්වය, විනය සහ චේතනාන්විත ක්‍රියාව කෙරෙහි අවධානය යොමු කරන මඟපෙන්වන උදෑසන අත්දැකීමකි.$txt$,
    $txt$වැඩසටහන$txt$,
    null,
    $txt$Morning Gym ගැන$txt$,
    $txt$මානසිකත්වය, විනය සහ චේතනාන්විත ක්‍රියාව කෙරෙහි අවධානය යොමු කරන මඟපෙන්වන උදෑසන අත්දැකීමකි.$txt$,
    null,
    null,
    $txt$Morning Gym ගැන විමසන්න$txt$,
    $txt$සියලු වැඩසටහන් බලන්න$txt$
  ),
  (
    '0dedba68-f6be-4505-8a07-80d063777222',
    'ta',
    $txt$Morning Gym — Charana Gunawardhana$txt$,
    $txt$மனநிலை, ஒழுக்கம் மற்றும் உள்நோக்கத்துடன் கூடிய செயல்பாட்டில் கவனம் செலுத்தும் வழிகாட்டப்பட்ட காலை அனுபவம்.$txt$,
    $txt$திட்டம்$txt$,
    null,
    $txt$Morning Gym பற்றி$txt$,
    $txt$மனநிலை, ஒழுக்கம் மற்றும் உள்நோக்கத்துடன் கூடிய செயல்பாட்டில் கவனம் செலுத்தும் வழிகாட்டப்பட்ட காலை அனுபவம்.$txt$,
    null,
    null,
    $txt$Morning Gym பற்றி விசாரிக்க$txt$,
    $txt$அனைத்து திட்டங்களையும் பார்க்க$txt$
  ),
  (
    '2f961f4a-8883-43d8-b298-0d34111c7f7a',
    'en',
    $txt$Mind Magic — Charana Gunawardhana$txt$,
    $txt$A transformational experience that helps you discover the power within yourself. Available as a recorded program of approximately 8.5 hours and as a live workshop.$txt$,
    $txt$Program$txt$,
    $txt$Discover the power within yourself.$txt$,
    $txt$About Mind Magic$txt$,
    $txt$A transformational experience that helps you discover the power within yourself, understand your mind, and create a new perspective on your life and goals — a potential turning point in your journey.$txt$,
    null,
    null,
    $txt$Enquire About Mind Magic$txt$,
    $txt$View All Programs$txt$
  ),
  (
    '2f961f4a-8883-43d8-b298-0d34111c7f7a',
    'si',
    $txt$Mind Magic — Charana Gunawardhana$txt$,
    $txt$ඔබ තුළ ඇති ශක්තිය සොයා ගැනීමට උපකාර වන පරිවර්තනීය අත්දැකීමකි. පැය 8.5ක් පමණ වන පටිගත කළ වැඩසටහනක් ලෙසත් සජීවී වැඩමුළුවක් ලෙසත් ලබා ගත හැකිය.$txt$,
    $txt$වැඩසටහන$txt$,
    $txt$ඔබ තුළ ඇති ශක්තිය සොයා ගන්න.$txt$,
    $txt$Mind Magic ගැන$txt$,
    $txt$ඔබ තුළ ඇති ශක්තිය සොයා ගැනීමට, ඔබේ මනස තේරුම් ගැනීමට, සහ ඔබේ ජීවිතය හා ඉලක්ක ගැන නව දෘෂ්ටියක් ගොඩනැගීමට උපකාර වන පරිවර්තනීය අත්දැකීමකි — ඔබේ ගමනේ වැදගත් හැරවුම් ලක්ෂ්‍යයක් විය හැකි අත්දැකීමකි.$txt$,
    null,
    null,
    $txt$Mind Magic ගැන විමසන්න$txt$,
    $txt$සියලු වැඩසටහන් බලන්න$txt$
  ),
  (
    '2f961f4a-8883-43d8-b298-0d34111c7f7a',
    'ta',
    $txt$Mind Magic — Charana Gunawardhana$txt$,
    $txt$உங்களுக்குள் இருக்கும் சக்தியைக் கண்டறிய உதவும் மாற்ற அனுபவம். சுமார் 8.5 மணி நேர பதிவு செய்யப்பட்ட திட்டமாகவும் நேரடி பட்டறையாகவும் கிடைக்கிறது.$txt$,
    $txt$திட்டம்$txt$,
    $txt$உங்களுக்குள் இருக்கும் சக்தியைக் கண்டறியுங்கள்.$txt$,
    $txt$Mind Magic பற்றி$txt$,
    $txt$உங்களுக்குள் இருக்கும் சக்தியைக் கண்டறியவும், உங்கள் மனத்தைப் புரிந்துகொள்ளவும், உங்கள் வாழ்க்கை மற்றும் இலக்குகள் குறித்து புதிய பார்வையை உருவாக்கவும் உதவும் மாற்ற அனுபவம் — உங்கள் பயணத்தில் ஒரு முக்கிய திருப்புமுனையாக அமையக்கூடியது.$txt$,
    null,
    null,
    $txt$Mind Magic பற்றி விசாரிக்க$txt$,
    $txt$அனைத்து திட்டங்களையும் பார்க்க$txt$
  ),
  (
    '74275d1b-197e-4ac2-9175-d1eeeaa239b6',
    'en',
    $txt$Optimistic Magnet — Charana Gunawardhana$txt$,
    $txt$A 37-day gratitude practice of 37 recorded sessions. Completing Mind Magic is part of the intended eligibility path.$txt$,
    $txt$Program$txt$,
    $txt$Practice gratitude. Shift your focus. Build a more positive mindset.$txt$,
    $txt$About Optimistic Magnet$txt$,
    $txt$A 37-day gratitude practice that helps you put what you learned through Mind Magic into action. By consciously practicing gratitude for the good in your life — and finding the silver lining even in difficult experiences — you learn to shift your focus away from negativity and toward positivity, helping you cultivate a more empowered state of mind.$txt$,
    null,
    null,
    $txt$Enquire About Optimistic Magnet$txt$,
    $txt$View All Programs$txt$
  ),
  (
    '74275d1b-197e-4ac2-9175-d1eeeaa239b6',
    'si',
    $txt$Optimistic Magnet — Charana Gunawardhana$txt$,
    $txt$සැසි 37ක් සහිත දින 37ක කෘතඥතා පුහුණුවකි. Mind Magic සම්පූර්ණ කිරීම අදහස් කරන සුදුසුකම් මාර්ගයේ කොටසකි.$txt$,
    $txt$වැඩසටහන$txt$,
    $txt$කෘතඥතාව පුරුදු කරන්න. අවධානය මාරු කරන්න. වඩා ධනාත්මක මානසිකත්වයක් ගොඩනගන්න.$txt$,
    $txt$Optimistic Magnet ගැන$txt$,
    $txt$Mind Magic හරහා ඉගෙන ගත් දේ ක්‍රියාත්මක කිරීමට උපකාර වන දින 37ක කෘතඥතා පුහුණුවකි. ඔබේ ජීවිතයේ යහපත් දේ සඳහා සිහිකල්පනාවෙන් කෘතඥ වීමෙන් — අසීරු අත්දැකීම්වලදී පවා ධනාත්මක පැත්ත සොයා ගැනීමෙන් — ඍණාත්මක බවෙන් ඈත්ව ධනාත්මක දෙසට අවධානය යොමු කරන ආකාරය ඉගෙන ගනී. මෙයින් වඩා බලගතු මානසික තත්ත්වයක් වර්ධනය කර ගැනීමට උපකාර වේ.$txt$,
    null,
    null,
    $txt$Optimistic Magnet ගැන විමසන්න$txt$,
    $txt$සියලු වැඩසටහන් බලන්න$txt$
  ),
  (
    '74275d1b-197e-4ac2-9175-d1eeeaa239b6',
    'ta',
    $txt$Optimistic Magnet — Charana Gunawardhana$txt$,
    $txt$37 பதிவு செய்யப்பட்ட அமர்வுகளைக் கொண்ட 37 நாள் நன்றியுணர்வுப் பயிற்சி. Mind Magic-ஐ நிறைவு செய்வது நோக்கப்பட்ட தகுதிப் பாதையின் ஒரு பகுதி.$txt$,
    $txt$திட்டம்$txt$,
    $txt$நன்றியுணர்வைப் பயிலுங்கள். கவனத்தை மாற்றுங்கள். மேலும் நேர்மறையான மனநிலையை வளர்த்துக்கொள்ளுங்கள்.$txt$,
    $txt$Optimistic Magnet பற்றி$txt$,
    $txt$Mind Magic மூலம் கற்றுக்கொண்டதைச் செயல்படுத்த உதவும் 37 நாள் நன்றியுணர்வுப் பயிற்சி. உங்கள் வாழ்க்கையில் உள்ள நல்லவற்றுக்கு நன்றி செலுத்துவதன் மூலமும் — கடினமான அனுபவங்களிலும் நேர்மறையான பக்கத்தைக் காண்பதன் மூலமும் — எதிர்மறையிலிருந்து நேர்மறைக்கு கவனத்தை மாற்றக் கற்றுக்கொள்கிறீர்கள். இது மேலும் வலுவான மனநிலையை வளர்க்க உதவுகிறது.$txt$,
    null,
    null,
    $txt$Optimistic Magnet பற்றி விசாரிக்க$txt$,
    $txt$அனைத்து திட்டங்களையும் பார்க்க$txt$
  ),
  (
    '032c7093-3d52-46f2-a9fc-2b6115247e71',
    'en',
    $txt$Social Media for Business Development — Charana Gunawardhana$txt$,
    $txt$A practical online class on using social media to support business growth.$txt$,
    $txt$Program$txt$,
    $txt$Zoom Class$txt$,
    $txt$About the Program$txt$,
    $txt$A practical online class on using social media to support business growth.$txt$,
    null,
    null,
    $txt$Enquire About the Program$txt$,
    $txt$View All Programs$txt$
  ),
  (
    '032c7093-3d52-46f2-a9fc-2b6115247e71',
    'si',
    $txt$Social Media for Business Development — Charana Gunawardhana$txt$,
    $txt$ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම පිළිබඳ ප්‍රායෝගික මාර්ගගත පන්තියකි.$txt$,
    $txt$වැඩසටහන$txt$,
    $txt$Zoom පන්තිය$txt$,
    $txt$වැඩසටහන ගැන$txt$,
    $txt$ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම පිළිබඳ ප්‍රායෝගික මාර්ගගත පන්තියකි.$txt$,
    null,
    null,
    $txt$වැඩසටහන ගැන විමසන්න$txt$,
    $txt$සියලු වැඩසටහන් බලන්න$txt$
  ),
  (
    '032c7093-3d52-46f2-a9fc-2b6115247e71',
    'ta',
    $txt$Social Media for Business Development — Charana Gunawardhana$txt$,
    $txt$வணிக வளர்ச்சிக்கு சமூக ஊடகத்தைப் பயன்படுத்துவது குறித்த நடைமுறை இணைய வகுப்பு.$txt$,
    $txt$திட்டம்$txt$,
    $txt$Zoom வகுப்பு$txt$,
    $txt$திட்டம் பற்றி$txt$,
    $txt$வணிக வளர்ச்சிக்கு சமூக ஊடகத்தைப் பயன்படுத்துவது குறித்த நடைமுறை இணைய வகுப்பு.$txt$,
    null,
    null,
    $txt$திட்டம் பற்றி விசாரிக்க$txt$,
    $txt$அனைத்து திட்டங்களையும் பார்க்க$txt$
  ),
  (
    '20741dfe-051a-44a9-b9bf-c78c0ad9d32a',
    'en',
    $txt$Unstoppable — Charana Gunawardhana$txt$,
    $txt$Unstoppable is a six-month life transformation program focused on discipline and progress.$txt$,
    $txt$Program$txt$,
    $txt$Six Months Life Transformation Program$txt$,
    $txt$About Unstoppable$txt$,
    $txt$A long-term life transformation program focused on discipline and progress.$txt$,
    null,
    null,
    $txt$Enquire About Unstoppable$txt$,
    $txt$View All Programs$txt$
  ),
  (
    '20741dfe-051a-44a9-b9bf-c78c0ad9d32a',
    'si',
    $txt$Unstoppable — Charana Gunawardhana$txt$,
    $txt$විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන මාස හයක ජීවිත පරිවර්තන වැඩසටහනකි.$txt$,
    $txt$වැඩසටහන$txt$,
    $txt$මාස හයක ජීවිත පරිවර්තන වැඩසටහන$txt$,
    $txt$Unstoppable ගැන$txt$,
    $txt$විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන දිගුකාලීන ජීවිත පරිවර්තන වැඩසටහනකි.$txt$,
    null,
    null,
    $txt$Unstoppable ගැන විමසන්න$txt$,
    $txt$සියලු වැඩසටහන් බලන්න$txt$
  ),
  (
    '20741dfe-051a-44a9-b9bf-c78c0ad9d32a',
    'ta',
    $txt$Unstoppable — Charana Gunawardhana$txt$,
    $txt$ஒழுக்கம் மற்றும் முன்னேற்றத்தில் கவனம் செலுத்தும் ஆறு மாத வாழ்க்கை மாற்றத் திட்டம்.$txt$,
    $txt$திட்டம்$txt$,
    $txt$ஆறு மாத வாழ்க்கை மாற்றத் திட்டம்$txt$,
    $txt$Unstoppable பற்றி$txt$,
    $txt$ஒழுக்கம் மற்றும் முன்னேற்றத்தில் கவனம் செலுத்தும் நீண்டகால வாழ்க்கை மாற்றத் திட்டம்.$txt$,
    null,
    null,
    $txt$Unstoppable பற்றி விசாரிக்க$txt$,
    $txt$அனைத்து திட்டங்களையும் பார்க்க$txt$
  ),
  (
    '0ed69570-1436-4e6b-94f5-58e528dd19c0',
    'en',
    $txt$Experience Your 100% — Charana Gunawardhana$txt$,
    $txt$A one-day workshop to understand how to take effective action towards your goals.$txt$,
    $txt$Program$txt$,
    $txt$One-Day Workshop$txt$,
    $txt$About Experience Your 100%$txt$,
    $txt$A transformational training that helps you understand why you may not have achieved what you wanted, what may have been holding you back, and how you can approach your goals differently to create the results you want.$txt$,
    $txt$Format$txt$,
    $txt$One-Day Workshop$txt$,
    $txt$Enquire About Experience Your 100%$txt$,
    $txt$View All Programs$txt$
  ),
  (
    '0ed69570-1436-4e6b-94f5-58e528dd19c0',
    'si',
    $txt$Experience Your 100% — Charana Gunawardhana$txt$,
    $txt$ඔබේ ඉලක්ක කරා ඵලදායීව ක්‍රියා කරන ආකාරය තේරුම් ගැනීමට උපකාර වන එක්දින වැඩමුළුවකි.$txt$,
    $txt$වැඩසටහන$txt$,
    $txt$එක්දින වැඩමුළුව$txt$,
    $txt$Experience Your 100% ගැන$txt$,
    $txt$ඔබට අවශ්‍ය දේ තවමත් ලබා නොගත්තේ ඇයිද, ඔබව පසුපසට අල්ලාගෙන සිටියේ කුමක්ද, සහ ඔබට අවශ්‍ය ප්‍රතිඵල ගොඩනගා ගැනීමට ඉලක්ක කරා වෙනස් ආකාරයකින් යාමට හැකි ආකාරය තේරුම් ගැනීමට උපකාර වන පරිවර්තනීය පුහුණුවකි.$txt$,
    $txt$ආකෘතිය$txt$,
    $txt$එක්දින වැඩමුළුව$txt$,
    $txt$Experience Your 100% ගැන විමසන්න$txt$,
    $txt$සියලු වැඩසටහන් බලන්න$txt$
  ),
  (
    '0ed69570-1436-4e6b-94f5-58e528dd19c0',
    'ta',
    $txt$Experience Your 100% — Charana Gunawardhana$txt$,
    $txt$உங்கள் இலக்குகளை நோக்கி பயனுள்ள நடவடிக்கை எடுப்பது எப்படி என்பதைப் புரிந்துகொள்ள உதவும் ஒரு நாள் பட்டறை.$txt$,
    $txt$திட்டம்$txt$,
    $txt$ஒரு நாள் பட்டறை$txt$,
    $txt$Experience Your 100% பற்றி$txt$,
    $txt$நீங்கள் விரும்பியதை ஏன் அடையாமல் இருக்கலாம், உங்களைப் பிடித்து வைத்திருப்பது என்ன, மற்றும் நீங்கள் விரும்பும் முடிவுகளை உருவாக்க இலக்குகளை வேறுவிதமாக அணுகும் வழியைப் புரிந்துகொள்ள உதவும் மாற்றப் பயிற்சி.$txt$,
    $txt$வடிவம்$txt$,
    $txt$ஒரு நாள் பட்டறை$txt$,
    $txt$Experience Your 100% பற்றி விசாரிக்க$txt$,
    $txt$அனைத்து திட்டங்களையும் பார்க்க$txt$
  ),
  (
    '4c70bc16-e122-47e1-8a62-c012cdcf9809',
    'en',
    $txt$Reality Room — Charana Gunawardhana$txt$,
    $txt$Reality Room is a visualization workshop. A full-day practical workshop, available as a recorded workshop.$txt$,
    $txt$Program$txt$,
    $txt$Visualization Workshop$txt$,
    $txt$About Reality Room$txt$,
    $txt$A full-day practical workshop designed to help you understand visualization and learn how to visualize your goals with greater clarity and focus.$txt$,
    $txt$Format$txt$,
    $txt$Full-Day Workshop$txt$,
    $txt$Enquire About Reality Room$txt$,
    $txt$View All Programs$txt$
  ),
  (
    '4c70bc16-e122-47e1-8a62-c012cdcf9809',
    'si',
    $txt$Reality Room — Charana Gunawardhana$txt$,
    $txt$Reality Room යනු දෘශ්‍යකරණ වැඩමුළුවකි. පූර්ණ දින ප්‍රායෝගික වැඩමුළුවක්, පටිගත කළ වැඩමුළුවක් ලෙස ලබා ගත හැකිය.$txt$,
    $txt$වැඩසටහන$txt$,
    $txt$දෘශ්‍යකරණ වැඩමුළුව$txt$,
    $txt$Reality Room ගැන$txt$,
    $txt$දෘශ්‍යකරණය තේරුම් ගැනීමට සහ ඔබේ ඉලක්ක වඩා පැහැදිලිව, අවධානයෙන් දෘශ්‍යකරණය කරන ආකාරය ඉගෙන ගැනීමට සැලසුම් කළ පූර්ණ දින ප්‍රායෝගික වැඩමුළුවකි.$txt$,
    $txt$ආකෘතිය$txt$,
    $txt$පූර්ණ දින වැඩමුළුව$txt$,
    $txt$Reality Room ගැන විමසන්න$txt$,
    $txt$සියලු වැඩසටහන් බලන්න$txt$
  ),
  (
    '4c70bc16-e122-47e1-8a62-c012cdcf9809',
    'ta',
    $txt$Reality Room — Charana Gunawardhana$txt$,
    $txt$Reality Room ஒரு காட்சிப்படுத்தல் பட்டறை. முழு நாள் நடைமுறைப் பட்டறை, பதிவு செய்யப்பட்ட பட்டறையாகக் கிடைக்கிறது.$txt$,
    $txt$திட்டம்$txt$,
    $txt$காட்சிப்படுத்தல் பட்டறை$txt$,
    $txt$Reality Room பற்றி$txt$,
    $txt$காட்சிப்படுத்தலைப் புரிந்துகொள்ளவும், உங்கள் இலக்குகளை அதிக தெளிவுடனும் கவனத்துடனும் காட்சிப்படுத்தவும் உதவும் முழு நாள் நடைமுறைப் பட்டறை.$txt$,
    $txt$வடிவம்$txt$,
    $txt$முழு நாள் பட்டறை$txt$,
    $txt$Reality Room பற்றி விசாரிக்க$txt$,
    $txt$அனைத்து திட்டங்களையும் பார்க்க$txt$
  ),
  (
    '20dd00a2-8ba6-4782-8596-c77d521a71c9',
    'en',
    $txt$Paradigm Shifting for Abundance — Charana Gunawardhana$txt$,
    $txt$Paradigm Shifting for Abundance is a recorded course within the Charana Gunawardhana program ecosystem.$txt$,
    $txt$Program$txt$,
    $txt$Recorded Course$txt$,
    $txt$About the Course$txt$,
    $txt$A recorded course within the Charana Gunawardhana program ecosystem.$txt$,
    $txt$Format$txt$,
    $txt$Recorded Course$txt$,
    $txt$Enquire About the Course$txt$,
    $txt$View All Programs$txt$
  ),
  (
    '20dd00a2-8ba6-4782-8596-c77d521a71c9',
    'si',
    $txt$Paradigm Shifting for Abundance — Charana Gunawardhana$txt$,
    $txt$Charana Gunawardhana වැඩසටහන් රාමුව තුළ ඇති පටිගත කළ පාඨමාලාවකි.$txt$,
    $txt$වැඩසටහන$txt$,
    $txt$පටිගත කළ පාඨමාලාව$txt$,
    $txt$පාඨමාලාව ගැන$txt$,
    $txt$Charana Gunawardhana වැඩසටහන් රාමුව තුළ ඇති පටිගත කළ පාඨමාලාවකි.$txt$,
    $txt$ආකෘතිය$txt$,
    $txt$පටිගත කළ පාඨමාලාව$txt$,
    $txt$පාඨමාලාව ගැන විමසන්න$txt$,
    $txt$සියලු වැඩසටහන් බලන්න$txt$
  ),
  (
    '20dd00a2-8ba6-4782-8596-c77d521a71c9',
    'ta',
    $txt$Paradigm Shifting for Abundance — Charana Gunawardhana$txt$,
    $txt$Paradigm Shifting for Abundance என்பது Charana Gunawardhana திட்ட அமைப்பிற்குள் அமைந்த பதிவு செய்யப்பட்ட பாடநெறி.$txt$,
    $txt$திட்டம்$txt$,
    $txt$பதிவு செய்யப்பட்ட பாடநெறி$txt$,
    $txt$பாடநெறி பற்றி$txt$,
    $txt$Charana Gunawardhana திட்ட அமைப்பிற்குள் அமைந்த பதிவு செய்யப்பட்ட பாடநெறி.$txt$,
    $txt$வடிவம்$txt$,
    $txt$பதிவு செய்யப்பட்ட பாடநெறி$txt$,
    $txt$பாடநெறி பற்றி விசாரிக்க$txt$,
    $txt$அனைத்து திட்டங்களையும் பார்க்க$txt$
  );
