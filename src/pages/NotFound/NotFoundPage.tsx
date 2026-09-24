import { Link } from 'react-router-dom'

import PageHeading from '@/components/common/PageHeading'
import Container from '@/components/layout/Container'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function NotFoundPage() {
  const { notFound } = useTranslations()
  const localizedPath = useLocalizedPath()

  usePageMeta({
    title: notFound.title,
    description: notFound.description,
    robots: 'noindex',
  })

  return (
    <>
      <PageHeading title={notFound.heading} />
      <Container className="pb-16">
        <Link
          to={localizedPath(ROUTES.home)}
          className="text-accent-dark text-sm underline underline-offset-4"
        >
          {notFound.backHome}
        </Link>
      </Container>
    </>
  )
}
