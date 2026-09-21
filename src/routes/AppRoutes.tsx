import { Route, Routes } from 'react-router-dom'

import RootLayout from '@/layouts/RootLayout'
import AboutPage from '@/pages/About/AboutPage'
import ContactPage from '@/pages/Contact/ContactPage'
import HomePage from '@/pages/Home/HomePage'
import InsightsPage from '@/pages/Insights/InsightsPage'
import MediaPage from '@/pages/Media/MediaPage'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import ProgramsPage from '@/pages/Programs/ProgramsPage'
import { ROUTES } from '@/routes/paths'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.programs} element={<ProgramsPage />} />
        <Route path={ROUTES.insights} element={<InsightsPage />} />
        <Route path={ROUTES.media} element={<MediaPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
