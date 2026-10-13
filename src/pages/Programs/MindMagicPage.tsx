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

          <p className="mt-5 max-w-xl font-serif text-2xl leading-snug text-balance text-accent-light sm:text-3xl">
            {copy.hero.headline}
          </p>

          <p className="text-content-inverse-muted mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
            {copy.hero.question}
          </p>

          <p className="text-content-inverse-muted mt-4 max-w-xl text-base leading-relaxed">
            {copy.hero.body}
          </p>

          <p className="text-content-inverse mt-6 max-w-xl font-serif text-xl leading-snug text-balance sm:text-2xl">
            {copy.hero.tagline}
          </p>

          <div className="mt-10">
            <ButtonLink
              to={`${localizedPath(ROUTES.mindMagic)}#mind-magic-experience`}
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.hero.explore}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section labelledBy="mind-magic-happens">
        <SectionHeading
          id="mind-magic-happens"
          title={copy.happens.heading}
          lead={copy.happens.subheading}
        />

        <div className="mt-10 max-w-2xl lg:mt-14">
          <p className="text-content-muted text-base leading-relaxed">{copy.happens.before}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {copy.happens.situations.map((situation) => (
              <li key={situation} className="text-primary flex gap-4 font-serif text-lg leading-snug sm:text-xl">
                <span aria-hidden="true" className="bg-accent-dark mt-3 h-px w-4 shrink-0" />
                {situation}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-content-muted text-base leading-relaxed">{copy.happens.knowing}</p>
            <p className="text-content-muted text-base leading-relaxed">{copy.happens.change}</p>
            <p className="text-content-muted text-base leading-relaxed">{copy.happens.system}</p>
            <p className="text-primary font-serif text-xl leading-snug text-balance sm:text-2xl">
              {copy.happens.closing}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="mind-magic-explore">
        <SectionHeading id="mind-magic-explore" title={copy.explore.heading} />
        <p className="text-primary font-serif mt-6 max-w-2xl text-2xl leading-snug text-balance sm:text-3xl">
          {copy.explore.subheading}
        </p>

        <div className="mt-10 flex max-w-2xl flex-col gap-5 lg:mt-14">
          {copy.explore.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-content-muted text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <h3 className="text-primary font-serif mt-14 text-2xl sm:text-3xl">{copy.explore.areasLabel}</h3>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10">
          {copy.explore.areas.map((area) => (
            <li key={area} className="border-line text-primary flex gap-4 border-t pt-4 font-serif text-lg leading-snug">
              <span aria-hidden="true" className="bg-accent-dark mt-3 h-px w-4 shrink-0" />
              {area}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="mind-magic-audience">
        <SectionHeading id="mind-magic-audience" title={copy.audience.heading} lead={copy.audience.lead} />

        <div className="mt-10 max-w-2xl lg:mt-14">
          <p className="text-content-muted text-base leading-relaxed">{copy.audience.intro}</p>
          <ul className="mt-6 flex flex-col gap-4">
            {copy.audience.points.map((point) => (
              <li key={point} className="text-content-muted flex gap-4 text-base leading-relaxed">
                <span aria-hidden="true" className="bg-accent-dark mt-2.5 h-px w-4 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <p className="text-primary mt-10 font-serif text-xl leading-snug text-balance sm:text-2xl">
            {copy.audience.close}
          </p>
          <p className="text-content-muted mt-4 text-base leading-relaxed">{copy.audience.willingness}</p>
        </div>
      </Section>

      <Section id="mind-magic-experience" tone="muted" labelledBy="mind-magic-experience-heading">
        <SectionHeading
          id="mind-magic-experience-heading"
          title={copy.experience.heading}
          lead={copy.experience.subheading}
        />
        <div className="mt-8 flex max-w-2xl flex-col gap-5">
          <p className="text-content-muted text-base leading-relaxed">{copy.experience.begins}</p>
          <p className="text-content-muted text-base leading-relaxed">{copy.experience.preparation}</p>
          <p className="text-content-muted text-base leading-relaxed">{copy.experience.instructions}</p>
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

        <blockquote className="border-line mt-16 max-w-2xl border-t pt-10 lg:mt-20">
          <p className="text-primary font-serif text-xl leading-snug text-balance sm:text-2xl">
            {copy.homework.quote.text}
          </p>
          <footer className="text-content-muted mt-5 text-sm">
            — {copy.homework.quote.attribution}
          </footer>
        </blockquote>
      </Section>

      <Section id="mind-magic-recorded" tone="dark" labelledBy="mind-magic-recorded-heading">
        <SectionHeading
          id="mind-magic-recorded-heading"
          title={copy.recorded.heading}
          lead={copy.recorded.subheading}
          tone="dark"
        />
        <div className="mt-10 max-w-2xl lg:mt-14">
          <p className="text-content-inverse-muted text-base leading-relaxed sm:text-lg">{copy.recorded.body}</p>
          <p className="font-serif mt-8 text-4xl tracking-tight text-accent-light sm:text-5xl">{copy.recorded.price}</p>
          <p className="text-content-inverse mt-4 font-serif text-xl leading-snug sm:text-2xl">{copy.recorded.access}</p>
          <p className="text-content-inverse-muted mt-6 text-base leading-relaxed">{copy.recorded.zoom}</p>
          <p className="text-accent-light mt-4 text-base leading-relaxed">{copy.recorded.value}</p>
          <div className="border-white/15 mt-8 flex flex-col gap-4 border-t pt-8">
            <p className="text-content-inverse-muted text-base leading-relaxed">{copy.recorded.accepted}</p>
            <p className="text-content-inverse-muted text-base leading-relaxed">{copy.recorded.join}</p>
            <p className="text-content-inverse text-base leading-relaxed">{copy.recorded.missed}</p>
          </div>
          <div className="mt-10">
            <ButtonLink
              to={`${localizedPath(ROUTES.mindMagic)}#mind-magic-recorded-journey`}
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.recorded.explore}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section id="mind-magic-recorded-journey" labelledBy="mind-magic-journey-heading">
        <SectionHeading id="mind-magic-journey-heading" title={copy.journey.heading} />
        <p className="border-line text-content-muted mt-8 max-w-2xl border-t pt-6 text-sm leading-relaxed sm:text-base">
          {copy.journey.notice}
        </p>

        <ol className="mt-12 flex max-w-2xl flex-col gap-12 lg:mt-16">
          <li>
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">01</p>
            <h3 className="text-primary font-serif mt-3 text-2xl sm:text-3xl">{copy.journey.paymentTitle}</h3>
            <p className="text-primary mt-4 text-lg">{copy.journey.paymentOffer}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {copy.journey.bank.map((line) => (
                <li key={line} className="text-content font-medium leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
            <p className="text-content-muted mt-4 text-base leading-relaxed">{copy.journey.paymentReference}</p>
          </li>

          <li>
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">02</p>
            <h3 className="text-primary font-serif mt-3 text-2xl sm:text-3xl">{copy.journey.homeworkTitle}</h3>
            <p className="text-content-muted mt-4 text-base leading-relaxed">{copy.journey.homeworkIntro}</p>
            <div className="mt-6 flex flex-col gap-6">
              <div>
                <h4 className="text-primary font-serif text-xl">{copy.journey.achievementsTitle}</h4>
                <p className="text-content-muted mt-2 text-base leading-relaxed">{copy.journey.achievements}</p>
              </div>
              <div>
                <h4 className="text-primary font-serif text-xl">{copy.journey.failuresTitle}</h4>
                <p className="text-content-muted mt-2 text-base leading-relaxed">{copy.journey.failures}</p>
              </div>
              <div>
                <h4 className="text-primary font-serif text-xl">{copy.journey.possibleTitle}</h4>
                <p className="text-content-muted mt-2 text-base leading-relaxed">{copy.journey.possible}</p>
                <p className="text-content-muted mt-3 text-base leading-relaxed">{copy.journey.possibleQuestion}</p>
              </div>
              <div>
                <h4 className="text-primary font-serif text-xl">{copy.journey.secretTitle}</h4>
                <p className="text-content-muted mt-2 text-base leading-relaxed">{copy.journey.secret}</p>
                <div className="mt-6">
                  <ButtonLink
                    to={localizedPath(ROUTES.mindMagicTheSecretPart1)}
                    variant="outlineOnLight"
                    className="w-full whitespace-normal text-balance sm:w-auto"
                  >
                    {copy.homework.secretReading.label}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </li>

          <li>
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">03</p>
            <h3 className="text-primary font-serif mt-3 text-2xl sm:text-3xl">{copy.journey.submitTitle}</h3>
            <p className="text-content-muted mt-4 text-base leading-relaxed">{copy.journey.submitBody}</p>
            <p className="text-primary mt-4 text-lg">{copy.journey.submitName}</p>
            <p className="text-primary mt-1 text-lg tracking-wide">{copy.journey.submitWhatsApp}</p>
            <div className="mt-6">
              <ExternalButtonLink
                href={MIND_MAGIC_RESOURCES.homeworkWhatsApp.href}
                ariaLabel={copy.homework.submission.aria}
                className="w-full whitespace-normal text-balance sm:w-auto"
              >
                {copy.journey.submitCta}
              </ExternalButtonLink>
            </div>
          </li>

          <li>
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">04</p>
            <h3 className="text-primary font-serif mt-3 text-2xl sm:text-3xl">{copy.journey.approvalTitle}</h3>
            <p className="text-content-muted mt-4 text-base leading-relaxed">{copy.journey.approval}</p>
          </li>

          <li>
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">05</p>
            <h3 className="text-primary font-serif mt-3 text-2xl sm:text-3xl">{copy.journey.accessTitle}</h3>
            <p className="text-content-muted mt-4 text-base leading-relaxed">{copy.journey.access}</p>
          </li>

          <li>
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">06</p>
            <h3 className="text-primary font-serif mt-3 text-2xl sm:text-3xl">{copy.journey.sessionTitle}</h3>
            <p className="text-content-muted mt-4 text-base leading-relaxed">{copy.journey.sessionJoin}</p>
            <p className="text-content-muted mt-4 text-base leading-relaxed">{copy.journey.sessionOpportunity}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {copy.journey.sessionPoints.map((point) => (
                <li key={point} className="text-content-muted flex gap-4 text-base leading-relaxed">
                  <span aria-hidden="true" className="bg-accent-dark mt-2.5 h-px w-4 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-primary mt-6 text-base leading-relaxed">{copy.journey.sessionValue}</p>
            <p className="text-primary mt-2 text-base leading-relaxed">{copy.journey.sessionIncluded}</p>
            <p className="text-content mt-4 text-base leading-relaxed">{copy.journey.sessionImportant}</p>
          </li>
        </ol>

        <p className="text-primary font-serif mt-12 max-w-2xl text-xl leading-snug sm:text-2xl">{copy.journey.refund}</p>
      </Section>

      <Section tone="muted" labelledBy="mind-magic-hanthana">
        <SectionHeading id="mind-magic-hanthana" title={copy.hanthana.heading} lead={copy.hanthana.audience} />
        <div className="mt-10 max-w-2xl lg:mt-14">
          <p className="text-primary font-serif text-2xl leading-snug sm:text-3xl">{copy.hanthana.when}</p>
          <div className="mt-8 flex flex-col gap-5">
            <p className="text-content-muted text-base leading-relaxed">{copy.hanthana.notBasic}</p>
            <p className="text-content-muted text-base leading-relaxed">{copy.hanthana.different}</p>
            <p className="text-content-muted text-base leading-relaxed">{copy.hanthana.stay}</p>
            <p className="text-primary font-serif text-xl leading-snug text-balance sm:text-2xl">{copy.hanthana.shared}</p>
            <p className="text-content-muted text-base leading-relaxed">{copy.hanthana.preparation}</p>
          </div>
          <p className="text-content-muted mt-8 text-sm leading-relaxed sm:text-base">{copy.hanthana.contactNote}</p>
          <div className="mt-8">
            <ButtonLink
              to={localizedPath(ROUTES.contact)}
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.hanthana.cta}
            </ButtonLink>
          </div>
        </div>
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

          <p className="mt-6 font-serif text-xl leading-snug text-balance sm:text-2xl">{copy.next.closing}</p>

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
