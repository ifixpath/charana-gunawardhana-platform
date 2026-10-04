import { STUDENT_ROUTES, type StudentRoutePath } from '@/routes/paths'

const STUDENT_PATHS = new Set<string>(Object.values(STUDENT_ROUTES))

/** Accept only an exact student route. External and public paths are ignored. */
export function studentReturnPath(value: string | null): StudentRoutePath | null {
  if (!value || !STUDENT_PATHS.has(value) || value === STUDENT_ROUTES.account) {
    return null
  }

  return value as StudentRoutePath
}
