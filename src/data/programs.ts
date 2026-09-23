import { MIND_MAGIC_LOGO, MORNING_GYM_LOGO, MORNING_GYM_PHOTO, type ImageAsset } from '@/data/images'
import { type ProgramFormatId } from '@/data/homeContent'
import { ROUTES, type RoutePath } from '@/routes/paths'

export const CATALOG_PROGRAM_IDS = [
  'morning-gym',
  'mind-magic',
  'optimistic-magnet',
  'social-media-business-development',
  'unstoppable',
  'experience-your-100',
] as const

export type CatalogProgramId = (typeof CATALOG_PROGRAM_IDS)[number]

export type CatalogProgram = {
  id: CatalogProgramId
  /** Official programme name — never translated. */
  name: string
  format?: ProgramFormatId
  logo?: ImageAsset
  photo?: ImageAsset
  path?: RoutePath
}

export const CATALOG_PROGRAMS: readonly CatalogProgram[] = [
  {
    id: 'morning-gym',
    name: 'Morning Gym',
    logo: MORNING_GYM_LOGO,
    photo: MORNING_GYM_PHOTO,
    path: ROUTES.morningGym,
  },
  {
    id: 'mind-magic',
    name: 'Mind Magic',
    format: 'program',
    logo: MIND_MAGIC_LOGO,
    path: ROUTES.mindMagic,
  },
  {
    id: 'optimistic-magnet',
    name: 'Optimistic Magnet',
    format: 'program',
    path: ROUTES.optimisticMagnet,
  },
  {
    id: 'social-media-business-development',
    name: 'Social Media for Business Development',
    format: 'zoomClass',
    path: ROUTES.socialMediaBusinessDevelopment,
  },
  {
    id: 'unstoppable',
    name: 'Unstoppable',
    format: 'longTerm',
    path: ROUTES.unstoppable,
  },
  {
    id: 'experience-your-100',
    name: 'Experience Your 100%',
    format: 'workshop',
    path: ROUTES.experienceYour100,
  },
]
