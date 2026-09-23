import { Route, Routes } from 'react-router-dom'

import { DEFAULT_LOCALE, LOCALES } from '@/i18n/config'
import RootLayout from '@/layouts/RootLayout'
import AboutPage from '@/pages/About/AboutPage'
import ContactPage from '@/pages/Contact/ContactPage'
import HomePage from '@/pages/Home/HomePage'
import InsightsPage from '@/pages/Insights/InsightsPage'
import MediaPage from '@/pages/Media/MediaPage'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import MindMagicPage from '@/pages/Programs/MindMagicPage'
import OptimisticMagnetPage from '@/pages/Programs/OptimisticMagnetPage'
import ProgramsPage from '@/pages/Programs/ProgramsPage'
import SocialMediaBusinessDevelopmentPage from '@/pages/Programs/SocialMediaBusinessDevelopmentPage'
import UnstoppablePage from '@/pages/Programs/UnstoppablePage'
import ExperienceYour100Page from '@/pages/Programs/ExperienceYour100Page'
import { ROUTES } from '@/routes/paths'

/** `/about` as the child segment `about`, so it can hang off any prefix. */
const segment = (path: string) => path.replace(/^\//, '')

/**
 * The page tree, declared once and mounted under every locale. Children are
 * relative, so the same definitions resolve to `/about` under the English
 * branch and `/si/about` under the Sinhala one — including any nested route
 * added later.
 */
const pageRoutes = () => [
  <Route key="home" index element={<HomePage />} />,
  <Route key="about" path={segment(ROUTES.about)} element={<AboutPage />} />,
  <Route key="programs" path={segment(ROUTES.programs)} element={<ProgramsPage />} />,
  <Route key="mind-magic" path={segment(ROUTES.mindMagic)} element={<MindMagicPage />} />,
  <Route
    key="optimistic-magnet"
    path={segment(ROUTES.optimisticMagnet)}
    element={<OptimisticMagnetPage />}
  />,
  <Route
    key="social-media-business-development"
    path={segment(ROUTES.socialMediaBusinessDevelopment)}
    element={<SocialMediaBusinessDevelopmentPage />}
  />,
  <Route key="unstoppable" path={segment(ROUTES.unstoppable)} element={<UnstoppablePage />} />,
  <Route
    key="experience-your-100"
    path={segment(ROUTES.experienceYour100)}
    element={<ExperienceYour100Page />}
  />,
  <Route key="insights" path={segment(ROUTES.insights)} element={<InsightsPage />} />,
  <Route key="media" path={segment(ROUTES.media)} element={<MediaPage />} />,
  <Route key="contact" path={segment(ROUTES.contact)} element={<ContactPage />} />,
  // Keeps an unknown path inside its own language, so the chrome around the
  // 404 stays in the language the reader was browsing in.
  <Route key="not-found" path="*" element={<NotFoundPage />} />,
]

export default function AppRoutes() {
  return (
    <Routes>
      {LOCALES.map((locale) => (
        <Route
          key={locale}
          path={locale === DEFAULT_LOCALE ? ROUTES.home : `/${locale}`}
          element={<RootLayout />}
        >
          {pageRoutes()}
        </Route>
      ))}
    </Routes>
  )
}
