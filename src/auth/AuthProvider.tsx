import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Session } from '@supabase/supabase-js'

import { authFailureMessage } from '@/auth/authErrors'
import { AuthContext, type AuthResult, type AuthStatus } from '@/auth/auth-context'
import { getSupabaseClient } from '@/lib/supabase'
import { STUDENT_ROUTES } from '@/routes/paths'

type AuthProviderProps = {
  children: ReactNode
}

function accountEmailRedirect() {
  return `${window.location.origin}${STUDENT_ROUTES.account}`
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [status, setStatus] = useState<AuthStatus>('loading')
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const client = getSupabaseClient()
    let active = true

    client.auth.getSession().then(
      ({ data }) => {
        if (!active) return
        setSession(data.session)
        setStatus('ready')
      },
      () => {
        if (!active) return
        setSession(null)
        setStatus('ready')
      },
    )

    const { data } = client.auth.onAuthStateChange((_event, nextSession) => {
      if (!active) return
      setSession(nextSession)
      setStatus('ready')
    })

    return () => {
      active = false
      data.subscription.unsubscribe()
    }
  }, [])

  const value = useMemo(() => {
    const client = getSupabaseClient()

    return {
      status,
      session,
      user: session?.user ?? null,
      async signIn(email: string, password: string): Promise<AuthResult> {
        const { data, error } = await client.auth.signInWithPassword({ email, password })

        if (error) {
          return {
            ok: false,
            message: authFailureMessage(error),
            confirmationRequired: error.code === 'email_not_confirmed',
          }
        }

        if (!data.session) {
          return {
            ok: false,
            message: 'Confirm your email before signing in.',
            confirmationRequired: true,
          }
        }

        return { ok: true, needsConfirmation: false }
      },
      async signUp(email: string, password: string): Promise<AuthResult> {
        const { data, error } = await client.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: accountEmailRedirect(),
          },
        })

        if (error) {
          return { ok: false, message: authFailureMessage(error) }
        }

        if (data.user && data.user.identities?.length === 0) {
          return {
            ok: false,
            message: 'An account with this email already exists. Sign in instead.',
          }
        }

        return { ok: true, needsConfirmation: !data.session }
      },
      async resendConfirmation(email: string): Promise<AuthResult> {
        const { error } = await client.auth.resend({
          type: 'signup',
          email,
          options: {
            emailRedirectTo: accountEmailRedirect(),
          },
        })

        if (error) {
          return { ok: false, message: authFailureMessage(error) }
        }

        return { ok: true, needsConfirmation: false }
      },
      async signOut(): Promise<AuthResult> {
        const { error } = await client.auth.signOut()

        if (error) {
          return { ok: false, message: authFailureMessage(error) }
        }

        return { ok: true, needsConfirmation: false }
      },
    }
  }, [session, status])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
