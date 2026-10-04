import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import Container from '@/components/layout/Container'
import { ROUTES } from '@/routes/paths'

type StudentFrameProps = {
  children: ReactNode
}

/** Quiet student chrome. Not the public marketing header. */
export default function StudentFrame({ children }: StudentFrameProps) {
  return (
    <div className="bg-surface-muted min-h-dvh">
      <Container className="py-10 sm:py-16">
        <Link to={ROUTES.home} className="text-primary font-serif text-lg tracking-tight">
          Charana Gunawardhana
        </Link>
        <div className="mt-10">{children}</div>
      </Container>
    </div>
  )
}
