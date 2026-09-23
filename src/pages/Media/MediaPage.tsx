import PortraitArea from '@/components/common/PortraitArea'
import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ButtonLink, { ExternalButtonLink } from '@/components/ui/ButtonLink'
import SocialIcon from '@/components/ui/SocialIcon'
import { PORTRAIT_HERO } from '@/data/images'
import { EXTERNAL_LINK_PROPS, SOCIAL_LINKS } from '@/data/socialLinks'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

const youtube = SOCIAL_LINKS.find((link) => link.id === 'youtube')

export default function MediaPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.media

  usePageMeta(copy.meta)

  return (
    <>
      <section className="bg-primary-dark text-content-inverse relative isolate overflow-hidden pt-[calc(var(--header-height)+3.5rem)] pb-20 sm:pt-[calc(var(--header-height)+4.5rem)] sm:pb-24 lg:pt-[calc(var(--header-height)+6.5rem)] lg:pb-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(85%_70%_at_50%_0%,var(--color-primary)_0%,var(--color-primary-dark)_70%)]"
        />

        <Container>
          <p className={`flex items-center gap-4 font-medium ${labelClass(copy.hero.eyebrow)}`}>
            <span aria-hidden="true" className="bg-accent h-px w-10 shrink-0" />
            <span className="text-accent-light">{copy.hero.eyebrow}</span>
          </p>

          <h1 className="font-serif mt-7 max-w-3xl text-3xl leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {copy.hero.heading}
          </h1>

          <p className="text-content-inverse-muted mt-5 max-w-xl text-base leading-relaxed">
            {copy.hero.supporting}
          </p>
        </Container>
      </section>

      <Section labelledBy="media-featured">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <PortraitArea
              image={{ ...PORTRAIT_HERO, alt: copy.a11y.featured }}
              aspect="aspect-3/2"
              objectPosition="object-[50%_20%]"
              eager
            />
          </div>

          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              id="media-featured"
              title={copy.featured.heading}
              lead={copy.featured.supporting}
            />
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="media-video">
        <SectionHeading
          id="media-video"
          title={copy.video.heading}
          lead={copy.video.supporting}
        />

        {youtube ? (
          <div className="mt-10">
            <ExternalButtonLink
              href={youtube.url}
              ariaLabel={copy.a11y.watchYoutube}
              className="w-full sm:w-auto"
            >
              {copy.video.cta}
            </ExternalButtonLink>
          </div>
        ) : null}
      </Section>

      <Section labelledBy="media-social">
        <SectionHeading
          id="media-social"
          title={copy.social.heading}
          lead={copy.social.supporting}
        />

        <ul className="mt-12 grid gap-0 sm:grid-cols-2 sm:gap-x-12 lg:mt-16">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.id} className="border-line border-t">
              <a
                href={link.url}
                {...EXTERNAL_LINK_PROPS}
                aria-label={t.home.a11y.social[link.id]}
                className="hover:text-accent-dark text-primary flex items-center gap-4 py-6 transition-colors"
              >
                <SocialIcon network={link.id} />
                <span className="min-w-0">
                  <span className="font-serif block text-xl">{link.label}</span>
                  <span className="text-content-muted mt-1 block text-sm">{copy.social.profile}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark" labelledBy="media-final-cta" className="lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="media-final-cta"
            className="font-serif text-3xl leading-[1.16] tracking-tight text-balance sm:text-4xl lg:text-[2.6rem]"
          >
            {copy.finalCta.heading}
          </h2>

          <div className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <ButtonLink to={localizedPath(ROUTES.programs)} className="w-full sm:w-auto">
              {copy.finalCta.ctaPrograms}
            </ButtonLink>
            <ButtonLink
              to={localizedPath(ROUTES.contact)}
              variant="outlineOnDark"
              className="w-full sm:w-auto"
            >
              {copy.finalCta.ctaContact}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
