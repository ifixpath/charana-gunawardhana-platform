import PortraitArea from '@/components/common/PortraitArea'
import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import { ExternalButtonLink } from '@/components/ui/ButtonLink'
import { MORNING_GYM_LOGO, MORNING_GYM_PHOTO } from '@/data/images'
import { WHATSAPP_COMMUNITY } from '@/data/socialLinks'
import { useTranslations } from '@/i18n/useI18n'

export default function MorningGymSection() {
  const { home } = useTranslations()
  const [lead, ...paragraphs] = home.morningGym.paragraphs

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
            className="absolute bottom-4 left-4 h-auto w-20 rounded-sm sm:w-24 lg:bottom-6 lg:left-6 lg:w-28"
          />
        </div>

        <div className="lg:col-span-5">
          <SectionHeading
            id="morning-gym-heading"
            eyebrow={home.morningGym.eyebrow}
            title={home.morningGym.heading}
            lead={lead}
            tone="dark"
          />

          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-content-inverse-muted mt-6 text-base leading-relaxed sm:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <p className="text-accent-light mt-8 text-sm font-medium sm:text-base">
            {home.morningGym.schedule}
          </p>

          <div className="mt-10">
            <ExternalButtonLink
              href={WHATSAPP_COMMUNITY.url}
              ariaLabel={home.a11y.whatsappCommunity}
              className="w-full sm:w-auto"
            >
              {home.morningGym.ctaJoin}
            </ExternalButtonLink>
          </div>

          <div className="mt-10 border-t border-white/15 pt-8">
            <h3 className="font-serif text-xl text-balance">{home.morningGym.participantsHeading}</h3>
            <p className="text-content-inverse-muted mt-4 text-base leading-relaxed">
              {home.morningGym.participantsBody}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
