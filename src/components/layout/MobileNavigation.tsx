import { useEffect, useRef, type KeyboardEvent } from 'react'
import { NavLink } from 'react-router-dom'

import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import ButtonLink from '@/components/ui/ButtonLink'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { MAIN_NAV } from '@/routes/navigation'
import { ROUTES } from '@/routes/paths'

type MobileNavigationProps = {
  id: string
  isOpen: boolean
  /** `restoreFocus` returns focus to the toggle button for keyboard users. */
  onClose: (restoreFocus?: boolean) => void
}

const FOCUSABLE = 'a[href], button:not([disabled])'

export default function MobileNavigation({ id, isOpen, onClose }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()
  const localizedPath = useLocalizedPath()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose(true)
      return
    }

    if (event.key !== 'Tab') {
      return
    }

    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)

    if (!focusable || focusable.length === 0) {
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <div
      ref={panelRef}
      id={id}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className="bg-primary-dark animate-fade-in fixed inset-0 z-40 overflow-y-auto lg:hidden"
    >
      <nav
        aria-label={t.a11y.mobileNavigation}
        className="flex min-h-full flex-col justify-center px-6 pt-[var(--header-height)] pb-12"
      >
        <ul className="flex flex-col gap-1">
          {MAIN_NAV.map((item) => (
            <li key={item.path}>
              <NavLink
                to={localizedPath(item.path)}
                end={item.path === ROUTES.home}
                onClick={() => onClose()}
                className={({ isActive }) =>
                  [
                    'border-white/10 font-serif block border-b py-4 text-2xl transition-colors',
                    isActive ? 'text-accent-light' : 'text-content-inverse hover:text-accent-light',
                  ].join(' ')
                }
              >
                {t.nav[item.labelKey]}
              </NavLink>
            </li>
          ))}
        </ul>

        <ButtonLink
          to={localizedPath(ROUTES.programs)}
          onClick={() => onClose()}
          className="mt-10 w-full"
        >
          {t.actions.explorePrograms}
        </ButtonLink>

        {/* Only below 360px, where the header has no room for the switcher.
            Above that the header keeps its own, and showing both at once
            would put two copies on screen while the panel is open. */}
        <LanguageSwitcher
          className="mt-10 justify-center min-[360px]:hidden"
          onNavigate={() => onClose()}
        />
      </nav>
    </div>
  )
}
