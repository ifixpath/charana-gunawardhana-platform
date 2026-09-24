import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ProgramHeroLogo from '@/components/programs/ProgramHeroLogo'
import ButtonLink from '@/components/ui/ButtonLink'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function SocialMediaBusinessDevelopmentPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.programs.socialMediaBusinessDevelopment

  usePageMeta(copy.meta)

  return (
    <>
      <section className="bg-primary-dark text-content-inverse relative isolate overflow-hidden pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pt-[calc(var(--header-height)+4.5rem)] sm:pb-24 lg:pt-[calc(var(--header-height)+6.5rem)] lg:pb-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(85%_70%_at_50%_0%,var(--color-primary)_0%,var(--color-primary-dark)_70%)]"
        />

        <Container>
          <p className={`flex items-center gap-4 font-medium ${labelClass(copy.hero.eyebrow)}`}>
            <span aria-hidden="true" className="bg-accent h-px w-10 shrink-0" />
            <span className="text-accent-light">{copy.hero.eyebrow}</span>
          </p>

          <ProgramHeroLogo id="social-media-business-development" />

          <h1 className="font-serif mt-7 max-w-4xl text-3xl leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Social Media for Business Development
          </h1>

          <p className="text-accent-light mt-5 text-base sm:text-lg">{copy.hero.descriptor}</p>

          <p className="text-content-inverse-muted mt-4 max-w-xl text-base leading-relaxed">
            {copy.hero.supporting}
          </p>
        </Container>
      </section>

      <Section labelledBy="social-media-about">
        <SectionHeading id="social-media-about" title={copy.about.heading} lead={copy.about.body} />
      </Section>

      <Section tone="muted" labelledBy="social-media-focus">
        <SectionHeading id="social-media-focus" title={copy.focus.heading} lead={copy.focus.body} />
      </Section>

      <Section tone="dark" className="lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <ButtonLink
              to={localizedPath(ROUTES.contact)}
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.cta.enquire}
            </ButtonLink>
            <ButtonLink
              to={localizedPath(ROUTES.programs)}
              variant="outlineOnDark"
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.cta.allPrograms}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
