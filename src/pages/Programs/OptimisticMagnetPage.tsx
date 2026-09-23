import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function OptimisticMagnetPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.programs.optimisticMagnet

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

          <h1 className="font-serif mt-9 text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Optimistic Magnet
          </h1>

          <p className="text-accent-light mt-5 text-base sm:text-lg">{copy.hero.descriptor}</p>

          <p className="text-content-inverse-muted mt-4 max-w-xl text-base leading-relaxed">
            {copy.hero.supporting}
          </p>

          <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            {copy.hero.badges.map((badge) => (
              <li
                key={badge}
                className={`text-content-inverse-muted flex items-center gap-3 ${labelClass(badge)}`}
              >
                <span aria-hidden="true" className="bg-accent h-1 w-1 shrink-0 rounded-full" />
                {badge}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section labelledBy="optimistic-magnet-about">
        <SectionHeading
          id="optimistic-magnet-about"
          title={copy.about.heading}
          lead={copy.about.body}
        />
      </Section>

      <Section tone="muted" labelledBy="optimistic-magnet-journey">
        <SectionHeading
          id="optimistic-magnet-journey"
          title={copy.journey.heading}
          lead={copy.journey.body}
        />

        <ol className="mt-12 grid items-stretch gap-8 sm:grid-cols-[1fr_auto_1fr] sm:gap-10 lg:mt-16">
          <li className="border-line border-t pt-6">
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">
              01
            </p>
            <p className="text-primary font-serif mt-3 text-xl leading-snug sm:text-2xl">
              {copy.journey.from}
            </p>
          </li>

          <li
            aria-hidden="true"
            className="text-accent-dark hidden items-center justify-center sm:flex"
          >
            <span className="font-serif text-2xl leading-none">&rarr;</span>
          </li>

          <li className="border-line border-t pt-6">
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">
              02
            </p>
            <p className="text-primary font-serif mt-3 text-xl leading-snug sm:text-2xl">
              {copy.journey.to}
            </p>
          </li>
        </ol>
      </Section>

      <Section labelledBy="optimistic-magnet-eligibility">
        <SectionHeading
          id="optimistic-magnet-eligibility"
          title={copy.eligibility.heading}
          lead={copy.eligibility.body}
        />
        <p className="text-content-muted mt-8 max-w-2xl text-base leading-relaxed">
          {copy.eligibility.review}
        </p>
      </Section>

      <Section tone="dark" labelledBy="optimistic-magnet-next" className="lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="optimistic-magnet-next"
            className="font-serif text-3xl leading-[1.16] tracking-tight text-balance sm:text-4xl lg:text-[2.6rem]"
          >
            {copy.continuation.heading}
          </h2>

          <p className="text-content-inverse-muted mt-6 text-base leading-relaxed sm:text-lg">
            {copy.continuation.body}
          </p>

          <div className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
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
