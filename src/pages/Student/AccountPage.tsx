import { Link } from 'react-router-dom'

import Container from '@/components/layout/Container'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function AccountPage() {
  usePageMeta({
    title: 'Account — Charana Gunawardhana',
    description: 'Student account.',
    robots: 'noindex',
  })

  return (
    <Container className="py-16">
      <h1 className="text-primary font-serif text-3xl tracking-tight">Account</h1>
      <p className="text-content-muted mt-4 max-w-xl text-base leading-relaxed">
        Student account placeholder.
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
