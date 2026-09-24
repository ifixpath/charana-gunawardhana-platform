import { MORNING_GYM_PHOTO, PROGRAM_LOGOS, type ImageAsset } from '@/data/images'
import { type ProgramFormatId } from '@/data/homeContent'
import { ROUTES, type RoutePath } from '@/routes/paths'

export const CATALOG_PROGRAM_IDS = [
  'morning-gym',
  'mind-magic',
  'optimistic-magnet',
  'social-media-business-development',
  'unstoppable',
  'experience-your-100',
  'reality-room',
  'paradigm-shifting-for-abundance',
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
    logo: PROGRAM_LOGOS['morning-gym'],
    photo: MORNING_GYM_PHOTO,
    path: ROUTES.morningGym,
  },
  {
    id: 'mind-magic',
    name: 'Mind Magic',
    format: 'program',
    logo: PROGRAM_LOGOS['mind-magic'],
    path: ROUTES.mindMagic,
  },
  {
    id: 'optimistic-magnet',
    name: 'Optimistic Magnet',
    format: 'program',
    logo: PROGRAM_LOGOS['optimistic-magnet'],
    path: ROUTES.optimisticMagnet,
  },
  {
    id: 'social-media-business-development',
    name: 'Social Media for Business Development',
    format: 'zoomClass',
    logo: PROGRAM_LOGOS['social-media-business-development'],
    path: ROUTES.socialMediaBusinessDevelopment,
  },
  {
    id: 'unstoppable',
    name: 'Unstoppable',
    format: 'longTerm',
    logo: PROGRAM_LOGOS.unstoppable,
    path: ROUTES.unstoppable,
  },
  {
    id: 'experience-your-100',
    name: 'Experience Your 100%',
    format: 'workshop',
    logo: PROGRAM_LOGOS['experience-your-100'],
    path: ROUTES.experienceYour100,
  },
  {
    id: 'reality-room',
    name: 'Reality Room',
    format: 'workshop',
    logo: PROGRAM_LOGOS['reality-room'],
    path: ROUTES.realityRoom,
  },
  {
    id: 'paradigm-shifting-for-abundance',
    name: 'Paradigm Shifting for Abundance',
    format: 'recordedCourse',
    logo: PROGRAM_LOGOS['paradigm-shifting-for-abundance'],
    path: ROUTES.paradigmShiftingForAbundance,
  },
]
