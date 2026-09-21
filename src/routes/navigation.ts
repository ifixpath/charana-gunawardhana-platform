import { ROUTES, type RoutePath } from '@/routes/paths'

export type NavItem = {
  label: string
  path: RoutePath
}

export const MAIN_NAV: readonly NavItem[] = [
  { label: 'Home', path: ROUTES.home },
  { label: 'About', path: ROUTES.about },
  { label: 'Programs', path: ROUTES.programs },
  { label: 'Insights', path: ROUTES.insights },
  { label: 'Media', path: ROUTES.media },
  { label: 'Contact', path: ROUTES.contact },
]
