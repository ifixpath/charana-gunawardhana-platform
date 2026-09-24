/**
 * Locale model for the public site.
 *
 * English is the default and is served without a prefix, so the existing
 * English URLs never change. Every other locale lives under its own prefix:
 *
 *   /programs        → English
 *   /si/programs     → Sinhala
 *   /ta/programs     → Tamil
 *
 * The same rule applies to any route added later, including nested ones such
 * as `/programs/mind-magic`, because the prefix is applied to the whole path
 * rather than to a fixed list of pages.
 */

export const LOCALES = ['en', 'si', 'ta'] as const

export type Locale = (typeof LOCALES)[number]

/** Served without a prefix. */
export const DEFAULT_LOCALE: Locale = 'en'

/**
 * BCP 47 tags, used for the `lang` attribute today and available for
 * `hreflang` once the site has a canonical origin to build absolute URLs from.
 */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en',
  si: 'si-LK',
  ta: 'ta-LK',
}

/**
 * How each language names itself. The short form is what the switcher shows;
 * the full name is the accessible name, always written in its own language so
 * a speaker of that language can recognise it.
 */
export const LOCALE_LABELS: Record<Locale, { short: string; name: string }> = {
  en: { short: 'EN', name: 'English' },
  si: { short: 'සිං', name: 'සිංහල' },
  ta: { short: 'தமிழ்', name: 'தமிழ்' },
}

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale)
}

/** Reads the locale out of a pathname, falling back to English. */
export function getLocaleFromPathname(pathname: string): Locale {
  const [, first] = pathname.split('/')

  return isLocale(first) ? first : DEFAULT_LOCALE
}

/**
 * Drops any locale prefix, returning the shared, language-neutral path.
 * `/si/programs` and `/programs` both become `/programs`.
 */
export function stripLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname)

  if (locale === DEFAULT_LOCALE) {
    return pathname || '/'
  }

  return pathname.slice(`/${locale}`.length) || '/'
}

/**
 * Adds the prefix for `locale` to a language-neutral path. English is returned
 * untouched, so `/` stays `/` rather than becoming `/en`.
 */
export function withLocale(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) {
    return path
  }

  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

/**
 * The same page in another language. This is what the switcher links to, so a
 * reader on `/programs` lands on `/si/programs` rather than the home page.
 */
export function toLocalizedPath(pathname: string, locale: Locale): string {
  return withLocale(stripLocale(pathname), locale)
}

/**
 * Every language's URL for the current page, keyed by locale.
 *
 * These are root-relative. Absolute canonical and `hreflang` URLs are built
 * from `SITE_URL` in `usePageMeta`.
 */
export function alternatePaths(pathname: string): Record<Locale, string> {
  const path = stripLocale(pathname)

  return {
    en: withLocale(path, 'en'),
    si: withLocale(path, 'si'),
    ta: withLocale(path, 'ta'),
  }
}
