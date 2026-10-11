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

/**
 * Reads programs and translation rows as the authorized user.
 * Existing policies return published rows only, so drafts are not selected.
 * program_offers is not queried.
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
    const client = createClient(env.url, env.publishableKey, {
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
