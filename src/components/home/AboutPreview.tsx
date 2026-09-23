import PortraitArea from '@/components/common/PortraitArea'
import SectionHeading from '@/components/common/SectionHeading'
import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { PORTRAIT_ABOUT } from '@/data/images'
import { useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { ROUTES } from '@/routes/paths'

export default function AboutPreview() {
  const { home } = useTranslations()
  const localizedPath = useLocalizedPath()

  return (
    <Section labelledBy="about-heading">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          {/* The source is a 2:3 frame; anchoring the 4:5 crop near the top
              keeps his head, torso and crossed leg while trimming the floor.
              Between `sm` and `lg` the portrait is capped but flush left, so it
              shares the page grid with the copy stacked beneath it. */}
          <PortraitArea
            image={{ ...PORTRAIT_ABOUT, alt: home.a11y.aboutPortrait }}
            objectPosition="object-[50%_12%]"
            className="mx-auto max-w-md sm:mx-0 sm:max-w-xl lg:max-w-none"
          />
        </div>

        {/* Between `sm` and `lg` the copy is held to the same measure as the
            capped portrait above it, so the two blocks read as one column. */}
        <div className="sm:max-w-xl lg:col-span-5 lg:col-start-8 lg:max-w-none">
          <SectionHeading
            id="about-heading"
            eyebrow={home.about.eyebrow}
            title={home.about.heading}
            lead={home.about.body}
          />

          <div className="mt-10">
            <ButtonLink to={localizedPath(ROUTES.about)} variant="outlineOnLight">
              {home.about.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  )
}
