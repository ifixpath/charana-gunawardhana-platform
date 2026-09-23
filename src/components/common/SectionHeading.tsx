import type { ReactNode } from 'react'

import { labelClass } from '@/i18n/script'

type SectionHeadingProps = {
  id: string
  title: ReactNode
  eyebrow?: string
  lead?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  id,
  title,
  eyebrow,
  lead,
  tone = 'light',
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isDark = tone === 'dark'
  const isCentered = align === 'center'

  return (
    <div
      className={`${isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`.trim()}
    >
      {eyebrow ? (
        <p
          className={`flex items-center gap-4 font-medium ${labelClass(eyebrow)} ${
            isCentered ? 'justify-center' : ''
          }`}
        >
          <span aria-hidden="true" className="bg-accent h-px w-10 shrink-0" />
          <span className={isDark ? 'text-accent-light' : 'text-accent-dark'}>{eyebrow}</span>
        </p>
      ) : null}

      <h2
        id={id}
        className={`font-serif mt-6 text-3xl leading-[1.16] tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          isDark ? 'text-content-inverse' : 'text-primary'
        }`}
      >
        {title}
      </h2>

      {lead ? (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            isDark ? 'text-content-inverse-muted' : 'text-content-muted'
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  )
}
