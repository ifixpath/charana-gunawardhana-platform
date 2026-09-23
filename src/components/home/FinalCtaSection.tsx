import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { ROUTES } from '@/routes/paths'

export default function FinalCtaSection() {
  const { home } = useTranslations()
  const localizedPath = useLocalizedPath()

  return (
    <Section tone="dark" labelledBy="final-cta-heading" className="lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="final-cta-heading"
          className="font-serif text-3xl leading-[1.16] tracking-tight sm:text-4xl lg:text-[2.6rem]"
        >
          <span className="block text-balance">{home.finalCta.headline[0]}</span>
          <span className="block text-balance">{home.finalCta.headline[1]}</span>
        </h2>

        <p className="text-content-inverse-muted mt-6 text-base leading-relaxed sm:text-lg">
          {home.finalCta.supporting}
        </p>

        <div className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <ButtonLink to={localizedPath(ROUTES.programs)} className="w-full sm:w-auto">
            {home.finalCta.ctaPrograms}
          </ButtonLink>
          <ButtonLink
            to={localizedPath(ROUTES.contact)}
            variant="outlineOnDark"
            className="w-full sm:w-auto"
          >
            {home.finalCta.ctaConnect}
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
