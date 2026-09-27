import { Link } from 'react-router-dom'

import Container from '@/components/layout/Container'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function CheckoutReturnPage() {
  usePageMeta({
    title: 'Payment confirmation — Charana Gunawardhana',
    description: 'Payment confirmation.',
    robots: 'noindex',
  })

  return (
    <Container className="py-16">
      <h1 className="text-primary font-serif text-3xl tracking-tight">Payment confirmation</h1>
      <p className="text-content-muted mt-4 max-w-xl text-base leading-relaxed">
        Checkout return placeholder.
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
