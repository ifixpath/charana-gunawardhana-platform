import type { ProgramFormatId, ProgramStatus } from '@/lib/supabase'

export const ADMIN_PROGRAMS_PATH = '/api/admin/programs'

export type AdminProgramRecord = {
  id: string
  slug: string
  displayName: string
  status: ProgramStatus
  formatId: ProgramFormatId | null
  updatedAt: string
}

export type AdminProgramsLoad =
  | { status: 'loading' }
  | { status: 'unauthorized' }
  | { status: 'forbidden' }
  | { status: 'error' }
  | { status: 'ready'; programs: AdminProgramRecord[] }

const PROGRAM_STATUSES = ['draft', 'published'] as const
const PROGRAM_FORMATS = ['program', 'workshop', 'zoomClass', 'longTerm', 'recordedCourse'] as const

function isMember<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === 'string' && values.some((entry) => entry === value)
}

export function parseAdminProgramsResponse(value: unknown): AdminProgramRecord[] | null {
  if (typeof value !== 'object' || value === null || !('programs' in value)) return null
  if (!Array.isArray(value.programs)) return null

  const programs: AdminProgramRecord[] = []

  for (const row of value.programs) {
    if (typeof row !== 'object' || row === null) return null

    const id = 'id' in row ? row.id : null
    const slug = 'slug' in row ? row.slug : null
    const displayName = 'displayName' in row ? row.displayName : null
    const status = 'status' in row ? row.status : null
    const formatId = 'formatId' in row ? row.formatId : undefined
    const updatedAt = 'updatedAt' in row ? row.updatedAt : null

    if (typeof id !== 'string' || id.length === 0) return null
    if (typeof slug !== 'string' || slug.length === 0) return null
    if (typeof displayName !== 'string' || displayName.length === 0) return null
    if (!isMember(PROGRAM_STATUSES, status)) return null
    if (formatId !== null && !isMember(PROGRAM_FORMATS, formatId)) return null
    if (typeof updatedAt !== 'string' || updatedAt.length === 0) return null

    programs.push({ id, slug, displayName, status, formatId, updatedAt })
  }

  return programs
}

export async function requestAdminPrograms(accessToken: string): Promise<AdminProgramsLoad> {
  try {
    const response = await fetch(ADMIN_PROGRAMS_PATH, {
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
      const programs = parseAdminProgramsResponse(body)
      return programs ? { status: 'ready', programs } : { status: 'error' }
    }

    if (response.status === 401) return { status: 'unauthorized' }
    if (response.status === 403) return { status: 'forbidden' }
    return { status: 'error' }
  } catch {
    return { status: 'error' }
  }
}
