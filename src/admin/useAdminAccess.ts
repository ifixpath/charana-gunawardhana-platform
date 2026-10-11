import { useEffect, useState } from 'react'

import { requestAdminAccess, type AdminAccess } from '@/admin/adminAccess'
import { useAuth } from '@/auth/useAuth'

type RemoteAccess = {
  token: string
  attempt: number
  access: AdminAccess
}

export function useAdminAccess() {
  const auth = useAuth()
  const [attempt, setAttempt] = useState(0)
  const [remote, setRemote] = useState<RemoteAccess | null>(null)
  const accessToken = auth.status === 'ready' ? (auth.session?.access_token ?? null) : null

  useEffect(() => {
    if (!accessToken) return

    let active = true
    const token = accessToken
    const requestAttempt = attempt

    void requestAdminAccess(token).then((access) => {
      if (!active) return
      setRemote({ token, attempt: requestAttempt, access })
    })

    return () => {
      active = false
    }
  }, [accessToken, attempt])

  const access = resolveAccess(auth.status, accessToken, remote, attempt)

  return {
    access,
    retry() {
      setAttempt((current) => current + 1)
    },
  }
}

function resolveAccess(
  authStatus: 'loading' | 'ready',
  accessToken: string | null,
  remote: RemoteAccess | null,
  attempt: number,
): AdminAccess {
  if (authStatus === 'loading') return { status: 'loading' }
  if (!accessToken) return { status: 'signed-out' }
  if (!remote || remote.token !== accessToken || remote.attempt !== attempt) {
    return { status: 'loading' }
  }
  return remote.access
}
