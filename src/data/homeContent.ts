import { MIND_MAGIC_LOGO, type ImageAsset } from '@/data/images'
import { ROUTES, type RoutePath } from '@/routes/paths'

export const FOCUS_AREA_IDS = ['personal-growth', 'leadership', 'mindset', 'direction'] as const

export type FocusAreaId = (typeof FOCUS_AREA_IDS)[number]

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

export const PROGRAM_PREVIEWS: readonly ProgramPreview[] = [
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
  {
    id: 'reality-room',
    name: 'Reality Room',
    format: 'workshop',
    path: ROUTES.realityRoom,
  },
  {
    id: 'paradigm-shifting-for-abundance',
    name: 'Paradigm Shifting for Abundance',
    format: 'recordedCourse',
    path: ROUTES.paradigmShiftingForAbundance,
  },
]

export const TRUST_PILLAR_IDS = [
  'student-stories',
  'community-experiences',
  'media-recognition',
] as const

export type TrustPillarId = (typeof TRUST_PILLAR_IDS)[number]
