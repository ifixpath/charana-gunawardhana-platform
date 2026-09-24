import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ProgramHeroLogo from '@/components/programs/ProgramHeroLogo'
import ButtonLink from '@/components/ui/ButtonLink'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function UnstoppablePage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.programs.unstoppable

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

          <ProgramHeroLogo id="unstoppable" />

          <h1 className="font-serif mt-7 text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Unstoppable
          </h1>

          <p className="text-accent-light mt-5 max-w-xl text-base text-balance sm:text-lg">
            {copy.hero.descriptor}
          </p>

          <p className="text-content-inverse-muted mt-4 max-w-xl text-base leading-relaxed">
            {copy.hero.supporting}
          </p>
        </Container>
      </section>

      <Section labelledBy="unstoppable-about">
        <SectionHeading id="unstoppable-about" title={copy.about.heading} lead={copy.about.body} />
      </Section>

      <Section tone="muted" labelledBy="unstoppable-duration">
        <SectionHeading id="unstoppable-duration" title={copy.duration.heading} />
        <p className="text-primary font-serif mt-10 text-4xl leading-tight tracking-tight sm:text-5xl">
          {copy.duration.value}
        </p>
      </Section>

      <Section labelledBy="unstoppable-focus">
        <SectionHeading id="unstoppable-focus" title={copy.focus.heading} lead={copy.focus.body} />
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
