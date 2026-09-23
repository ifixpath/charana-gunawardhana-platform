import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import { FOCUS_AREA_IDS } from '@/data/homeContent'
import { useTranslations } from '@/i18n/useI18n'

export default function FocusAreas() {
  const { home } = useTranslations()

  return (
    <Section tone="muted" labelledBy="focus-heading">
      <SectionHeading id="focus-heading" eyebrow={home.focus.eyebrow} title={home.focus.heading} />

      {/* Editorial columns separated by hairlines rather than cards. */}
      <ul className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-10 lg:mt-16 lg:grid-cols-4 lg:gap-x-12">
        {FOCUS_AREA_IDS.map((id, index) => (
          <li key={id} className="border-line border-t pt-6">
            <p aria-hidden="true" className="text-accent-dark font-serif text-sm">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="text-primary font-serif mt-4 text-xl">{home.focus.items[id].title}</h3>
            <p className="text-content-muted mt-3 text-sm leading-relaxed">
              {home.focus.items[id].description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
