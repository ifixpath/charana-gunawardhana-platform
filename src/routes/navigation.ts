import type { Translation } from '@/i18n/types'
import { ROUTES, type RoutePath } from '@/routes/paths'

export type NavItem = {
  /** Resolved against the active locale at render time. */
  labelKey: keyof Translation['nav']
  /** Language-neutral path; the locale prefix is applied when linking. */
  path: RoutePath
}

export const MAIN_NAV: readonly NavItem[] = [
  { labelKey: 'home', path: ROUTES.home },
  { labelKey: 'about', path: ROUTES.about },
  { labelKey: 'programs', path: ROUTES.programs },
  { labelKey: 'insights', path: ROUTES.insights },
  { labelKey: 'media', path: ROUTES.media },
  { labelKey: 'contact', path: ROUTES.contact },
]
