import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import { FOCUS_AREAS } from '@/data/homeContent'

export default function FocusAreas() {
  return (
    <Section tone="muted" labelledBy="focus-heading">
      <SectionHeading id="focus-heading" eyebrow="Core Focus" title="Areas of Focus" />

      {/* Editorial columns separated by hairlines rather than cards. */}
      <ul className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-10 lg:mt-16 lg:grid-cols-4 lg:gap-x-12">
        {FOCUS_AREAS.map((area, index) => (
          <li key={area.id} className="border-line border-t pt-6">
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="text-primary font-serif mt-4 text-xl">{area.title}</h3>
            <p className="text-content-muted mt-3 text-sm leading-relaxed">{area.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
