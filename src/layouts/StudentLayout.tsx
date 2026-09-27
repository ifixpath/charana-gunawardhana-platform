import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { DEFAULT_LOCALE, LOCALE_TAGS } from '@/i18n/config'

/**
 * Shell for account, learning and checkout routes.
 * Intentionally separate from the public RootLayout: no marketing header,
 * footer, or language switcher.
 */
export default function StudentLayout() {
  useEffect(() => {
    document.documentElement.lang = LOCALE_TAGS[DEFAULT_LOCALE]
  }, [])

  return (
    <div className="flex min-h-dvh flex-col">
      <main id="main" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
