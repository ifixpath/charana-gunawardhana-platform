import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import Container from '@/components/layout/Container'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import MobileNavigation from '@/components/layout/MobileNavigation'
import ButtonLink from '@/components/ui/ButtonLink'
import { useIsScrolled } from '@/hooks/useIsScrolled'
import { stripLocale } from '@/i18n/config'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { MAIN_NAV } from '@/routes/navigation'
import { OVERLAY_HEADER_ROUTES, ROUTES } from '@/routes/paths'

const MOBILE_NAV_ID = 'mobile-navigation'

export default function Header() {
  const { pathname } = useLocation()
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const isScrolled = useIsScrolled(24)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Navigating from inside the panel closes it already; this covers the
  // browser back/forward buttons while the panel is open.
  useEffect(() => {
    const close = () => setIsMenuOpen(false)

    window.addEventListener('popstate', close)

    return () => {
      window.removeEventListener('popstate', close)
    }
  }, [])

  const closeMenu = (restoreFocus = false) => {
    setIsMenuOpen(false)

    if (restoreFocus) {
      toggleRef.current?.focus()
    }
  }

  // Transparent only while resting on top of a dark hero. The locale prefix is
  // stripped first, so `/si` gets the same treatment as `/`.
  const isSolid =
    !OVERLAY_HEADER_ROUTES.includes(stripLocale(pathname)) || isScrolled || isMenuOpen

  return (
    /* The panel is a sibling of the header, not a child: the header's
       `backdrop-blur` would otherwise become the containing block for its
       `fixed` positioning and shrink it to the header bar. */
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
          isSolid
            ? 'bg-primary-dark/90 border-white/10 backdrop-blur-md'
            : 'border-transparent bg-transparent',
        ].join(' ')}
      >
        <a
          href="#main"
          className="bg-accent text-primary-dark sr-only rounded-sm px-4 py-2 text-xs font-semibold uppercase focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-10"
        >
          {t.a11y.skipToContent}
        </a>

        {/* The gutter tightens on phones so the brand, the language switcher
            and the menu button all fit on one line. */}
        <Container className="flex h-[var(--header-height)] items-center justify-between gap-3 sm:gap-6">
          <Link
            to={localizedPath(ROUTES.home)}
            className="flex flex-col leading-none"
            aria-label={t.a11y.brandHome}
          >
            <span className="text-content-inverse font-serif text-lg sm:text-xl">Charana</span>
            <span className="text-accent text-[0.6rem] font-medium tracking-[0.34em] uppercase">
              Gunawardhana
            </span>
          </Link>

          <nav aria-label={t.a11y.mainNavigation} className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {MAIN_NAV.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={localizedPath(item.path)}
                    end={item.path === ROUTES.home}
                    className={({ isActive }) =>
                      [
                        'font-medium transition-colors',
                        labelClass(
                          t.nav[item.labelKey],
                          'text-[0.7rem] tracking-[0.18em] uppercase',
                          'text-[0.85rem]',
                        ),
                        isActive
                          ? 'text-accent-light'
                          : 'text-content-inverse-muted hover:text-content-inverse',
                      ].join(' ')
                    }
                  >
                    {t.nav[item.labelKey]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            {/* Below 360px the header runs out of room, so the switcher is
                reached through the mobile panel instead, where it always
                appears. */}
            <LanguageSwitcher className="hidden min-[360px]:flex" />

            {/* Wrapper handles the breakpoint so it never fights the button's
                own `display` utility. The button only appears once the row is
                wide enough to hold it beside the nav and the switcher — the
                Sinhala and Tamil labels are far longer than the English ones,
                and it duplicates the Programs nav link, so dropping it in the
                narrow band costs nothing. */}
            <div className="hidden xl:block">
              <ButtonLink to={localizedPath(ROUTES.programs)} size="sm">
                {t.actions.explorePrograms}
              </ButtonLink>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls={MOBILE_NAV_ID}
              aria-label={isMenuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              className="text-content-inverse hover:text-accent-light -mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center transition-colors lg:hidden"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </Container>
      </header>

      <MobileNavigation id={MOBILE_NAV_ID} isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 6.5h18M3 12h18M3 17.5h18" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" strokeLinecap="round" />
    </svg>
  )
}
