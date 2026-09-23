import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import { TRUST_PILLAR_IDS } from '@/data/homeContent'
import { labelClass } from '@/i18n/script'
import { useTranslations } from '@/i18n/useI18n'

export default function TrustSection() {
  const { home } = useTranslations()

  return (
    <Section tone="muted" labelledBy="trust-heading">
      <SectionHeading
        id="trust-heading"
        eyebrow={home.trust.eyebrow}
        title={home.trust.heading}
        lead={home.trust.body}
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
        {TRUST_PILLAR_IDS.map((id) => (
          <li
            key={id}
            className="border-line bg-surface flex flex-col gap-4 rounded-sm border p-7"
          >
            <p
              className={`text-accent-dark font-medium ${labelClass(home.trust.comingSoon, 'text-[0.6rem] tracking-[0.24em] uppercase', 'text-[0.8rem]')}`}
            >
              {home.trust.comingSoon}
            </p>
            <h3 className="text-primary font-serif text-xl">{home.trust.items[id].title}</h3>
            <p className="text-content-muted text-sm leading-relaxed">
              {home.trust.items[id].description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
