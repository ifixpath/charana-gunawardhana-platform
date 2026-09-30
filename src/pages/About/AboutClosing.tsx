import Section from '@/components/layout/Section'
import ButtonLink, { ExternalButtonLink } from '@/components/ui/ButtonLink'
import { WHATSAPP_COMMUNITY } from '@/data/socialLinks'
import type { AboutNarrativeCopy } from '@/i18n/types'
import { useLocalizedPath } from '@/i18n/useI18n'
import { ROUTES } from '@/routes/paths'

type AboutClosingProps = {
  closing: AboutNarrativeCopy['closing']
}

export default function AboutClosing({ closing }: AboutClosingProps) {
  const localizedPath = useLocalizedPath()

  return (
    <Section tone="dark" labelledBy="about-closing" className="lg:py-32">
      <div className="max-w-2xl">
        <h2
          id="about-closing"
          className="font-serif text-3xl leading-[1.16] tracking-tight text-balance sm:text-4xl lg:text-[2.6rem]"
        >
          {closing.heading}
        </h2>

        <div className="mt-8 space-y-6">
          {closing.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-content-inverse-muted text-base leading-relaxed sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <ButtonLink to={localizedPath(ROUTES.programs)} className="w-full sm:w-auto">
            {closing.ctaPrograms}
          </ButtonLink>
          <ExternalButtonLink
            href={WHATSAPP_COMMUNITY.url}
            ariaLabel={WHATSAPP_COMMUNITY.ariaLabel}
            variant="outlineOnDark"
            className="w-full sm:w-auto"
          >
            {closing.ctaMorningGym}
          </ExternalButtonLink>
          <ButtonLink
            to={localizedPath(ROUTES.contact)}
            variant="outlineOnDark"
            className="w-full sm:w-auto"
          >
            {closing.ctaContact}
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
