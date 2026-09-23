import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import { TRUST_PILLARS } from '@/data/homeContent'

export default function TrustSection() {
  return (
    <Section tone="muted" labelledBy="trust-heading">
      <SectionHeading
        id="trust-heading"
        eyebrow="Trust"
        title="Real Growth. Real Impact."
        lead="This space is reserved for genuine stories and coverage. Nothing is published here until it is real."
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
        {TRUST_PILLARS.map((pillar) => (
          <li
            key={pillar.id}
            className="border-line bg-surface flex flex-col gap-4 rounded-sm border p-7"
          >
            <p className="text-accent-dark text-[0.6rem] font-medium tracking-[0.24em] uppercase">
              {pillar.status}
            </p>
            <h3 className="text-primary font-serif text-xl">{pillar.title}</h3>
            <p className="text-content-muted text-sm leading-relaxed">{pillar.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
