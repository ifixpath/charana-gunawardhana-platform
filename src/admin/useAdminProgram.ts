import { useEffect, useState } from 'react'

import {
  requestAdminProgram,
  type AdminProgramDetailLoad,
} from '@/admin/adminProgramDetail'
import { useAuth } from '@/auth/useAuth'

type RemoteProgram = {
  token: string
  programId: string
  attempt: number
  result: AdminProgramDetailLoad
}

export function useAdminProgram(programId: string) {
  const auth = useAuth()
  const [attempt, setAttempt] = useState(0)
  const [remote, setRemote] = useState<RemoteProgram | null>(null)
  const accessToken = auth.status === 'ready' ? (auth.session?.access_token ?? null) : null

  useEffect(() => {
    if (!accessToken) return

    let active = true
    const token = accessToken
    const requestAttempt = attempt

    void requestAdminProgram(token, programId).then((result) => {
      if (!active) return
      setRemote({ token, programId, attempt: requestAttempt, result })
    })

    return () => {
      active = false
    }
  }, [accessToken, attempt, programId])

  return {
    load: resolveProgram(auth.status, accessToken, programId, remote, attempt),
    retry() {
      setAttempt((current) => current + 1)
    },
  }
}

function resolveProgram(
  authStatus: 'loading' | 'ready',
  accessToken: string | null,
  programId: string,
  remote: RemoteProgram | null,
  attempt: number,
): AdminProgramDetailLoad {
  if (authStatus === 'loading') return { status: 'loading' }
  if (!accessToken) return { status: 'unauthorized' }
  if (!remote || remote.token !== accessToken || remote.programId !== programId || remote.attempt !== attempt) {
    return { status: 'loading' }
  }
  return remote.result
}
