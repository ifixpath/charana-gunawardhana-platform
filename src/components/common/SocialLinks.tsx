import SocialIcon from '@/components/ui/SocialIcon'
import { EXTERNAL_LINK_PROPS, SOCIAL_LINKS } from '@/data/socialLinks'
import { useTranslations } from '@/i18n/useI18n'

type SocialLinksProps = {
  className?: string
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  const { home } = useTranslations()

  return (
    <ul aria-label={home.a11y.follow} className={`flex items-center ${className}`.trim()}>
      {SOCIAL_LINKS.map((link) => (
        <li key={link.id}>
          <a
            href={link.url}
            {...EXTERNAL_LINK_PROPS}
            aria-label={home.a11y.social[link.id]}
            title={link.label}
            className="text-content-muted hover:text-accent-dark inline-flex h-10 w-10 items-center justify-center rounded-sm transition-colors"
          >
            <SocialIcon network={link.id} />
          </a>
        </li>
      ))}
    </ul>
  )
}
