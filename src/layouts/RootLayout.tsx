import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { LOCALE_TAGS } from '@/i18n/config'
import { useLocale } from '@/i18n/useI18n'

export default function RootLayout() {
  const locale = useLocale()

  // Keeps `<html lang>` truthful as the reader moves between languages, which
  // is what screen readers use to pick a voice.
  useEffect(() => {
    document.documentElement.lang = LOCALE_TAGS[locale]
  }, [locale])

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      {/* tabIndex makes the header's skip link move focus, not just scroll. */}
      <main id="main" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
