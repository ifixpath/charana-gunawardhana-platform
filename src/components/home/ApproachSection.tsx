import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import { useTranslations } from '@/i18n/useI18n'

const STEP_IDS = ['think', 'act', 'transform'] as const

export default function ApproachSection() {
  const { home } = useTranslations()

  return (
    <Section labelledBy="approach-heading">
      <SectionHeading
        id="approach-heading"
        eyebrow={home.approach.eyebrow}
        title={home.approach.heading}
        lead={home.approach.intro}
      />

      <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-x-10 lg:mt-16 lg:gap-x-12">
        {STEP_IDS.map((id) => (
          <li key={id} className="border-line border-t pt-6">
            <h3 className="text-primary font-serif text-xl">{home.approach.steps[id].title}</h3>
            <p className="text-content-muted mt-3 text-sm leading-relaxed sm:text-base">
              {home.approach.steps[id].body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
