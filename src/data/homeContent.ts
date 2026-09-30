import { PROGRAM_LOGOS, type ImageAsset } from '@/data/images'
import { ROUTES, type RoutePath } from '@/routes/paths'

export const FOCUS_AREA_IDS = ['personal-growth', 'leadership', 'mindset', 'direction'] as const

export type FocusAreaId = (typeof FOCUS_AREA_IDS)[number]

/** Homepage "Areas of Focus" from the office document. Insights keeps `FOCUS_AREA_IDS`. */
export const HOME_FOCUS_IDS = [
  'personal-growth',
  'mindset',
  'money-entrepreneurship',
  'family-relationships',
] as const

export type HomeFocusId = (typeof HOME_FOCUS_IDS)[number]

export const PROGRAM_FORMAT_IDS = [
  'program',
  'workshop',
  'zoomClass',
  'longTerm',
  'recordedCourse',
] as const

export type ProgramFormatId = (typeof PROGRAM_FORMAT_IDS)[number]

export const PROGRAM_IDS = [
  'mind-magic',
  'optimistic-magnet',
  'social-media-business-development',
  'unstoppable',
  'experience-your-100',
  'reality-room',
  'paradigm-shifting-for-abundance',
] as const

export type ProgramId = (typeof PROGRAM_IDS)[number]

export type ProgramPreview = {
  id: ProgramId
  /** Official programme name — never translated. */
  name: string
  format: ProgramFormatId
  logo?: ImageAsset
  path?: RoutePath
}

/** Homepage order from the office document. Official names and routes are unchanged. */
export const PROGRAM_PREVIEWS: readonly ProgramPreview[] = [
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
    id: 'paradigm-shifting-for-abundance',
    name: 'Paradigm Shifting for Abundance',
    format: 'recordedCourse',
    logo: PROGRAM_LOGOS['paradigm-shifting-for-abundance'],
    path: ROUTES.paradigmShiftingForAbundance,
  },
]
