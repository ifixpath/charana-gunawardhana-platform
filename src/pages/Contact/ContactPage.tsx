import SocialLinks from '@/components/common/SocialLinks'
import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ButtonLink, { ExternalButtonLink } from '@/components/ui/ButtonLink'
import SocialIcon from '@/components/ui/SocialIcon'
import { MINDMAGIC_ENQUIRY, PUBLIC_EMAIL } from '@/data/contact'
import { EXTERNAL_LINK_PROPS, SOCIAL_LINKS, WHATSAPP_COMMUNITY } from '@/data/socialLinks'
import { labelClass } from '@/i18n/script'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

export default function ContactPage() {
  const t = useTranslations()
  const localizedPath = useLocalizedPath()
  const copy = t.contact

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

      <Section labelledBy="contact-options">
        <SectionHeading
          id="contact-options"
          title={copy.options.heading}
          lead={copy.options.supporting}
        />

        <div className="border-line mt-12 border-t py-6">
          <a
            href={PUBLIC_EMAIL.href}
            aria-label={copy.a11y.email}
            className="hover:text-accent-dark text-primary font-serif block break-all text-xl transition-colors sm:text-2xl"
          >
            {PUBLIC_EMAIL.address}
          </a>
          <p className="text-content-muted mt-2 text-sm">{copy.options.email}</p>
        </div>

        <ul className="mt-4 grid gap-0 sm:grid-cols-2 sm:gap-x-12 lg:mt-8">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.id} className="border-line border-t">
              <a
                href={link.url}
                {...EXTERNAL_LINK_PROPS}
                aria-label={t.home.a11y.social[link.id]}
                className="hover:text-accent-dark text-primary flex items-center gap-4 py-6 transition-colors"
              >
                <SocialIcon network={link.id} />
                <span>
                  <span className="font-serif block text-xl">{link.label}</span>
                  <span className="text-content-muted mt-1 block text-sm">{copy.options.profile}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" labelledBy="contact-enquiry">
        <SectionHeading id="contact-enquiry" title={copy.enquiry.heading} />

        <div className="border-line mt-10 max-w-xl border-t pt-6">
          <p className="text-primary font-serif text-xl sm:text-2xl">{MINDMAGIC_ENQUIRY.name}</p>
          <p className="text-content-muted mt-2 text-sm">{copy.enquiry.association}</p>
          <p className="text-content-muted mt-1 text-sm">{MINDMAGIC_ENQUIRY.program}</p>
          <p className="text-content-muted mt-5 text-sm">{copy.enquiry.phoneLabel}</p>
          <a
            href={MINDMAGIC_ENQUIRY.href}
            aria-label={copy.a11y.enquiryPhone}
            className="hover:text-accent-dark text-primary mt-1 inline-block break-words text-lg transition-colors"
          >
            {MINDMAGIC_ENQUIRY.phoneDisplay}
          </a>
        </div>
      </Section>

      <Section labelledBy="contact-community">
        <SectionHeading
          id="contact-community"
          title={copy.options.community.heading}
          lead={copy.options.community.body}
        />

        <div className="mt-10">
          <ExternalButtonLink
            href={WHATSAPP_COMMUNITY.url}
            ariaLabel={copy.a11y.community}
            variant="outlineOnLight"
            className="w-full sm:w-auto"
          >
            {copy.options.community.cta}
          </ExternalButtonLink>
        </div>
      </Section>

      <Section labelledBy="contact-programs">
        <SectionHeading
          id="contact-programs"
          title={copy.programs.heading}
          lead={copy.programs.supporting}
        />

        <div className="mt-10">
          <ButtonLink to={localizedPath(ROUTES.programs)} className="w-full sm:w-auto">
            {copy.programs.cta}
          </ButtonLink>
        </div>
      </Section>

      <Section tone="muted" labelledBy="contact-social">
        <SectionHeading
          id="contact-social"
          title={copy.social.heading}
          lead={copy.social.supporting}
        />

        <SocialLinks className="mt-8 -mx-2.5 gap-1" />
      </Section>

      <Section tone="dark" labelledBy="contact-final-cta" className="lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-final-cta"
            className="font-serif text-3xl leading-[1.16] tracking-tight text-balance sm:text-4xl lg:text-[2.6rem]"
          >
            {copy.finalCta.heading}
          </h2>

          <div className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <ButtonLink to={localizedPath(ROUTES.programs)} className="w-full sm:w-auto">
              {copy.finalCta.ctaPrograms}
            </ButtonLink>
            <ButtonLink
              to={localizedPath(ROUTES.home)}
              variant="outlineOnDark"
              className="w-full sm:w-auto"
            >
              {copy.finalCta.ctaHome}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
