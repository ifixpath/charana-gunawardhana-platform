import { Link, useLocation } from 'react-router-dom'

import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_TAGS,
  getLocaleFromPathname,
  toLocalizedPath,
  type Locale,
} from '@/i18n/config'
import { useTranslations } from '@/i18n/useI18n'

/**
 * Sinhala and Tamil sit optically smaller than Latin capitals at the same
 * font size, so they are set slightly larger to match. They also get no
 * letter-spacing: tracking pulls their conjuncts and vowel signs apart.
 */
const SCRIPT: Record<Locale, string> = {
  en: 'text-[0.7rem] tracking-[0.12em]',
  si: 'text-[0.85rem]',
  ta: 'text-[0.8rem]',
}

type LanguageSwitcherProps = {
  className?: string
  /** Lets the mobile panel close itself when a language is chosen. */
  onNavigate?: () => void
}

/**
 * Three links rather than a dropdown: with only three languages the whole set
 * fits inline, which keeps every option one tap away and needs no open state,
 * no focus trap and no extra markup in the header.
 *
 * Each link points at the current page in that language, so switching never
 * sends the reader back to the home page.
 */
export default function LanguageSwitcher({ className = '', onNavigate }: LanguageSwitcherProps) {
  const { pathname, search, hash } = useLocation()
  const t = useTranslations()
  const current = getLocaleFromPathname(pathname)

  return (
    <div
      role="group"
      aria-label={t.a11y.languageSwitcher}
      className={`divide-line/25 flex items-center divide-x ${className}`.trim()}
    >
      {LOCALES.map((locale) => {
        const isActive = locale === current

        return (
          <Link
            key={locale}
            to={`${toLocalizedPath(pathname, locale)}${search}${hash}`}
            lang={LOCALE_TAGS[locale]}
            hrefLang={LOCALE_TAGS[locale]}
            aria-label={LOCALE_LABELS[locale].name}
            aria-current={isActive ? 'true' : undefined}
            onClick={onNavigate}
            className={[
              'px-2 leading-5 font-medium transition-colors',
              SCRIPT[locale],
              isActive
                ? 'text-accent-light'
                : 'text-content-inverse-muted hover:text-content-inverse',
            ].join(' ')}
          >
            {LOCALE_LABELS[locale].short}
          </Link>
        )
      })}
    </div>
  )
}
