import { useEffect, useState } from 'react'

import {
  requestAdminPrograms,
  type AdminProgramsLoad,
} from '@/admin/adminPrograms'
import { useAuth } from '@/auth/useAuth'

type RemotePrograms = {
  token: string
  attempt: number
  result: AdminProgramsLoad
}

export function useAdminPrograms() {
  const auth = useAuth()
  const [attempt, setAttempt] = useState(0)
  const [remote, setRemote] = useState<RemotePrograms | null>(null)
  const accessToken = auth.status === 'ready' ? (auth.session?.access_token ?? null) : null

  useEffect(() => {
    if (!accessToken) return

    let active = true
    const token = accessToken
    const requestAttempt = attempt

    void requestAdminPrograms(token).then((result) => {
      if (!active) return
      setRemote({ token, attempt: requestAttempt, result })
    })

    return () => {
      active = false
    }
  }, [accessToken, attempt])

  return {
    load: resolvePrograms(auth.status, accessToken, remote, attempt),
    retry() {
      setAttempt((current) => current + 1)
    },
  }
}

function resolvePrograms(
  authStatus: 'loading' | 'ready',
  accessToken: string | null,
  remote: RemotePrograms | null,
  attempt: number,
): AdminProgramsLoad {
  if (authStatus === 'loading') return { status: 'loading' }
  if (!accessToken) return { status: 'unauthorized' }
  if (!remote || remote.token !== accessToken || remote.attempt !== attempt) {
    return { status: 'loading' }
  }
  return remote.result
}
