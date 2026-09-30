import PortraitArea from '@/components/common/PortraitArea'
import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { FOCUS_AREA_IDS } from '@/data/homeContent'
import { PORTRAIT_ABOUT } from '@/data/images'
import { CATALOG_PROGRAMS, type CatalogProgramId } from '@/data/programs'
import { labelClass } from '@/i18n/script'
import type { HomeCopy } from '@/i18n/types'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { ROUTES } from '@/routes/paths'

function programDescription(id: CatalogProgramId, home: HomeCopy): string {
  if (id === 'morning-gym') {
    return home.morningGym.supporting
  }

  return home.programs.items[id].description
}

/** Sinhala and Tamil About page, until an approved translation of the English narrative exists. */
export default function AboutLegacyPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.about

  return (
    <>
      <section className="bg-primary-dark text-content-inverse relative isolate overflow-hidden pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pt-[calc(var(--header-height)+4.5rem)] sm:pb-24 lg:pt-[calc(var(--header-height)+6.5rem)] lg:pb-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(85%_70%_at_50%_0%,var(--color-primary)_0%,var(--color-primary-dark)_70%)]"
        />

        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className={`flex items-center gap-4 font-medium ${labelClass(copy.hero.eyebrow)}`}>
                <span aria-hidden="true" className="bg-accent h-px w-10 shrink-0" />
                <span className="text-accent-light">{copy.hero.eyebrow}</span>
              </p>

              <h1 className="font-serif mt-7 max-w-xl text-3xl leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {copy.hero.heading}
              </h1>

              <p className="text-accent-light mt-4 max-w-xl text-sm leading-relaxed text-balance sm:text-base">
                {copy.hero.positioning}
              </p>

              <p className="text-content-inverse-muted mt-5 max-w-xl text-base leading-relaxed">
                {copy.hero.supporting}
              </p>
            </div>

            <div className="mx-auto w-full max-w-md sm:mx-0 sm:max-w-xl lg:col-span-6 lg:max-w-none">
              <PortraitArea
                image={{ ...PORTRAIT_ABOUT, alt: copy.a11y.portrait }}
                objectPosition="object-[50%_12%]"
                eager
              />
            </div>
          </div>
        </Container>
      </section>

      <Section labelledBy="about-intro">
        <SectionHeading id="about-intro" title={copy.intro.heading} lead={copy.intro.body} />
      </Section>

      <Section tone="muted" labelledBy="about-journey">
        <SectionHeading id="about-journey" title={copy.journey.heading} lead={copy.journey.body} />
        <p className="text-content-muted mt-8 max-w-2xl text-base leading-relaxed sm:text-lg">
          {copy.journey.supporting}
        </p>
      </Section>

      <Section labelledBy="about-focus">
        <SectionHeading id="about-focus" title={copy.focus.heading} />

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-10 lg:mt-16 lg:grid-cols-4 lg:gap-x-12">
          {FOCUS_AREA_IDS.map((id, index) => (
            <li key={id} className="border-line border-t pt-6">
              <p aria-hidden="true" className="text-accent-dark font-serif text-sm">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-primary font-serif mt-4 text-xl">{copy.focus.items[id].title}</h3>
              <p className="text-content-muted mt-3 text-sm leading-relaxed">
                {copy.focus.items[id].description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" labelledBy="about-programs">
        <SectionHeading
          id="about-programs"
          title={copy.programs.heading}
          lead={copy.programs.supporting}
        />

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16">
          {CATALOG_PROGRAMS.map((program) => (
            <li key={program.id} className="border-line border-t pt-6">
              <p
                className={`text-accent-dark font-medium break-words text-balance ${labelClass(
                  program.name,
                  'text-[0.65rem] tracking-[0.3em] uppercase',
                  'text-[0.8rem]',
                )}`}
              >
                {program.name}
              </p>
              <p className="text-content-muted mt-3 text-sm leading-relaxed">
                {programDescription(program.id, t.home)}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <ButtonLink to={localizedPath(ROUTES.programs)} className="w-full sm:w-auto">
            {copy.programs.cta}
          </ButtonLink>
        </div>
      </Section>

      <Section tone="dark" labelledBy="about-final-cta" className="lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="about-final-cta"
            className="font-serif text-3xl leading-[1.16] tracking-tight text-balance sm:text-4xl lg:text-[2.6rem]"
          >
            {copy.finalCta.heading}
          </h2>

          <div className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <ButtonLink to={localizedPath(ROUTES.programs)} className="w-full sm:w-auto">
              {copy.finalCta.ctaPrograms}
            </ButtonLink>
            <ButtonLink
              to={localizedPath(ROUTES.contact)}
              variant="outlineOnDark"
              className="w-full sm:w-auto"
            >
              {copy.finalCta.ctaContact}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
