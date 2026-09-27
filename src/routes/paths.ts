export const ROUTES = {
  home: '/',
  about: '/about',
  programs: '/programs',
  morningGym: '/programs/morning-gym',
  mindMagic: '/programs/mind-magic',
  mindMagicTheSecretPart1: '/programs/mind-magic/the-secret/part-1',
  optimisticMagnet: '/programs/optimistic-magnet',
  socialMediaBusinessDevelopment: '/programs/social-media-business-development',
  unstoppable: '/programs/unstoppable',
  experienceYour100: '/programs/experience-your-100',
  realityRoom: '/programs/reality-room',
  paradigmShiftingForAbundance: '/programs/paradigm-shifting-for-abundance',
  insights: '/insights',
  media: '/media',
  contact: '/contact',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]

/**
 * Routes whose first section paints its own dark background behind the header,
 * which lets the header sit transparently on top of it until the page scrolls.
 */
export const OVERLAY_HEADER_ROUTES: readonly string[] = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.programs,
  ROUTES.morningGym,
  ROUTES.mindMagic,
  ROUTES.mindMagicTheSecretPart1,
  ROUTES.optimisticMagnet,
  ROUTES.socialMediaBusinessDevelopment,
  ROUTES.unstoppable,
  ROUTES.experienceYour100,
  ROUTES.realityRoom,
  ROUTES.paradigmShiftingForAbundance,
  ROUTES.media,
  ROUTES.insights,
  ROUTES.contact,
]
