import PortraitArea from '@/components/common/PortraitArea'
import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ProgramHeroLogo from '@/components/programs/ProgramHeroLogo'
import ButtonLink, { ExternalButtonLink } from '@/components/ui/ButtonLink'
import { MORNING_GYM_PHOTO } from '@/data/images'
import { WHATSAPP_COMMUNITY } from '@/data/socialLinks'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function MorningGymPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.programs.morningGym

  usePageMeta(copy.meta)

  return (
    <>
      <section className="bg-primary-dark text-content-inverse relative isolate overflow-hidden pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pt-[calc(var(--header-height)+4.5rem)] sm:pb-24 lg:pt-[calc(var(--header-height)+6.5rem)] lg:pb-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(85%_70%_at_50%_0%,var(--color-primary)_0%,var(--color-primary-dark)_70%)]"
        />

        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className={`flex items-center gap-4 font-medium ${labelClass(copy.hero.eyebrow)}`}>
                <span aria-hidden="true" className="bg-accent h-px w-10 shrink-0" />
                <span className="text-accent-light">{copy.hero.eyebrow}</span>
              </p>

              <ProgramHeroLogo id="morning-gym" />

              <h1 className="font-serif mt-7 text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Morning Gym
              </h1>

              <p className="text-content-inverse-muted mt-5 max-w-xl text-base leading-relaxed">
                {copy.hero.supporting}
              </p>
            </div>

            <div className="lg:col-span-7">
              <PortraitArea
                image={{ ...MORNING_GYM_PHOTO, alt: copy.a11y.photo }}
                aspect="aspect-4/3"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section labelledBy="morning-gym-about">
        <SectionHeading id="morning-gym-about" title={copy.about.heading} lead={copy.about.body} />
      </Section>

      <Section tone="muted" labelledBy="morning-gym-focus">
        <SectionHeading id="morning-gym-focus" title={copy.focus.heading} />

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10 lg:mt-16">
          {copy.focus.items.map((item, index) => (
            <li key={item} className="border-line border-t pt-6">
              <p aria-hidden="true" className="text-accent-dark font-serif text-sm">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="text-primary font-serif mt-3 text-xl leading-snug sm:text-2xl">{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="morning-gym-community">
        <SectionHeading id="morning-gym-community" title={copy.community.heading} />
        <div className="mt-10">
          <ExternalButtonLink
            href={WHATSAPP_COMMUNITY.url}
            ariaLabel={copy.a11y.joinCommunity}
            className="w-full whitespace-normal text-balance sm:w-auto"
          >
            {copy.community.cta}
          </ExternalButtonLink>
        </div>
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
