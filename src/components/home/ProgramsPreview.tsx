import { Link } from 'react-router-dom'

import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { PROGRAM_PREVIEWS } from '@/data/homeContent'
import { isLatinLabel, labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { ROUTES } from '@/routes/paths'

export default function ProgramsPreview() {
  const { home } = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = home.programs

  return (
    <Section labelledBy="programs-heading">
      <SectionHeading
        id="programs-heading"
        eyebrow={copy.eyebrow}
        title={copy.heading}
        lead={copy.intro}
      />

      {/* Editorial rows, not a card grid: the programme name carries the row
          and the poster artwork stays out of the listing entirely. */}
      <ul className="border-line mt-14 border-t lg:mt-16">
        {PROGRAM_PREVIEWS.map((program, index) => {
          const item = copy.items[program.id]
          const format = copy.formats[program.format]
          const cta = item.cta ?? copy.explore

          return (
            <li key={program.id} className="border-line border-b">
              {/* Content-sized flex row rather than fixed column spans: the
                  labels keep their intrinsic width at every viewport, and the
                  name block is the only part that flexes. */}
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-4 py-8 lg:flex-nowrap lg:gap-x-10 lg:py-9">
                <p
                  aria-hidden="true"
                  className="text-accent-dark font-serif w-8 shrink-0 text-sm"
                >
                  {String(index + 1).padStart(2, '0')}
                </p>

                <div className="min-w-0 flex-1">
                  {/* The mark sits above the name rather than beside it, so
                      every programme name still starts on the same left edge.
                      Official marks arrive as opaque squares, hence the
                      rounded tile rather than a free-floating wordmark. */}
                  {program.logo ? (
                    <img
                      src={program.logo.src}
                      alt={program.logo.alt}
                      width={program.logo.width}
                      height={program.logo.height}
                      loading="lazy"
                      decoding="async"
                      className="mb-3 h-auto w-12 rounded-sm lg:w-14"
                    />
                  ) : null}

                  <h3 className="text-primary font-serif text-xl text-balance break-words sm:text-2xl">
                    {program.name}
                  </h3>
                  <p className="text-content-muted mt-2 max-w-prose text-sm leading-relaxed sm:text-base">
                    {item.description}
                  </p>
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

                {/* Below `lg` the format and the call to action share one line
                    under the name; from `lg` they rejoin the row. */}
                <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 sm:pl-14 lg:w-auto lg:shrink-0 lg:flex-nowrap lg:gap-x-10 lg:pl-0">
                  <p
                    className={`text-content-muted shrink-0 ${labelClass(format, 'text-[0.7rem] tracking-[0.16em] uppercase', 'text-[0.8rem]')} ${isLatinLabel(format) ? 'whitespace-nowrap lg:w-44' : 'lg:max-w-44'}`}
                  >
                    {format}
                  </p>

                  <Link
                    to={localizedPath(program.path ?? ROUTES.programs)}
                    aria-label={`${cta}: ${program.name}`}
                    className={`text-primary hover:text-accent-dark group inline-flex shrink-0 items-center gap-2 font-semibold transition-colors ${labelClass(cta, 'text-[0.7rem] tracking-[0.16em] uppercase', 'text-[0.8rem]')} ${isLatinLabel(cta) ? 'whitespace-nowrap' : ''}`}
                  >
                    {cta}
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

      <div className="mt-12">
        <ButtonLink to={localizedPath(ROUTES.programs)} variant="outlineOnLight">
          {copy.viewAll}
        </ButtonLink>
      </div>
    </Section>
  )
}
