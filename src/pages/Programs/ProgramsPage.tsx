import { Link } from 'react-router-dom'

import PortraitArea from '@/components/common/PortraitArea'
import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { MORNING_GYM_LOGO, MORNING_GYM_PHOTO } from '@/data/images'
import { CATALOG_PROGRAMS } from '@/data/programs'
import { isLatinLabel, labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function ProgramsPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.programsIndex
  const formats = t.home.programs.formats

  usePageMeta(copy.meta)

  const morningGym = CATALOG_PROGRAMS.find((program) => program.id === 'morning-gym')
  const mindMagic = CATALOG_PROGRAMS.find((program) => program.id === 'mind-magic')

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

          <h1 className="font-serif mt-7 max-w-4xl text-4xl leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {copy.hero.heading}
          </h1>

          <p className="text-content-inverse-muted mt-5 max-w-xl text-base leading-relaxed">
            {copy.hero.supporting}
          </p>
        </Container>
      </section>

      <Section labelledBy="programs-featured-heading">
        <SectionHeading id="programs-featured-heading" title={copy.featured.heading} />

        <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-20">
          {morningGym ? (
            <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="relative lg:col-span-7">
                <PortraitArea
                  image={{ ...MORNING_GYM_PHOTO, alt: copy.a11y.morningGymPhoto }}
                  aspect="aspect-4/3"
                />
                <img
                  src={MORNING_GYM_LOGO.src}
                  alt={MORNING_GYM_LOGO.alt}
                  width={MORNING_GYM_LOGO.width}
                  height={MORNING_GYM_LOGO.height}
                  loading="lazy"
                  decoding="async"
                  className="absolute bottom-4 left-4 w-20 rounded-sm sm:w-24 lg:bottom-6 lg:left-6 lg:w-28"
                />
              </div>

              <div className="lg:col-span-5">
                <p
                  className={`text-accent-dark font-medium ${labelClass(morningGym.name, 'text-[0.65rem] tracking-[0.3em] uppercase', 'text-[0.8rem]')}`}
                >
                  {morningGym.name}
                </p>
                <h3 className="text-primary font-serif mt-3 text-2xl sm:text-3xl">
                  {copy.featured.morningGym.heading}
                </h3>
                <p className="text-content-muted mt-4 max-w-prose text-base leading-relaxed">
                  {copy.featured.morningGym.supporting}
                </p>
                <div className="mt-8">
                  <ButtonLink
                    to={localizedPath(ROUTES.programs)}
                    className="w-full whitespace-normal text-balance sm:w-auto"
                  >
                    {copy.featured.morningGym.cta}
                  </ButtonLink>
                </div>
              </div>
            </article>
          ) : null}

          {mindMagic ? (
            <article className="border-line border-t pt-12 lg:pt-16">
              {mindMagic.logo ? (
                <img
                  src={mindMagic.logo.src}
                  alt={mindMagic.logo.alt}
                  width={mindMagic.logo.width}
                  height={mindMagic.logo.height}
                  loading="lazy"
                  decoding="async"
                  className="w-16 rounded-sm lg:w-20"
                />
              ) : null}

              <p
                className={`text-accent-dark mt-8 font-medium ${labelClass(mindMagic.name, 'text-[0.65rem] tracking-[0.3em] uppercase', 'text-[0.8rem]')}`}
              >
                {mindMagic.name}
              </p>
              <h3 className="text-primary font-serif mt-3 max-w-2xl text-2xl sm:text-3xl">
                {copy.featured.mindMagic.heading}
              </h3>
              <p className="text-content-muted mt-4 max-w-prose text-base leading-relaxed">
                {copy.featured.mindMagic.supporting}
              </p>
              <p
                className={`text-content-muted mt-3 ${labelClass(copy.featured.mindMagic.detail, 'text-[0.7rem] tracking-[0.12em] uppercase', 'text-[0.8rem]')}`}
              >
                {copy.featured.mindMagic.detail}
              </p>
              {mindMagic.path ? (
                <div className="mt-8">
                  <ButtonLink
                    to={localizedPath(mindMagic.path)}
                    className="w-full whitespace-normal text-balance sm:w-auto"
                  >
                    {copy.featured.mindMagic.cta}
                  </ButtonLink>
                </div>
              ) : null}
            </article>
          ) : null}
        </div>
      </Section>

      <Section tone="muted" labelledBy="programs-list-heading">
        <SectionHeading id="programs-list-heading" title={copy.list.heading} />

        <ul id="programs-list" className="border-line mt-14 border-t lg:mt-16">
          {CATALOG_PROGRAMS.map((program, index) => {
            const item = copy.list.items[program.id]
            const format = program.format ? formats[program.format] : undefined
            const href = localizedPath(program.path ?? ROUTES.programs)

            return (
              <li key={program.id} className="border-line border-b">
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-4 py-8 lg:flex-nowrap lg:gap-x-10 lg:py-9">
                  <p aria-hidden="true" className="text-accent-dark font-serif w-8 shrink-0 text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <div className="min-w-0 flex-1">
                    {program.logo ? (
                      <img
                        src={program.logo.src}
                        alt={program.logo.alt}
                        width={program.logo.width}
                        height={program.logo.height}
                        loading="lazy"
                        decoding="async"
                        className="mb-3 w-12 rounded-sm lg:w-14"
                      />
                    ) : null}

                    <h3 className="text-primary font-serif text-xl sm:text-2xl">{program.name}</h3>
                    {item.description ? (
                      <p className="text-content-muted mt-2 max-w-prose text-sm leading-relaxed sm:text-base">
                        {item.description}
                      </p>
                    ) : null}
                    {item.availability ? (
                      <p className="text-content-muted mt-1 max-w-prose text-sm leading-relaxed">
                        {item.availability}
                      </p>
                    ) : null}
                    {item.detail ? (
                      <p
                        className={`text-content-muted mt-2 ${labelClass(item.detail, 'text-[0.7rem] tracking-[0.12em] uppercase', 'text-[0.8rem]')}`}
                      >
                        {item.detail}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 sm:pl-14 lg:w-auto lg:shrink-0 lg:flex-nowrap lg:gap-x-10 lg:pl-0">
                    {format ? (
                      <p
                        className={`text-content-muted shrink-0 ${labelClass(format, 'text-[0.7rem] tracking-[0.16em] uppercase', 'text-[0.8rem]')} ${isLatinLabel(format) ? 'whitespace-nowrap lg:w-44' : 'lg:max-w-44'}`}
                      >
                        {format}
                      </p>
                    ) : (
                      <span className="hidden lg:block lg:w-44" />
                    )}

                    <Link
                      to={href}
                      aria-label={`${copy.list.explore}: ${program.name}`}
                      className={`text-primary hover:text-accent-dark group inline-flex shrink-0 items-center gap-2 font-semibold transition-colors ${labelClass(copy.list.explore, 'text-[0.7rem] tracking-[0.16em] uppercase', 'text-[0.8rem]')} ${isLatinLabel(copy.list.explore) ? 'whitespace-nowrap' : ''}`}
                    >
                      {copy.list.explore}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section labelledBy="programs-progression-heading">
        <SectionHeading
          id="programs-progression-heading"
          title={copy.progression.heading}
          lead={copy.progression.body}
        />
        <p className="text-content-muted mt-8 max-w-2xl text-base leading-relaxed">
          {copy.progression.optimisticMagnet}
        </p>
      </Section>

      <Section tone="dark" labelledBy="programs-final-heading" className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(85%_70%_at_50%_0%,var(--color-primary)_0%,var(--color-primary-dark)_70%)]"
        />

        <SectionHeading
          id="programs-final-heading"
          title={copy.finalCta.heading}
          lead={copy.finalCta.supporting}
          tone="dark"
        />

        <div className="mt-10">
          <ButtonLink
            to={localizedPath(ROUTES.contact)}
            className="w-full whitespace-normal text-balance sm:w-auto"
          >
            {copy.finalCta.enquire}
          </ButtonLink>
        </div>
      </Section>
    </>
  )
}
