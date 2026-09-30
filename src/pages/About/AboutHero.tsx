import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import PortraitArea from '@/components/common/PortraitArea'
import Container from '@/components/layout/Container'
import ButtonLink from '@/components/ui/ButtonLink'
import { PORTRAIT_ABOUT } from '@/data/images'
import { labelClass } from '@/i18n/script'
import type { AboutNarrativeCopy } from '@/i18n/types'
import { useLocalizedPath } from '@/i18n/useI18n'
import { ABOUT_JOURNEY_ID } from '@/pages/About/aboutJourney'
import { ROUTES } from '@/routes/paths'

function scrollToJourney() {
  document.getElementById(ABOUT_JOURNEY_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

type AboutHeroProps = {
  hero: AboutNarrativeCopy['hero']
  portraitAlt: string
}

export default function AboutHero({ hero, portraitAlt }: AboutHeroProps) {
  const localizedPath = useLocalizedPath()
  const { hash } = useLocation()

  useEffect(() => {
    if (hash !== `#${ABOUT_JOURNEY_ID}`) return
    scrollToJourney()
  }, [hash])

  return (
    <section className="bg-primary-dark text-content-inverse relative isolate overflow-hidden pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pt-[calc(var(--header-height)+4.5rem)] sm:pb-24 lg:pt-[calc(var(--header-height)+6.5rem)] lg:pb-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(85%_70%_at_50%_0%,var(--color-primary)_0%,var(--color-primary-dark)_70%)]"
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className={`flex items-center gap-4 font-medium ${labelClass(hero.eyebrow)}`}>
              <span aria-hidden="true" className="bg-accent h-px w-10 shrink-0" />
              <span className="text-accent-light">{hero.eyebrow}</span>
            </p>

            <h1 className="font-serif mt-7 max-w-xl text-2xl leading-[1.25] tracking-tight text-balance sm:text-3xl lg:text-[2.35rem]">
              {hero.positioning}
            </h1>

            <p className="text-content-inverse-muted mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              {hero.intro}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-10">
              <ButtonLink
                to={`${localizedPath(ROUTES.about)}#${ABOUT_JOURNEY_ID}`}
                onClick={scrollToJourney}
                className="w-full sm:w-auto"
              >
                {hero.ctaJourney}
              </ButtonLink>
              <ButtonLink
                to={localizedPath(ROUTES.programs)}
                variant="outlineOnDark"
                className="w-full sm:w-auto"
              >
                {hero.ctaPrograms}
              </ButtonLink>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md sm:mx-0 sm:max-w-xl lg:col-span-6 lg:max-w-none">
            <PortraitArea
              image={{ ...PORTRAIT_ABOUT, alt: portraitAlt }}
              objectPosition="object-[50%_12%]"
              eager
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
