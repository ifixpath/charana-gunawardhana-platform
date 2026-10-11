import { Link } from 'react-router-dom'

import { usePageMeta } from '@/i18n/usePageMeta'
import { BACKEND_PENDING } from '@/pages/Admin/adminStyles'
import { ADMIN_ROUTES } from '@/routes/paths'

export default function AdminHomePage() {
  usePageMeta({
    title: 'Admin overview — Charana Gunawardhana',
    description: 'Administrator overview.',
    robots: 'noindex',
  })

  return (
    <div className="mx-auto max-w-5xl">
      <p className="text-content max-w-2xl text-base leading-relaxed">
        Manage programs, offers, and publication from this dashboard. Saving stays off until the
        admin service can store changes.
      </p>
      <p className="text-content-muted mt-3 text-sm" role="status">
        {BACKEND_PENDING}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          to={ADMIN_ROUTES.programs}
          className="border-line bg-surface hover:border-accent focus-visible:border-accent rounded-sm border p-5"
        >
          <h2 className="text-primary font-serif text-2xl tracking-tight">Programs</h2>
          <p className="text-content-muted mt-2 text-sm leading-relaxed">
            Search programs and open the editor for marketing, offers, images, and publication.
          </p>
        </Link>
        <section className="border-line bg-surface rounded-sm border p-5">
          <h2 className="text-primary font-serif text-2xl tracking-tight">Offers</h2>
          <p className="text-content-muted mt-2 text-sm leading-relaxed">
            Prices, delivery, and benefits are edited inside each program. No offer records are
            loaded in this session.
          </p>
        </section>
      </div>
    </div>
  )
}
