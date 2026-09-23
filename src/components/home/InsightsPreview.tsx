import { Link } from 'react-router-dom'

import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import ButtonLink, { ExternalButtonLink } from '@/components/ui/ButtonLink'
import SocialIcon from '@/components/ui/SocialIcon'
import { EXTERNAL_LINK_PROPS, SOCIAL_LINKS } from '@/data/socialLinks'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { ROUTES } from '@/routes/paths'

const youtube = SOCIAL_LINKS.find((link) => link.id === 'youtube')

export default function InsightsPreview() {
  const { home } = useTranslations()
  const localizedPath = useLocalizedPath()

  const editorial = [
    {
      id: 'insights',
      title: home.media.insightsTitle,
      description: home.media.insightsDescription,
      to: localizedPath(ROUTES.insights),
    },
    {
      id: 'media',
      title: home.media.mediaTitle,
      description: home.media.mediaDescription,
      to: localizedPath(ROUTES.media),
    },
  ]

  return (
    <Section labelledBy="insights-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            id="insights-heading"
            eyebrow={home.media.eyebrow}
            title={home.media.heading}
            lead={home.media.body}
          />

          <ul className="border-line mt-12 border-t">
            {editorial.map((item) => (
              <li key={item.id} className="border-line border-b">
                <Link to={item.to} className="group block py-6">
                  <h3 className="text-primary group-hover:text-accent-dark font-serif text-xl transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-content-muted mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <ButtonLink to={localizedPath(ROUTES.insights)} variant="outlineOnLight">
              {home.media.ctaInsights}
            </ButtonLink>
            {youtube ? (
              <ExternalButtonLink
                href={youtube.url}
                ariaLabel={home.a11y.watchYoutube}
                variant="outlineOnLight"
              >
                {home.media.ctaYoutube}
              </ExternalButtonLink>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <h3
            className={`text-content-muted font-medium ${labelClass(home.media.follow)}`}
          >
            {home.media.follow}
          </h3>

          <ul className="border-line mt-6 border-t">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.id} className="border-line border-b">
                <a
                  href={link.url}
                  {...EXTERNAL_LINK_PROPS}
                  aria-label={home.a11y.social[link.id]}
                  className="text-primary hover:text-accent-dark flex items-center gap-4 py-4 text-sm transition-colors"
                >
                  <SocialIcon network={link.id} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
