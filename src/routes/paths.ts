export const ROUTES = {
  home: '/',
  about: '/about',
  programs: '/programs',
  mindMagic: '/programs/mind-magic',
  insights: '/insights',
  media: '/media',
  contact: '/contact',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]

/**
 * Routes whose first section paints its own dark background behind the header,
 * which lets the header sit transparently on top of it until the page scrolls.
 */
export const OVERLAY_HEADER_ROUTES: readonly string[] = [ROUTES.home, ROUTES.mindMagic]
