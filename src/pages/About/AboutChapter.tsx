import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import type { SectionTone } from '@/components/layout/Section'

export type AboutBlock =
  | { kind: 'prose'; text: string }
  | { kind: 'quote'; text: string }
  | { kind: 'emphasis'; text: string }

type AboutChapterProps = {
  /** Id of the section heading. */
  headingId: string
  heading: string
  blocks: readonly AboutBlock[]
  tone?: SectionTone
  /** Optional in-page anchor, separate from the heading id. */
  anchorId?: string
}

const PROSE = 'text-content-muted max-w-2xl text-base leading-relaxed sm:text-lg'

export default function AboutChapter({
  headingId,
  heading,
  blocks,
  tone = 'surface',
  anchorId,
}: AboutChapterProps) {
  return (
    <Section id={anchorId} tone={tone} labelledBy={headingId}>
      <SectionHeading id={headingId} title={heading} />

      <div className="mt-8 space-y-6 sm:mt-10">
        {blocks.map((block) => {
          if (block.kind === 'quote') {
            return (
              <blockquote
                key={block.text}
                className="border-accent text-primary font-serif max-w-2xl border-l pl-6 text-2xl leading-snug sm:text-3xl"
              >
                {block.text}
              </blockquote>
            )
          }

          if (block.kind === 'emphasis') {
            return (
              <p key={block.text} className="text-primary font-serif max-w-2xl text-2xl leading-snug">
                {block.text}
              </p>
            )
          }

          return (
            <p key={block.text} className={PROSE}>
              {block.text}
            </p>
          )
        })}
      </div>
    </Section>
  )
}
