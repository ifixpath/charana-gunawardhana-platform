import SocialLinks from '@/components/common/SocialLinks'
import Container from '@/components/layout/Container'
import { EXTERNAL_LINK_PROPS } from '@/data/socialLinks'
import { useTranslations } from '@/i18n/useI18n'

const NEXOR_BOS_URL = 'https://nexorbos.com'

export default function Footer() {
  const year = new Date().getFullYear()
  const { home } = useTranslations()

  return (
    <footer className="border-line bg-surface-muted border-t">
      <Container className="py-8">
        <div className="text-content-muted flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="text-primary font-medium">Charana Gunawardhana</p>
          <SocialLinks className="-mx-2.5 gap-1 sm:order-3 sm:mx-0" />
          <p className="sm:order-2">
            &copy; {year} Charana Gunawardhana. {home.footer.rights}
          </p>
        </div>

        <p className="text-content-muted mt-6 text-[0.7rem] leading-relaxed">
          Powered by{' '}
          <a
            href={NEXOR_BOS_URL}
            {...EXTERNAL_LINK_PROPS}
            aria-label="NEXOR BOS (opens in a new tab)"
            className="hover:text-accent-dark rounded-sm transition-colors"
          >
            NEXOR BOS
          </a>
        </p>
      </Container>
    </footer>
  )
}
