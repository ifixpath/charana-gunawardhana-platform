import { Link } from 'react-router-dom'

import { usePageMeta } from '@/i18n/usePageMeta'
import { ADMIN_ROUTES } from '@/routes/paths'

export default function AdminNotFoundPage() {
  usePageMeta({
    title: 'Admin page not found — Charana Gunawardhana',
    description: 'This admin page does not exist.',
    robots: 'noindex',
  })

  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-primary font-serif text-3xl tracking-tight">Page not found</h2>
      <p className="text-content-muted mt-4 text-base leading-relaxed">
        This admin page does not exist.
      </p>
      <Link to={ADMIN_ROUTES.home} className="text-accent-dark mt-6 inline-block text-sm underline underline-offset-4">
        Back to overview
      </Link>
    </div>
  )
}
