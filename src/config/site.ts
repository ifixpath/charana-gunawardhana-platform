/** Canonical production origin. No trailing slash. */
export const SITE_URL = 'https://charanagunawardhana.com'

/**
 * Turns a root-relative path into an absolute production URL.
 * `/` stays `https://charanagunawardhana.com` rather than gaining a slash.
 */
export function toAbsoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`

  if (normalized === '/') {
    return SITE_URL
  }

  return `${SITE_URL}${normalized}`
}
