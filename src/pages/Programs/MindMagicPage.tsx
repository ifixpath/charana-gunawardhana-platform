import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ProgramHeroLogo from '@/components/programs/ProgramHeroLogo'
import ButtonLink, { ExternalButtonLink } from '@/components/ui/ButtonLink'
import { MIND_MAGIC_ICEBERG } from '@/data/images'
import { MIND_MAGIC_RESOURCES } from '@/data/mindMagicResources'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function MindMagicPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.programs.mindMagic

  usePageMeta(copy.meta)

  return (
    <>
      <section className="bg-primary-dark text-content-inverse relative isolate overflow-hidden pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pt-[calc(var(--header-height)+4.5rem)] sm:pb-24 lg:pt-[calc(var(--header-height)+6.5rem)] lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <img
            src={MIND_MAGIC_ICEBERG.src}
            alt={MIND_MAGIC_ICEBERG.alt}
            width={MIND_MAGIC_ICEBERG.width}
            height={MIND_MAGIC_ICEBERG.height}
            decoding="async"
            className="h-full w-full object-cover object-[88%_center] sm:object-[82%_center] lg:object-right"
          />
          <div
            aria-hidden="true"
            className="from-primary-dark via-primary-dark/80 absolute inset-0 bg-gradient-to-r from-0% via-55% to-transparent to-92% lg:hidden"
          />
          <div
            aria-hidden="true"
            className="from-primary-dark via-primary-dark/70 absolute inset-0 hidden bg-gradient-to-r from-0% via-42% to-transparent to-75% lg:block"
          />
          <div
            aria-hidden="true"
            className="from-primary-dark/80 absolute inset-x-0 top-0 h-[calc(var(--header-height)+3rem)] bg-gradient-to-b to-transparent"
          />
        </div>

        <Container>
          <p className={`flex items-center gap-4 font-medium ${labelClass(copy.hero.eyebrow)}`}>
            <span aria-hidden="true" className="bg-accent h-px w-10 shrink-0" />
            <span className="text-accent-light">{copy.hero.eyebrow}</span>
          </p>

          <ProgramHeroLogo id="mind-magic" />

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

      <Section labelledBy="mind-magic-homework">
        <SectionHeading
          id="mind-magic-homework"
          title={copy.homework.heading}
          lead={copy.homework.intro}
        />

        <div className="mt-8">
          <ExternalButtonLink
            href={MIND_MAGIC_RESOURCES.videos.introduction}
            ariaLabel={copy.homework.introductionVideo.aria}
            variant="outlineOnLight"
            className="w-full whitespace-normal text-balance sm:w-auto"
          >
            {copy.homework.introductionVideo.label}
          </ExternalButtonLink>
        </div>

        <ol className="border-line mt-12 border-t lg:mt-16">
          {copy.homework.items.map((item, index) => (
            <li key={item.title} className="border-line border-b py-8 lg:py-9">
              <div className="flex gap-6 lg:gap-10">
                <p aria-hidden="true" className="text-accent-dark font-serif w-8 shrink-0 text-sm">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="min-w-0">
                  <h3 className="text-primary font-serif text-xl text-balance sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-content-muted mt-3 max-w-prose text-sm leading-relaxed sm:text-base">
                    {item.body}
                  </p>
                  {index === 3 ? (
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                      <ExternalButtonLink
                        href={MIND_MAGIC_RESOURCES.videos.theSecret}
                        ariaLabel={copy.homework.secretVideo.aria}
                        variant="outlineOnLight"
                        className="w-full whitespace-normal text-balance sm:w-auto"
                      >
                        {copy.homework.secretVideo.label}
                      </ExternalButtonLink>
                      <ButtonLink
                        to={localizedPath(ROUTES.mindMagicTheSecretPart1)}
                        variant="outlineOnLight"
                        className="w-full whitespace-normal text-balance sm:w-auto"
                      >
                        {copy.homework.secretReading.label}
                      </ButtonLink>
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="border-line mt-16 border-t pt-12 lg:mt-20 lg:pt-16">
          <h3 className="text-primary font-serif text-2xl sm:text-3xl">
            {copy.homework.preparation.heading}
          </h3>
          <p className="text-content-muted mt-4 max-w-prose text-base leading-relaxed">
            {copy.homework.preparation.body}
          </p>
          <div className="mt-8">
            <ExternalButtonLink
              href={MIND_MAGIC_RESOURCES.videos.preparation}
              ariaLabel={copy.homework.preparation.video.aria}
              variant="outlineOnLight"
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.homework.preparation.video.label}
            </ExternalButtonLink>
          </div>
        </div>

        <div className="border-line mt-16 border-t pt-12 lg:mt-20 lg:pt-16">
          <h3 className="text-primary font-serif text-2xl sm:text-3xl">
            {copy.homework.submission.heading}
          </h3>
          <p className="text-content-muted mt-4 max-w-prose text-base leading-relaxed">
            {copy.homework.submission.body}
          </p>
          <p className="text-primary mt-6 text-lg tracking-wide sm:text-xl">
            {MIND_MAGIC_RESOURCES.homeworkWhatsApp.phoneDisplay}
          </p>
          <div className="mt-8">
            <ExternalButtonLink
              href={MIND_MAGIC_RESOURCES.homeworkWhatsApp.href}
              ariaLabel={copy.homework.submission.aria}
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.homework.submission.cta}
            </ExternalButtonLink>
          </div>
        </div>

        <blockquote className="border-line mt-16 max-w-2xl border-t pt-10 lg:mt-20">
          <p className="text-primary font-serif text-xl leading-snug text-balance sm:text-2xl">
            {copy.homework.quote.text}
          </p>
          <footer className="text-content-muted mt-5 text-sm">
            — {copy.homework.quote.attribution}
          </footer>
        </blockquote>
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
