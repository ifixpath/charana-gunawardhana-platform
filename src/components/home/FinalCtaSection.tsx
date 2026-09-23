import Section from '@/components/layout/Section'
import ButtonLink from '@/components/ui/ButtonLink'
import { ROUTES } from '@/routes/paths'

export default function FinalCtaSection() {
  return (
    <Section tone="dark" labelledBy="final-cta-heading" className="lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="final-cta-heading"
          className="font-serif text-3xl leading-[1.16] tracking-tight sm:text-4xl lg:text-[2.6rem]"
        >
          <span className="block text-balance">Build a Stronger You.</span>
          <span className="block text-balance">Create a Brighter Tomorrow.</span>
        </h2>

        <p className="text-content-inverse-muted mt-6 text-base leading-relaxed sm:text-lg">
          Start with a program, or reach out directly.
        </p>

        <div className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <ButtonLink to={ROUTES.programs} className="w-full sm:w-auto">
            Explore Programs
          </ButtonLink>
          <ButtonLink to={ROUTES.contact} variant="outlineOnDark" className="w-full sm:w-auto">
            Connect With Charana
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
