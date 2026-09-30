import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import { labelClass } from '@/i18n/script'
import { useTranslations } from '@/i18n/useI18n'

export default function TrustSection() {
  const { home } = useTranslations()

  return (
    <Section tone="muted" labelledBy="trust-heading">
      <SectionHeading
        id="trust-heading"
        eyebrow={home.proof.eyebrow}
        title={home.proof.heading}
        lead={home.proof.body}
      />

      <ul className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-x-10 lg:mt-16 lg:gap-x-12">
        {home.proof.stats.map((stat) => (
          <li key={stat.label} className="border-line border-t pt-6">
            <p className="text-primary font-serif text-3xl tracking-tight text-balance sm:text-4xl">
              {stat.value}
            </p>
            <p className="text-content-muted mt-3 text-sm leading-relaxed">{stat.label}</p>
          </li>
        ))}
      </ul>

      {/* No customer-story route exists yet, so this stays visible without a false link. */}
      <p
        className={`border-primary/20 text-primary mt-12 inline-flex items-center justify-center rounded-sm border px-7 py-3.5 text-center font-semibold ${labelClass(home.proof.cta, 'text-xs tracking-[0.16em] uppercase', 'text-[0.85rem]')}`}
      >
        {home.proof.cta}
      </p>
    </Section>
  )
}
