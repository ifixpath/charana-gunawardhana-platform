import HeroBackdrop from '@/components/home/HeroBackdrop'
import Container from '@/components/layout/Container'
import ButtonLink from '@/components/ui/ButtonLink'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { ROUTES } from '@/routes/paths'

export default function HeroSection() {
  const { home } = useTranslations()
  const localizedPath = useLocalizedPath()

  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-primary-dark text-content-inverse relative isolate flex min-h-[96svh] items-end overflow-hidden lg:min-h-[90vh] lg:items-center"
    >
      <HeroBackdrop />

      {/* Readability layers, kept restrained: the gradient is spent on the left
          half behind the copy and is fully transparent before it reaches
          Charana, so his skin tone is never graded. */}
      <div
        aria-hidden="true"
        className="from-primary-dark/95 via-primary-dark/55 absolute inset-0 -z-10 hidden bg-gradient-to-r from-0% via-40% to-transparent to-72% lg:block"
      />
      {/* Mobile scrim, in two parts. The vertical fade is spent before it
          reaches his chin, and the pool in the bottom-left corner sits under
          the copy itself — so the text gets its contrast and his face is left
          entirely ungraded. */}
      <div
        aria-hidden="true"
        className="from-primary-dark via-primary-dark/70 absolute inset-0 -z-10 bg-gradient-to-t from-0% via-42% to-transparent to-58% lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_65%_at_0%_100%,var(--color-primary-dark)_0%,transparent_70%)] lg:hidden"
      />
      {/* Narrow scrim so the transparent header stays legible over any photo. */}
      <div
        aria-hidden="true"
        className="from-primary-dark/80 absolute inset-x-0 top-0 -z-10 h-[calc(var(--header-height)+3rem)] bg-gradient-to-b to-transparent"
      />

      {/* Mobile: the header token plus 2rem is the guaranteed minimum clearance
          below the fixed header; the copy stays bottom-anchored so the upper
          frame is reserved for the portrait. Desktop padding is unchanged. */}
      <Container className="relative pt-[calc(var(--header-height)+2rem)] pb-6 sm:pb-16 lg:pt-[var(--header-height)] lg:pb-8">
        {/* Held to a narrow measure on phones so the block reads as a
            lower-left column and never runs under Charana. */}
        <div className="max-w-[20rem] sm:max-w-xl lg:max-w-2xl">
          <p
            className={`flex items-center gap-4 font-medium ${labelClass(home.hero.eyebrow)}`}
          >
            <span aria-hidden="true" className="bg-accent h-px w-10 shrink-0" />
            <span className="text-accent-light">{home.hero.eyebrow}</span>
          </p>

          {/* Sized so each sentence stays on one line inside the narrow mobile
              column: the longer line measures 310px at 30px, and 270px at
              26.4px for the 280px of room a 320px screen leaves. A third line
              would push the block up into his face. */}
          <h1
            id="hero-heading"
            className="font-serif mt-4 text-[1.65rem] leading-[1.14] tracking-tight min-[360px]:text-3xl sm:mt-5 sm:text-5xl lg:mt-7 lg:text-[3rem] xl:text-[3.5rem]"
          >
            <span className="block text-balance">{home.hero.headline[0]}</span>
            <span className="block text-balance">{home.hero.headline[1]}</span>
          </h1>

          {/* Narrower measure between `lg` and `xl`: at those widths Charana's
              white shirt sits close to the text column, and the sentence would
              otherwise run onto it. */}
          {/* Measure is a touch tighter than the headline column on phones, so
              the two blocks step rather than align flush. */}
          <p className="text-content-inverse-muted mt-5 max-w-[17.5rem] text-base leading-relaxed sm:max-w-xl sm:text-lg lg:mt-7 lg:max-w-md xl:max-w-xl">
            {home.hero.supporting}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-10">
            <ButtonLink to={localizedPath(ROUTES.programs)}>{home.hero.ctaPrograms}</ButtonLink>
            <ButtonLink to={localizedPath(ROUTES.about)} variant="outlineOnDark">
              {home.hero.ctaJourney}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
