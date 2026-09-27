import { type CatalogProgramId } from '@/data/programs'
import { ROUTES, type RoutePath } from '@/routes/paths'

export const PROGRAM_RESOURCE_SERIES = ['the-secret'] as const

export type ProgramResourceSeries = (typeof PROGRAM_RESOURCE_SERIES)[number]

export type ProgramResource = {
  id: string
  programId: CatalogProgramId
  series: ProgramResourceSeries
  part: number
  path: RoutePath
}

/**
 * Public learning-resource registry only. Not a blog index and not LMS course
 * access. Add Part 2 / Part 3 as further rows with the same shape.
 */
export const PROGRAM_RESOURCES: readonly ProgramResource[] = [
  {
    id: 'the-secret-part-1',
    programId: 'mind-magic',
    series: 'the-secret',
    part: 1,
    path: ROUTES.mindMagicTheSecretPart1,
  },
]
