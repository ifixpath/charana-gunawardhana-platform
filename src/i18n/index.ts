import type { Locale } from '@/i18n/config'
import { en } from '@/i18n/translations/en'
import { si } from '@/i18n/translations/si'
import { ta } from '@/i18n/translations/ta'
import type { Translation } from '@/i18n/types'

export const TRANSLATIONS: Record<Locale, Translation> = { en, si, ta }

export function getTranslations(locale: Locale): Translation {
  return TRANSLATIONS[locale]
}
