import type { Locale } from '@/i18n/config'
import { getSupabaseClient, type ProgramFormatId, type ProgramTranslationRow } from '@/lib/supabase'

/** Published program fields the public site can read. Drafts are excluded. */
export type PublishedProgram = {
  id: string
  slug: string
  officialName: string
  formatId: ProgramFormatId | null
  path: string
  sortOrder: number
}

export type PublishedProgramTranslation = Pick<
  ProgramTranslationRow,
  | 'program_id'
  | 'locale'
  | 'meta_title'
  | 'meta_description'
  | 'hero_eyebrow'
  | 'hero_descriptor'
  | 'about_heading'
  | 'about_body'
  | 'format_heading'
  | 'format_value'
  | 'cta_enquire'
  | 'cta_all_programs'
>

const PROGRAM_COLUMNS = 'id, slug, official_name, format_id, path, sort_order' as const

const TRANSLATION_COLUMNS =
  'program_id, locale, meta_title, meta_description, hero_eyebrow, hero_descriptor, about_heading, about_body, format_heading, format_value, cta_enquire, cta_all_programs' as const

type ProgramSelection = {
  id: string
  slug: string
  official_name: string
  format_id: ProgramFormatId | null
  path: string
  sort_order: number
}

function toPublishedProgram(row: ProgramSelection): PublishedProgram {
  return {
    id: row.id,
    slug: row.slug,
    officialName: row.official_name,
    formatId: row.format_id,
    path: row.path,
    sortOrder: row.sort_order,
  }
}

function throwOnError(error: { message: string } | null) {
  if (error) {
    throw new Error(error.message)
  }
}

/** Published programs in catalog order. */
export async function getPublishedPrograms(): Promise<PublishedProgram[]> {
  const { data, error } = await getSupabaseClient()
    .from('programs')
    .select(PROGRAM_COLUMNS)
    .eq('status', 'published')
    .order('sort_order', { ascending: true })

  throwOnError(error)

  return (data ?? []).map(toPublishedProgram)
}

/** One published program, or null when the slug is missing or still a draft. */
export async function getPublishedProgramBySlug(slug: string): Promise<PublishedProgram | null> {
  const { data, error } = await getSupabaseClient()
    .from('programs')
    .select(PROGRAM_COLUMNS)
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  throwOnError(error)

  return data ? toPublishedProgram(data) : null
}

/**
 * Copy for one published program and locale.
 * Returns null when the program is missing, draft, or has no row for that locale.
 */
export async function getPublishedProgramTranslation(
  programId: string,
  locale: Locale,
): Promise<PublishedProgramTranslation | null> {
  const program = await getSupabaseClient()
    .from('programs')
    .select('id')
    .eq('id', programId)
    .eq('status', 'published')
    .maybeSingle()

  throwOnError(program.error)

  if (!program.data) {
    return null
  }

  const translation = await getSupabaseClient()
    .from('program_translations')
    .select(TRANSLATION_COLUMNS)
    .eq('program_id', programId)
    .eq('locale', locale)
    .maybeSingle()

  throwOnError(translation.error)

  return translation.data
}
