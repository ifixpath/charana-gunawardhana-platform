import type { AboutNarrativeCopy } from '@/i18n/types'

import AboutChapter, { type AboutBlock } from '@/pages/About/AboutChapter'
import AboutClosing from '@/pages/About/AboutClosing'
import AboutHero from '@/pages/About/AboutHero'
import AboutImpact from '@/pages/About/AboutImpact'
import AboutPhilosophy from '@/pages/About/AboutPhilosophy'
import { ABOUT_JOURNEY_ID } from '@/pages/About/aboutJourney'

type AboutNarrativeProps = {
  copy: AboutNarrativeCopy
  portraitAlt: string
}

function proseBlocks(paragraphs: readonly string[]): AboutBlock[] {
  return paragraphs.map((text) => ({ kind: 'prose', text }))
}

export default function AboutNarrative({ copy, portraitAlt }: AboutNarrativeProps) {
  return (
    <>
      <AboutHero hero={copy.hero} portraitAlt={portraitAlt} />

      <AboutChapter
        anchorId={ABOUT_JOURNEY_ID}
        headingId="about-person"
        heading={copy.person.heading}
        blocks={proseBlocks(copy.person.paragraphs)}
      />

      <AboutChapter
        headingId="about-turning-point"
        heading={copy.turningPoint.heading}
        tone="muted"
        blocks={[
          ...proseBlocks(copy.turningPoint.paragraphs),
          { kind: 'quote', text: copy.turningPoint.quote },
          { kind: 'prose', text: copy.turningPoint.bridge },
          { kind: 'emphasis', text: copy.turningPoint.personal },
        ]}
      />

      <AboutChapter
        headingId="about-search"
        heading={copy.search.heading}
        blocks={[
          ...proseBlocks(copy.search.paragraphs),
          { kind: 'emphasis', text: copy.search.question },
          { kind: 'prose', text: copy.search.closing },
        ]}
      />

      <AboutChapter
        headingId="about-sharing"
        heading={copy.sharing.heading}
        tone="muted"
        blocks={proseBlocks(copy.sharing.paragraphs)}
      />

      <AboutChapter
        headingId="about-naming"
        heading={copy.naming.heading}
        blocks={[
          ...proseBlocks(copy.naming.paragraphs),
          ...copy.naming.emphasis.map((text) => ({ kind: 'emphasis' as const, text })),
          ...proseBlocks(copy.naming.after),
        ]}
      />

      <AboutChapter
        headingId="about-education"
        heading={copy.education.heading}
        tone="muted"
        blocks={proseBlocks(copy.education.paragraphs)}
      />

      <AboutPhilosophy philosophy={copy.philosophy} />

      <AboutChapter
        headingId="about-today"
        heading={copy.today.heading}
        tone="muted"
        blocks={proseBlocks(copy.today.paragraphs)}
      />

      <AboutImpact impact={copy.impact} />

      <AboutChapter
        headingId="about-purpose"
        heading={copy.purpose.heading}
        blocks={proseBlocks(copy.purpose.paragraphs)}
      />

      <AboutClosing closing={copy.closing} />
    </>
  )
}
