import { Link } from 'react-router-dom'

import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import ButtonLink, { ExternalButtonLink } from '@/components/ui/ButtonLink'
import SocialIcon from '@/components/ui/SocialIcon'
import { EXTERNAL_LINK_PROPS, SOCIAL_LINKS } from '@/data/socialLinks'
import { ROUTES } from '@/routes/paths'

const EDITORIAL_LINKS = [
  {
    id: 'insights',
    title: 'Insights',
    description: 'Written reflections and practical notes on growth, mindset and leadership.',
    to: ROUTES.insights,
  },
  {
    id: 'media',
    title: 'Media',
    description: 'Videos, conversations and appearances, collected in one place.',
    to: ROUTES.media,
  },
]

const youtube = SOCIAL_LINKS.find((link) => link.id === 'youtube')

export default function InsightsPreview() {
  return (
    <Section labelledBy="insights-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            id="insights-heading"
            eyebrow="Insights & Media"
            title="Ideas, Practice and Conversation"
            lead="Long-form thinking and short-form video, published across the platforms below."
          />

          <ul className="border-line mt-12 border-t">
            {EDITORIAL_LINKS.map((item) => (
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
            <ButtonLink to={ROUTES.insights} variant="outlineOnLight">
              Explore Insights
            </ButtonLink>
            {youtube ? (
              <ExternalButtonLink
                href={youtube.url}
                ariaLabel="Watch Charana Gunawardhana on YouTube (opens in a new tab)"
                variant="outlineOnLight"
              >
                Watch on YouTube
              </ExternalButtonLink>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <h3 className="text-content-muted text-[0.65rem] font-medium tracking-[0.3em] uppercase">
            Follow along
          </h3>

          <ul className="border-line mt-6 border-t">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.id} className="border-line border-b">
                <a
                  href={link.url}
                  {...EXTERNAL_LINK_PROPS}
                  aria-label={link.ariaLabel}
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
