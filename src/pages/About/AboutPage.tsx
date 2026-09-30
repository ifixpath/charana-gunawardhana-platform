import { useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import AboutNarrative from '@/pages/About/AboutNarrative'

export default function AboutPage() {
  const { about } = useTranslations()

  usePageMeta(about.meta)

  if (!about.narrative) {
    return null
  }

  return <AboutNarrative copy={about.narrative} portraitAlt={about.a11y.portrait} />
}
