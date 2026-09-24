import { Link } from 'react-router-dom'

import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { FOCUS_AREA_IDS } from '@/data/homeContent'
import { CATALOG_PROGRAMS } from '@/data/programs'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function InsightsPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.insights

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

          <h1 className="font-serif mt-7 max-w-3xl text-3xl leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {copy.hero.heading}
          </h1>

          <p className="text-content-inverse-muted mt-5 max-w-xl text-base leading-relaxed">
            {copy.hero.supporting}
          </p>
        </Container>
      </section>

      <Section labelledBy="insights-themes">
        <SectionHeading
          id="insights-themes"
          title={copy.themes.heading}
          lead={copy.themes.supporting}
        />

        <ul
          aria-label={copy.a11y.themes}
          className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-10 lg:mt-16 lg:grid-cols-4 lg:gap-x-12"
        >
          {FOCUS_AREA_IDS.map((id, index) => (
            <li key={id} className="border-line min-w-0 border-t pt-6">
              <p aria-hidden="true" className="text-accent-dark font-serif text-sm">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-primary font-serif mt-4 text-xl">{t.home.focus.items[id].title}</h3>
              <p className="text-content-muted mt-3 text-sm leading-relaxed">
                {t.home.focus.items[id].description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" labelledBy="insights-featured">
        <SectionHeading
          id="insights-featured"
          title={copy.featured.heading}
          lead={copy.featured.body}
        />
      </Section>

      <Section labelledBy="insights-programs">
        <SectionHeading
          id="insights-programs"
          title={copy.programs.heading}
          lead={copy.programs.supporting}
        />

        <ul className="mt-12 grid gap-0 sm:grid-cols-2 sm:gap-x-12 lg:mt-16">
          {CATALOG_PROGRAMS.map((program) => (
            <li key={program.id} className="border-line min-w-0 border-t">
              {program.path ? (
                <Link
                  to={localizedPath(program.path)}
                  className="hover:text-accent-dark text-primary block py-6 transition-colors"
                >
                  <h3 className="font-serif text-xl text-balance break-words">{program.name}</h3>
                </Link>
              ) : (
                <p className="font-serif text-primary py-6 text-xl text-balance break-words">
                  {program.name}
                </p>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ButtonLink to={localizedPath(ROUTES.programs)} className="w-full sm:w-auto">
            {copy.programs.cta}
          </ButtonLink>
        </div>
      </Section>

      <Section tone="muted" labelledBy="insights-media">
        <SectionHeading
          id="insights-media"
          title={copy.media.heading}
          lead={copy.media.supporting}
        />

        <div className="mt-10">
          <ButtonLink
            to={localizedPath(ROUTES.media)}
            variant="outlineOnLight"
            className="w-full sm:w-auto"
          >
            {copy.media.cta}
          </ButtonLink>
        </div>
      </Section>

      <Section tone="dark" labelledBy="insights-final-cta" className="lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="insights-final-cta"
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
