import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

/**
 * Shared page gutter. Every section uses it so the header, hero and footer
 * share one vertical alignment.
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  )
}
