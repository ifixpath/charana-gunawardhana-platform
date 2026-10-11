import { createClient } from '@supabase/supabase-js'

import { getSupabaseServerEnv } from './env.js'

const PROGRAM_STATUSES = ['draft', 'published'] as const
const PROGRAM_FORMATS = ['program', 'workshop', 'zoomClass', 'longTerm', 'recordedCourse'] as const
const TRANSLATION_LOCALES = ['en', 'si', 'ta'] as const

export type AdminProgramStatus = (typeof PROGRAM_STATUSES)[number]
export type AdminProgramFormatId = (typeof PROGRAM_FORMATS)[number]

export type AdminProgramRecord = {
  id: string
  slug: string
  displayName: string
  status: AdminProgramStatus
  formatId: AdminProgramFormatId | null
  updatedAt: string
}

export type AdminProgramsBody =
  | { programs: AdminProgramRecord[] }
  | { error: 'unauthorized' | 'forbidden' | 'server_error' }

export type AdminProgramsResult = {
  status: 200 | 401 | 403 | 500
  body: AdminProgramsBody
}

function unauthorized(): AdminProgramsResult {
  return { status: 401, body: { error: 'unauthorized' } }
}

function serverError(): AdminProgramsResult {
  return { status: 500, body: { error: 'server_error' } }
}

function readBearerToken(request: Request): string | null {
  const header = request.headers.get('authorization')
  if (!header) return null

  const match = /^Bearer\s+(\S+)\s*$/i.exec(header)
  return match?.[1] ?? null
}

function isMember<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === 'string' && values.some((entry) => entry === value)
}

/**
 * Maps a programs row to the admin list.
 * displayName is programs.official_name. program_translations has no name column.
 */
export function parseAdminProgramRows(value: unknown): AdminProgramRecord[] | null {
  if (!Array.isArray(value)) return null

  const programs: AdminProgramRecord[] = []

  for (const row of value) {
    if (typeof row !== 'object' || row === null) return null

    const id = 'id' in row ? row.id : null
    const slug = 'slug' in row ? row.slug : null
    const officialName = 'official_name' in row ? row.official_name : null
    const status = 'status' in row ? row.status : null
    const formatId = 'format_id' in row ? row.format_id : undefined
    const updatedAt = 'updated_at' in row ? row.updated_at : null

    if (typeof id !== 'string' || id.length === 0) return null
    if (typeof slug !== 'string' || slug.trim().length === 0) return null
    if (typeof officialName !== 'string' || officialName.trim().length === 0) return null
    if (!isMember(PROGRAM_STATUSES, status)) return null
    if (formatId !== null && !isMember(PROGRAM_FORMATS, formatId)) return null
    if (typeof updatedAt !== 'string' || updatedAt.length === 0) return null

    programs.push({
      id,
      slug,
      displayName: officialName,
      status,
      formatId,
      updatedAt,
    })
  }

  return programs
}

/** Confirms translation rows are readable. Their copy is not returned. */
export function parseProgramTranslationRows(value: unknown): true | null {
  if (!Array.isArray(value)) return null

  for (const row of value) {
    if (typeof row !== 'object' || row === null) return null

    const programId = 'program_id' in row ? row.program_id : null
    const locale = 'locale' in row ? row.locale : null

    if (typeof programId !== 'string' || programId.length === 0) return null
    if (!isMember(TRANSLATION_LOCALES, locale)) return null
  }

  return true
}

const PROGRAM_ID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export function isAdminProgramId(value: string): boolean {
  return PROGRAM_ID.test(value)
}

export function readAdminProgramId(request: Request): string | null {
  let pathname: string

  try {
    pathname = new URL(request.url).pathname
  } catch {
    return null
  }

  const match = /^\/api\/admin\/programs\/([^/]+)$/.exec(pathname)
  if (!match?.[1]) return null

  try {
    return decodeURIComponent(match[1])
  } catch {
    return null
  }
}

type AdminProgramTranslation = {
  locale: (typeof TRANSLATION_LOCALES)[number]
  metaTitle: string | null
  metaDescription: string | null
  heroEyebrow: string | null
  heroDescriptor: string | null
  aboutHeading: string | null
  aboutBody: string | null
  formatHeading: string | null
  formatValue: string | null
  ctaEnquire: string | null
  ctaAllPrograms: string | null
}

export type AdminProgramDetail = {
  id: string
  slug: string
  officialName: string
  formatId: AdminProgramFormatId | null
  path: string
  status: AdminProgramStatus
  sortOrder: number
  updatedAt: string
  translations: AdminProgramTranslation[]
}

export type AdminProgramDetailResult = {
  status: 200 | 401 | 403 | 404 | 500
  body: { program: AdminProgramDetail } | { error: 'unauthorized' | 'forbidden' | 'not_found' | 'server_error' }
}

function notFound(): AdminProgramDetailResult {
  return { status: 404, body: { error: 'not_found' } }
}

function detailUnauthorized(): AdminProgramDetailResult {
  return { status: 401, body: { error: 'unauthorized' } }
}

function detailServerError(): AdminProgramDetailResult {
  return { status: 500, body: { error: 'server_error' } }
}

function optionalText(value: unknown): string | null | undefined {
  if (value === null) return null
  if (typeof value === 'string') return value
  return undefined
}

export function parseAdminProgramDetail(program: unknown, translations: unknown): AdminProgramDetail | null {
  if (typeof program !== 'object' || program === null || !Array.isArray(translations)) return null

  const id = 'id' in program ? program.id : null
  const slug = 'slug' in program ? program.slug : null
  const officialName = 'official_name' in program ? program.official_name : null
  const status = 'status' in program ? program.status : null
  const formatId = 'format_id' in program ? program.format_id : undefined
  const path = 'path' in program ? program.path : null
  const sortOrder = 'sort_order' in program ? program.sort_order : null
  const updatedAt = 'updated_at' in program ? program.updated_at : null

  if (typeof id !== 'string' || !isAdminProgramId(id)) return null
  if (typeof slug !== 'string' || slug.trim().length === 0) return null
  if (typeof officialName !== 'string' || officialName.trim().length === 0) return null
  if (!isMember(PROGRAM_STATUSES, status)) return null
  if (formatId !== null && !isMember(PROGRAM_FORMATS, formatId)) return null
  if (typeof path !== 'string' || !path.startsWith('/')) return null
  if (typeof sortOrder !== 'number' || !Number.isInteger(sortOrder)) return null
  if (typeof updatedAt !== 'string' || updatedAt.length === 0) return null

  const parsedTranslations: AdminProgramTranslation[] = []

  for (const row of translations) {
    if (typeof row !== 'object' || row === null) return null

    const locale = 'locale' in row ? row.locale : null
    const metaTitle = 'meta_title' in row ? optionalText(row.meta_title) : undefined
    const metaDescription = 'meta_description' in row ? optionalText(row.meta_description) : undefined
    const heroEyebrow = 'hero_eyebrow' in row ? optionalText(row.hero_eyebrow) : undefined
    const heroDescriptor = 'hero_descriptor' in row ? optionalText(row.hero_descriptor) : undefined
    const aboutHeading = 'about_heading' in row ? optionalText(row.about_heading) : undefined
    const aboutBody = 'about_body' in row ? optionalText(row.about_body) : undefined
    const formatHeading = 'format_heading' in row ? optionalText(row.format_heading) : undefined
    const formatValue = 'format_value' in row ? optionalText(row.format_value) : undefined
    const ctaEnquire = 'cta_enquire' in row ? optionalText(row.cta_enquire) : undefined
    const ctaAllPrograms = 'cta_all_programs' in row ? optionalText(row.cta_all_programs) : undefined

    if (!isMember(TRANSLATION_LOCALES, locale)) return null
    if (parsedTranslations.some((entry) => entry.locale === locale)) return null
    if (
      metaTitle === undefined ||
      metaDescription === undefined ||
      heroEyebrow === undefined ||
      heroDescriptor === undefined ||
      aboutHeading === undefined ||
      aboutBody === undefined ||
      formatHeading === undefined ||
      formatValue === undefined ||
      ctaEnquire === undefined ||
      ctaAllPrograms === undefined
    ) {
      return null
    }

    parsedTranslations.push({
      locale,
      metaTitle,
      metaDescription,
      heroEyebrow,
      heroDescriptor,
      aboutHeading,
      aboutBody,
      formatHeading,
      formatValue,
      ctaEnquire,
      ctaAllPrograms,
    })
  }

  return {
    id,
    slug,
    officialName,
    formatId,
    path,
    status,
    sortOrder,
    updatedAt,
    translations: parsedTranslations,
  }
}

function userClient(token: string, env: { url: string; publishableKey: string }) {
  return createClient(env.url, env.publishableKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
}

/**
 * Reads programs and translation rows as the authorized user.
 * Row visibility follows the caller's policies. program_offers is not queried.
 */
export async function listAdminPrograms(request: Request): Promise<AdminProgramsResult> {
  const token = readBearerToken(request)
  if (!token) return unauthorized()

  let env: ReturnType<typeof getSupabaseServerEnv>

  try {
    env = getSupabaseServerEnv()
  } catch {
    return serverError()
  }

  try {
    const client = userClient(token, env)

    const programsQuery = await client
      .from('programs')
      .select('id, slug, official_name, format_id, status, updated_at')
      .order('sort_order', { ascending: true })
      .order('slug', { ascending: true })

    const translationsQuery = await client
      .from('program_translations')
      .select('program_id, locale')

    if (programsQuery.error || translationsQuery.error) return serverError()

    const programs = parseAdminProgramRows(programsQuery.data)
    const translations = parseProgramTranslationRows(translationsQuery.data)

    if (!programs || !translations) return serverError()

    return { status: 200, body: { programs } }
  } catch {
    return serverError()
  }
}

/**
 * Reads one program and its stored translations as the authorized user.
 * A hidden or missing row is not found. program_offers is not queried.
 */
export async function getAdminProgram(request: Request): Promise<AdminProgramDetailResult> {
  const token = readBearerToken(request)
  if (!token) return detailUnauthorized()

  const programId = readAdminProgramId(request)
  if (!programId || !isAdminProgramId(programId)) return notFound()

  let env: ReturnType<typeof getSupabaseServerEnv>

  try {
    env = getSupabaseServerEnv()
  } catch {
    return detailServerError()
  }

  try {
    const client = userClient(token, env)
    const programQuery = await client
      .from('programs')
      .select('id, slug, official_name, format_id, path, status, sort_order, updated_at')
      .eq('id', programId)
      .maybeSingle()

    if (programQuery.error) return detailServerError()
    if (!programQuery.data) return notFound()

    const translationsQuery = await client
      .from('program_translations')
      .select(
        'locale, meta_title, meta_description, hero_eyebrow, hero_descriptor, about_heading, about_body, format_heading, format_value, cta_enquire, cta_all_programs',
      )
      .eq('program_id', programId)
      .order('locale', { ascending: true })

    if (translationsQuery.error) return detailServerError()

    const program = parseAdminProgramDetail(programQuery.data, translationsQuery.data)
    if (!program) return detailServerError()

    return { status: 200, body: { program } }
  } catch {
    return detailServerError()
  }
}
