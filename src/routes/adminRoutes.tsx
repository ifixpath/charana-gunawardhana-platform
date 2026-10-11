import { Route } from 'react-router-dom'

import AdminLayout from '@/layouts/AdminLayout'
import AdminGate from '@/pages/Admin/AdminGate'
import AdminHomePage from '@/pages/Admin/AdminHomePage'
import AdminNotFoundPage from '@/pages/Admin/AdminNotFoundPage'
import ProgramEditorPage from '@/pages/Admin/ProgramEditorPage'
import ProgramsPage from '@/pages/Admin/ProgramsPage'

/**
 * Admin routes. A pathless check wraps the tree so these paths stay outside
 * the locale layout and are not served again under `/si` or `/ta`.
 */
export const adminRoutes = (
  <Route path="admin" element={<AdminGate />}>
    <Route element={<AdminLayout />}>
      <Route index element={<AdminHomePage />} />
      <Route path="programs" element={<ProgramsPage />} />
      <Route path="programs/new" element={<ProgramEditorPage mode="new" />} />
      <Route path="programs/:programId" element={<ProgramEditorPage mode="existing" />} />
      <Route path="*" element={<AdminNotFoundPage />} />
    </Route>
  </Route>
)
