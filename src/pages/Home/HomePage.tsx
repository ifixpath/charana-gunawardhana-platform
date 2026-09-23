import AboutPreview from '@/components/home/AboutPreview'
import FinalCtaSection from '@/components/home/FinalCtaSection'
import FocusAreas from '@/components/home/FocusAreas'
import HeroSection from '@/components/home/HeroSection'
import InsightsPreview from '@/components/home/InsightsPreview'
import MorningGymSection from '@/components/home/MorningGymSection'
import ProgramsPreview from '@/components/home/ProgramsPreview'
import TrustSection from '@/components/home/TrustSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FocusAreas />
      <MorningGymSection />
      <ProgramsPreview />
      <TrustSection />
      <InsightsPreview />
      <FinalCtaSection />
    </>
  )
}
