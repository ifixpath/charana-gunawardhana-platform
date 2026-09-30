import AboutPreview from '@/components/home/AboutPreview'
import ApproachSection from '@/components/home/ApproachSection'
import FinalCtaSection from '@/components/home/FinalCtaSection'
import FocusAreas from '@/components/home/FocusAreas'
import HeroSection from '@/components/home/HeroSection'
import InsightsPreview from '@/components/home/InsightsPreview'
import MorningGymSection from '@/components/home/MorningGymSection'
import ProgramsPreview from '@/components/home/ProgramsPreview'
import TrustSection from '@/components/home/TrustSection'
import { useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'

export default function HomePage() {
  const { home } = useTranslations()

  usePageMeta(home.meta)

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ApproachSection />
      <FocusAreas />
      <MorningGymSection />
      <ProgramsPreview />
      <TrustSection />
      <InsightsPreview />
      <FinalCtaSection />
    </>
  )
}
