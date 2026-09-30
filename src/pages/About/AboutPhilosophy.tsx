import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import type { AboutNarrativeCopy } from '@/i18n/types'

const STEP_IDS = ['think', 'act', 'transform'] as const

type AboutPhilosophyProps = {
  philosophy: AboutNarrativeCopy['philosophy']
}

export default function AboutPhilosophy({ philosophy }: AboutPhilosophyProps) {
  return (
    <Section labelledBy="about-philosophy">
      <SectionHeading id="about-philosophy" title={philosophy.heading} lead={philosophy.intro} />

      <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-x-10 lg:mt-16 lg:gap-x-12">
        {STEP_IDS.map((id) => (
          <li key={id} className="border-line border-t pt-6">
            <h3 className="text-primary font-serif text-xl">{philosophy.steps[id].title}</h3>
            <p className="text-content-muted mt-3 max-w-sm text-sm leading-relaxed sm:text-base">
              {philosophy.steps[id].body}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-14 max-w-2xl space-y-6 lg:mt-16">
        {philosophy.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-content-muted text-base leading-relaxed sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
