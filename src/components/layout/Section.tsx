import type { ReactNode } from 'react'

import Container from '@/components/layout/Container'

export type SectionTone = 'surface' | 'muted' | 'dark'

type SectionProps = {
  children: ReactNode
  tone?: SectionTone
  /** Id of the heading that names this section. */
  labelledBy?: string
  className?: string
}

const TONES: Record<SectionTone, string> = {
  surface: 'bg-surface text-content',
  muted: 'bg-surface-muted text-content',
  dark: 'bg-primary-dark text-content-inverse',
}

/** Shared vertical rhythm and background tone for every homepage section. */
export default function Section({
  children,
  tone = 'surface',
  labelledBy,
  className = '',
}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={`${TONES[tone]} py-20 sm:py-24 lg:py-28 ${className}`.trim()}
    >
      <Container>{children}</Container>
    </section>
  )
}
