import type { Locale } from '@/i18n/config'
import type { ProgramFormatId, ProgramStatus } from '@/lib/supabase'

const PROGRAM_STATUSES = ['draft', 'published'] as const
const PROGRAM_FORMATS = ['program', 'workshop', 'zoomClass', 'longTerm', 'recordedCourse'] as const
const LOCALES = ['en', 'si', 'ta'] as const

const PROGRAM_ID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export type AdminProgramTranslation = {
  locale: Locale
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
  formatId: ProgramFormatId | null
  path: string
  status: ProgramStatus
  sortOrder: number
  updatedAt: string
  translations: AdminProgramTranslation[]
}

export type AdminProgramDetailLoad =
  | { status: 'loading' }
  | { status: 'unauthorized' }
  | { status: 'forbidden' }
  | { status: 'not-found' }
  | { status: 'error' }
  | { status: 'ready'; program: AdminProgramDetail }

function isMember<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === 'string' && values.some((entry) => entry === value)
}

function optionalText(value: unknown): string | null | undefined {
  if (value === null) return null
  if (typeof value === 'string') return value
  return undefined
}

export function parseAdminProgramDetailResponse(value: unknown): AdminProgramDetail | null {
  if (typeof value !== 'object' || value === null || !('program' in value)) return null
  const program = value.program
  if (typeof program !== 'object' || program === null) return null

  const id = 'id' in program ? program.id : null
  const slug = 'slug' in program ? program.slug : null
  const officialName = 'officialName' in program ? program.officialName : null
  const status = 'status' in program ? program.status : null
  const formatId = 'formatId' in program ? program.formatId : undefined
  const path = 'path' in program ? program.path : null
  const sortOrder = 'sortOrder' in program ? program.sortOrder : null
  const updatedAt = 'updatedAt' in program ? program.updatedAt : null
  const translations = 'translations' in program ? program.translations : null

  if (typeof id !== 'string' || !PROGRAM_ID.test(id)) return null
  if (typeof slug !== 'string' || slug.length === 0) return null
  if (typeof officialName !== 'string' || officialName.length === 0) return null
  if (!isMember(PROGRAM_STATUSES, status)) return null
  if (formatId !== null && !isMember(PROGRAM_FORMATS, formatId)) return null
  if (typeof path !== 'string' || !path.startsWith('/')) return null
  if (typeof sortOrder !== 'number' || !Number.isInteger(sortOrder)) return null
  if (typeof updatedAt !== 'string' || updatedAt.length === 0) return null
  if (!Array.isArray(translations)) return null

  const parsedTranslations: AdminProgramTranslation[] = []

  for (const row of translations) {
    if (typeof row !== 'object' || row === null) return null

    const locale = 'locale' in row ? row.locale : null
    const metaTitle = 'metaTitle' in row ? optionalText(row.metaTitle) : undefined
    const metaDescription = 'metaDescription' in row ? optionalText(row.metaDescription) : undefined
    const heroEyebrow = 'heroEyebrow' in row ? optionalText(row.heroEyebrow) : undefined
    const heroDescriptor = 'heroDescriptor' in row ? optionalText(row.heroDescriptor) : undefined
    const aboutHeading = 'aboutHeading' in row ? optionalText(row.aboutHeading) : undefined
    const aboutBody = 'aboutBody' in row ? optionalText(row.aboutBody) : undefined
    const formatHeading = 'formatHeading' in row ? optionalText(row.formatHeading) : undefined
    const formatValue = 'formatValue' in row ? optionalText(row.formatValue) : undefined
    const ctaEnquire = 'ctaEnquire' in row ? optionalText(row.ctaEnquire) : undefined
    const ctaAllPrograms = 'ctaAllPrograms' in row ? optionalText(row.ctaAllPrograms) : undefined

    if (!isMember(LOCALES, locale)) return null
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

export async function requestAdminProgram(
  accessToken: string,
  programId: string,
): Promise<AdminProgramDetailLoad> {
  try {
    const response = await fetch(`/api/admin/programs/${encodeURIComponent(programId)}`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
    })

    const contentType = response.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json')) return { status: 'error' }

    const body: unknown = await response.json()

    if (response.status === 200) {
      const program = parseAdminProgramDetailResponse(body)
      return program ? { status: 'ready', program } : { status: 'error' }
    }

    if (response.status === 401) return { status: 'unauthorized' }
    if (response.status === 403) return { status: 'forbidden' }
    if (response.status === 404) return { status: 'not-found' }
    return { status: 'error' }
  } catch {
    return { status: 'error' }
  }
}
