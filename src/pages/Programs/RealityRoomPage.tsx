import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function RealityRoomPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.programs.realityRoom

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

          <h1 className="font-serif mt-9 max-w-4xl text-4xl leading-[1.08] tracking-tight text-balance break-words sm:text-5xl lg:text-6xl">
            Reality Room
          </h1>

          <p className="text-accent-light mt-5 max-w-xl text-base text-balance sm:text-lg">
            {copy.hero.descriptor}
          </p>

          <p className="text-content-inverse-muted mt-4 max-w-xl text-base leading-relaxed">
            {copy.hero.supporting}
          </p>
        </Container>
      </section>

      <Section labelledBy="reality-room-about">
        <SectionHeading id="reality-room-about" title={copy.about.heading} lead={copy.about.body} />
      </Section>

      <Section tone="muted" labelledBy="reality-room-format">
        <SectionHeading id="reality-room-format" title={copy.format.heading} />
        <p className="text-primary font-serif mt-10 max-w-xl text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
          {copy.format.value}
        </p>
      </Section>

      <Section labelledBy="reality-room-focus">
        <SectionHeading id="reality-room-focus" title={copy.focus.heading} lead={copy.focus.body} />
      </Section>

      <Section tone="muted" labelledBy="reality-room-availability">
        <SectionHeading
          id="reality-room-availability"
          title={copy.availability.heading}
          lead={copy.availability.body}
        />
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
