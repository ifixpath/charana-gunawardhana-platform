import SocialIcon from '@/components/ui/SocialIcon'
import { EXTERNAL_LINK_PROPS, SOCIAL_LINKS } from '@/data/socialLinks'

type SocialLinksProps = {
  className?: string
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <ul aria-label="Follow Charana Gunawardhana" className={`flex items-center ${className}`.trim()}>
      {SOCIAL_LINKS.map((link) => (
        <li key={link.id}>
          <a
            href={link.url}
            {...EXTERNAL_LINK_PROPS}
            aria-label={link.ariaLabel}
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
