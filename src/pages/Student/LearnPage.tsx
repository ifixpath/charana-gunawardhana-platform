import { Link } from 'react-router-dom'

import Container from '@/components/layout/Container'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function LearnPage() {
  usePageMeta({
    title: 'Learn — Charana Gunawardhana',
    description: 'Student course access.',
    robots: 'noindex',
  })

  return (
    <Container className="py-16">
      <h1 className="text-primary font-serif text-3xl tracking-tight">Learn</h1>
      <p className="text-content-muted mt-4 max-w-xl text-base leading-relaxed">
        Protected course access placeholder.
      </p>
      <Link
        to={ROUTES.home}
        className="text-accent-dark mt-8 inline-block text-sm underline underline-offset-4"
      >
        Home
      </Link>
    </Container>
  )
}
