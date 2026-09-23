import PortraitArea from '@/components/common/PortraitArea'
import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import ButtonLink, { ExternalButtonLink } from '@/components/ui/ButtonLink'
import { MORNING_GYM_LOGO, MORNING_GYM_PHOTO } from '@/data/images'
import { WHATSAPP_COMMUNITY } from '@/data/socialLinks'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { ROUTES } from '@/routes/paths'

export default function MorningGymSection() {
  const { home } = useTranslations()
  const localizedPath = useLocalizedPath()

  return (
    <Section
      tone="dark"
      labelledBy="morning-gym-heading"
      className="relative isolate overflow-hidden lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(85%_70%_at_50%_0%,var(--color-primary)_0%,var(--color-primary-dark)_70%)]"
      />

      <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-7">
          {/* The frame matches the photograph's native 4:3, so `cover` crops
              nothing: the room, the screen full of participants and Charana
              all stay in shot. */}
          <PortraitArea
            image={{ ...MORNING_GYM_PHOTO, alt: home.a11y.morningGymPhoto }}
            aspect="aspect-4/3"
          />

          {/* Programme identity. The wordmark is supplied on an opaque navy
              field, so it can never dissolve into the page; inset over the
              empty lower-left of the photograph it reads as a deliberate mark
              instead of a stray tile, and it stays clear of every face. */}
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
          <SectionHeading
            id="morning-gym-heading"
            eyebrow={home.morningGym.eyebrow}
            title={home.morningGym.heading}
            lead={home.morningGym.supporting}
            tone="dark"
          />

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <ButtonLink to={localizedPath(ROUTES.morningGym)} className="w-full sm:w-auto">
              {home.morningGym.ctaExplore}
            </ButtonLink>
            {/* The only place the community invite is exposed. */}
            <ExternalButtonLink
              href={WHATSAPP_COMMUNITY.url}
              ariaLabel={home.a11y.whatsappCommunity}
              variant="outlineOnDark"
              className="w-full sm:w-auto"
            >
              {home.morningGym.ctaCommunity}
            </ExternalButtonLink>
          </div>
        </div>
      </div>
    </Section>
  )
}
