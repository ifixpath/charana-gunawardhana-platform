import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { DEFAULT_LOCALE, LOCALES, LOCALE_TAGS, alternatePaths } from '@/i18n/config'

type PageMeta = {
  title: string
  description: string
}

/** Marks the tags this hook owns, so it only ever removes its own. */
const OWNED = 'data-page-meta'

/**
 * Localised document title, meta description and `hreflang` alternates for a
 * single page, written straight to the document — no SEO package needed.
 *
 * Both the title and the description are restored when the page unmounts, so
 * the defaults in `index.html` come back for pages that do not set their own.
 */
export function usePageMeta({ title, description }: PageMeta) {
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
    const { origin } = window.location

    const links = [...LOCALES, 'x-default' as const].map((entry) => {
      const locale = entry === 'x-default' ? DEFAULT_LOCALE : entry
      const link = document.createElement('link')

      link.rel = 'alternate'
      link.hreflang = entry === 'x-default' ? 'x-default' : LOCALE_TAGS[locale]
      link.href = `${origin}${paths[locale]}`
      link.setAttribute(OWNED, '')
      document.head.append(link)

      return link
    })

    return () => {
      links.forEach((link) => {
        link.remove()
      })
    }
  }, [pathname])
}
