import { Route } from 'react-router-dom'

import StudentLayout from '@/layouts/StudentLayout'
import AccountPage from '@/pages/Student/AccountPage'
import CheckoutReturnPage from '@/pages/Student/CheckoutReturnPage'
import LearnPage from '@/pages/Student/LearnPage'
import { STUDENT_ROUTES } from '@/routes/paths'

/** `/account` as the child segment `account`. */
const segment = (path: string) => path.replace(/^\//, '')

/**
 * Account, learning and checkout routes. A pathless layout so these paths stay
 * outside the locale tree in AppRoutes and do not pick up RootLayout.
 */
export const studentRoutes = (
  <Route element={<StudentLayout />}>
    <Route path={segment(STUDENT_ROUTES.account)} element={<AccountPage />} />
    <Route path={segment(STUDENT_ROUTES.learn)} element={<LearnPage />} />
    <Route path={segment(STUDENT_ROUTES.checkoutReturn)} element={<CheckoutReturnPage />} />
  </Route>
)
