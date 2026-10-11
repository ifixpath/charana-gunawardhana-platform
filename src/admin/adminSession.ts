import { createContext, useContext } from 'react'

export type AdminSessionValue = {
  email: string | null
}

export const AdminSessionContext = createContext<AdminSessionValue | null>(null)

export function useAdminSession(): AdminSessionValue {
  const value = useContext(AdminSessionContext)

  if (!value) {
    throw new Error('useAdminSession must be used within the admin gate')
  }

  return value
}
