export const ROUTES = {
  home: '/',
  about: '/about',
  programs: '/programs',
  insights: '/insights',
  media: '/media',
  contact: '/contact',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
