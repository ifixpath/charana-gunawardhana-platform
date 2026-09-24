import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { toAbsoluteUrl } from '@/config/site'
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_TAGS,
  alternatePaths,
  getLocaleFromPathname,
} from '@/i18n/config'

type PageMeta = {
  title: string
  description: string
  /** Unknown paths should not be presented as indexable localised pages. */
  robots?: 'index' | 'noindex'
}

/** Marks the tags this hook owns, so it only ever removes its own. */
const OWNED = 'data-page-meta'

function upsertOwnedMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"][${OWNED}]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    element.setAttribute(OWNED, '')
    document.head.append(element)
  }

  element.setAttribute('content', content)
}

function clearOwnedTags() {
  document.head.querySelectorAll(`[${OWNED}]`).forEach((element) => element.remove())
}

/**
 * Localised document title, meta description, canonical, `hreflang` and a
 * small Open Graph / Twitter set — no SEO package needed.
 *
 * Absolute URLs always use the production origin, never the current host.
 * Title and description are restored when the page unmounts, so the defaults
 * in `index.html` come back for pages that do not set their own.
 */
export function usePageMeta({ title, description, robots = 'index' }: PageMeta) {
  const { pathname } = useLocation()

  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content') ?? null
    meta?.setAttribute('content', description)

    return () => {
      document.title = previousTitle

      if (meta && previousDescription !== null) {
        meta.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])

  useEffect(() => {
    const paths = alternatePaths(pathname)
    const locale = getLocaleFromPathname(pathname)
    const canonicalHref = toAbsoluteUrl(paths[locale])

    upsertOwnedMeta('property', 'og:title', title)
    upsertOwnedMeta('property', 'og:description', description)
    upsertOwnedMeta('property', 'og:type', 'website')
    upsertOwnedMeta('property', 'og:site_name', 'Charana Gunawardhana')
    upsertOwnedMeta('name', 'twitter:card', 'summary')
    upsertOwnedMeta('name', 'twitter:title', title)
    upsertOwnedMeta('name', 'twitter:description', description)

    if (robots === 'noindex') {
      upsertOwnedMeta('name', 'robots', 'noindex')

      return clearOwnedTags
    }

    upsertOwnedMeta('property', 'og:url', canonicalHref)

    const canonical = document.createElement('link')
    canonical.rel = 'canonical'
    canonical.href = canonicalHref
    canonical.setAttribute(OWNED, '')
    document.head.append(canonical)

    ;[...LOCALES, 'x-default' as const].forEach((entry) => {
      const alternateLocale = entry === 'x-default' ? DEFAULT_LOCALE : entry
      const link = document.createElement('link')

      link.rel = 'alternate'
      link.hreflang = entry === 'x-default' ? 'x-default' : LOCALE_TAGS[alternateLocale]
      link.href = toAbsoluteUrl(paths[alternateLocale])
      link.setAttribute(OWNED, '')
      document.head.append(link)
    })

    return clearOwnedTags
  }, [pathname, title, description, robots])
}
