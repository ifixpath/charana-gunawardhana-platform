import { useEffect, useState } from 'react'

import type { PublishedProgramTranslation } from '@/data/cms/programs'
import { useLocale } from '@/i18n/useI18n'
import type { ParadigmShiftingForAbundanceCopy } from '@/i18n/types'

const PARADIGM_SHIFTING_SLUG = 'paradigm-shifting-for-abundance'
const CMS_READ_TIMEOUT_MS = 8000

function textOrFallback(value: string | null | undefined, fallback: string) {
  const trimmed = value?.trim()

  return trimmed ? trimmed : fallback
}

function overlayParadigmCopy(
  fallback: ParadigmShiftingForAbundanceCopy,
  translation: PublishedProgramTranslation | null,
): ParadigmShiftingForAbundanceCopy {
  if (!translation) {
    return fallback
  }

  return {
    meta: {
      title: textOrFallback(translation.meta_title, fallback.meta.title),
      description: textOrFallback(translation.meta_description, fallback.meta.description),
    },
    hero: {
      eyebrow: textOrFallback(translation.hero_eyebrow, fallback.hero.eyebrow),
      descriptor: textOrFallback(translation.hero_descriptor, fallback.hero.descriptor),
    },
    about: {
      heading: textOrFallback(translation.about_heading, fallback.about.heading),
      body: textOrFallback(translation.about_body, fallback.about.body),
    },
    format: {
      heading: textOrFallback(translation.format_heading, fallback.format.heading),
      value: textOrFallback(translation.format_value, fallback.format.value),
    },
    cta: {
      enquire: textOrFallback(translation.cta_enquire, fallback.cta.enquire),
      allPrograms: textOrFallback(translation.cta_all_programs, fallback.cta.allPrograms),
    },
  }
}

/**
 * Static copy renders immediately. A published CMS translation overlays only
 * the fields that have text. Errors, timeouts, and missing rows leave the
 * static copy in place.
 */
export function useParadigmShiftingCopy(fallback: ParadigmShiftingForAbundanceCopy) {
  const locale = useLocale()
  const [record, setRecord] = useState<{
    locale: typeof locale
    translation: PublishedProgramTranslation
  } | null>(null)

  useEffect(() => {
    let active = true
    const timeoutId = window.setTimeout(() => {
      active = false
    }, CMS_READ_TIMEOUT_MS)

    import('@/data/cms/programs')
      .then(({ getPublishedProgramBySlug, getPublishedProgramTranslation }) =>
        getPublishedProgramBySlug(PARADIGM_SHIFTING_SLUG).then((program) => {
          if (!active || !program) {
            return null
          }

          return getPublishedProgramTranslation(program.id, locale)
        }),
      )
      .then((translation) => {
        if (!active || !translation) {
          return
        }

        setRecord({ locale, translation })
      })
      .catch(() => {
        // The static page is already on screen.
      })
      .finally(() => {
        window.clearTimeout(timeoutId)
      })

    return () => {
      active = false
      window.clearTimeout(timeoutId)
    }
  }, [locale])

  const translation = record?.locale === locale ? record.translation : null

  return overlayParadigmCopy(fallback, translation)
}
