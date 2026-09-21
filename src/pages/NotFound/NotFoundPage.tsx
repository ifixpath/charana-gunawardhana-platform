import { Link } from 'react-router-dom'

import PageHeading from '@/components/common/PageHeading'
import Container from '@/components/layout/Container'
import { ROUTES } from '@/routes/paths'

export default function NotFoundPage() {
  return (
    <>
      <PageHeading title="Page not found" />
      <Container className="pb-16">
        <Link to={ROUTES.home} className="text-accent-dark text-sm underline underline-offset-4">
          Back to home
        </Link>
      </Container>
    </>
  )
}
