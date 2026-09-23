import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import { getLocaleFromPathname, withLocale, type Locale } from '@/i18n/config'
import { getTranslations } from '@/i18n'
import type { Translation } from '@/i18n/types'

/** The locale the current URL is in. */
export function useLocale(): Locale {
  const { pathname } = useLocation()

  return getLocaleFromPathname(pathname)
}

/** Shared chrome strings for the current locale. */
export function useTranslations(): Translation {
  return getTranslations(useLocale())
}

/**
 * Turns a language-neutral path from `ROUTES` into one for the current
 * locale, so links keep the reader in the language they are browsing in.
 */
export function useLocalizedPath(): (path: string) => string {
  const locale = useLocale()

  return useCallback((path: string) => withLocale(path, locale), [locale])
}
