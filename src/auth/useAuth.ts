import { useContext } from 'react'

import { AuthContext, type AuthContextValue } from '@/auth/auth-context'

export function useAuth(): AuthContextValue {
  const auth = useContext(AuthContext)

  if (!auth) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return auth
}
