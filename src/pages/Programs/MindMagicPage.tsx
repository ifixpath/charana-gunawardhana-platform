import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { MIND_MAGIC_LOGO } from '@/data/images'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

/**
 * Wide letter-spacing belongs to Latin small caps only. Sinhala and Tamil are
 * set at their natural size and spacing, since tracking pulls their conjuncts
 * and vowel signs apart.
 */
const LATIN = /^[\p{Script=Latin}\p{Script=Common}]+$/u

const labelClass = (text: string) =>
  LATIN.test(text) ? 'text-[0.65rem] tracking-[0.3em] uppercase' : 'text-[0.8rem]'

export default function MindMagicPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.programs.mindMagic

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

          {/* The wordmark carries an opaque dark field, which sits almost
              invisibly on this near-black hero — the one place it needs no
              tile of its own. The name is set in text directly beneath, so
              the mark itself is decorative. */}
          <img
            src={MIND_MAGIC_LOGO.src}
            alt={MIND_MAGIC_LOGO.alt}
            width={MIND_MAGIC_LOGO.width}
            height={MIND_MAGIC_LOGO.height}
            decoding="async"
            className="mt-9 w-16 rounded-sm lg:w-20"
          />

          <h1 className="font-serif mt-7 text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Mind Magic
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

      <Section labelledBy="mind-magic-overview">
        <SectionHeading
          id="mind-magic-overview"
          title={copy.overview.heading}
          lead={copy.overview.body}
        />
      </Section>

      <Section tone="muted" labelledBy="mind-magic-formats">
        <SectionHeading id="mind-magic-formats" title={copy.formats.heading} />

        {/* Two columns divided by hairlines rather than cards, matching the
            editorial listing on the homepage. */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:mt-16">
          {[copy.formats.recorded, copy.formats.live].map((format) => (
            <div key={format.title} className="border-line border-t pt-6">
              <h3 className="text-primary font-serif text-xl sm:text-2xl">{format.title}</h3>

              <ul className="mt-5 flex flex-col gap-3">
                {(format.points as readonly string[]).map((point) => (
                  <li key={point} className="text-content-muted flex gap-4 text-sm leading-relaxed">
                    <span aria-hidden="true" className="bg-accent-dark mt-2.5 h-px w-4 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="mind-magic-journey">
        <SectionHeading id="mind-magic-journey" title={copy.journey.heading} />

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10 lg:mt-16">
          {copy.journey.steps.map((step, index) => (
            <li key={step} className="border-line border-t pt-6">
              <p aria-hidden="true" className="text-accent-dark font-serif text-sm">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="text-primary font-serif mt-3 text-lg leading-snug">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="dark" labelledBy="mind-magic-next" className="lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="mind-magic-next"
            className="font-serif text-3xl leading-[1.16] tracking-tight text-balance sm:text-4xl lg:text-[2.6rem]"
          >
            {copy.next.heading}
          </h2>

          <p className="text-content-inverse-muted mt-6 text-base leading-relaxed sm:text-lg">
            {copy.next.body}
          </p>

          <div className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <ButtonLink to={localizedPath(ROUTES.contact)} className="w-full sm:w-auto">
              {copy.cta.enquire}
            </ButtonLink>
            <ButtonLink
              to={localizedPath(ROUTES.programs)}
              variant="outlineOnDark"
              className="w-full sm:w-auto"
            >
              {copy.cta.allPrograms}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
