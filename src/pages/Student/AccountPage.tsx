import { useEffect, useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import {
  confirmationLinkPathWithoutError,
  clearConfirmationLinkReplay,
  readConfirmationEmail,
  readConfirmationLinkError,
  rememberConfirmationEmail,
} from '@/auth/confirmationLink'
import { studentReturnPath } from '@/auth/returnPath'
import { useAuth } from '@/auth/useAuth'
import { usePageMeta } from '@/i18n/usePageMeta'
import { getSupabaseClient } from '@/lib/supabase'
import StudentFrame from '@/pages/Student/StudentFrame'
import { STUDENT_ROUTES } from '@/routes/paths'

const fieldClass =
  'border-line text-content mt-2 w-full rounded-sm border bg-surface px-3 py-3 text-base outline-none focus-visible:border-accent'

const primaryButtonClass =
  'bg-accent text-primary-dark inline-flex w-full items-center justify-center rounded-sm px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase disabled:opacity-60'

export default function AccountPage() {
  usePageMeta({
    title: 'Account — Charana Gunawardhana',
    description: 'Student account.',
    robots: 'noindex',
  })

  const auth = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const next = studentReturnPath(searchParams.get('next'))

  useEffect(() => {
    if (auth.status !== 'ready' || !auth.user || !next) return
    navigate(next, { replace: true })
  }, [auth.status, auth.user, next, navigate])

  return (
    <StudentFrame>
      {auth.status === 'loading' ? (
        <p className="text-content-muted text-base">Loading your account.</p>
      ) : auth.user ? (
        <SignedInAccount userId={auth.user.id} authEmail={auth.user.email ?? null} />
      ) : (
        <AuthForm />
      )}
    </StudentFrame>
  )
}

function SignedInAccount({ userId, authEmail }: { userId: string; authEmail: string | null }) {
  const auth = useAuth()
  const [displayName, setDisplayName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(authEmail)
  const [profileState, setProfileState] = useState<'loading' | 'ready' | 'error'>('loading')
  const [signOutMessage, setSignOutMessage] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    getSupabaseClient()
      .from('profiles')
      .select('display_name, email')
      .eq('id', userId)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!active) return

        if (error) {
          setProfileState('error')
          return
        }

        setDisplayName(data?.display_name ?? null)
        setEmail(data?.email ?? authEmail)
        setProfileState('ready')
      })

    return () => {
      active = false
    }
  }, [authEmail, userId])

  return (
    <div className="max-w-md">
      <h1 className="text-primary font-serif text-3xl tracking-tight">Account</h1>

      {profileState === 'loading' ? (
        <p className="text-content-muted mt-6 text-base">Loading your account.</p>
      ) : (
        <dl className="mt-8 space-y-4">
          {displayName ? (
            <div>
              <dt className="text-content-muted text-xs tracking-[0.16em] uppercase">Name</dt>
              <dd className="text-primary mt-1 text-base">{displayName}</dd>
            </div>
          ) : null}
          <div>
            <dt className="text-content-muted text-xs tracking-[0.16em] uppercase">Email</dt>
            <dd className="text-primary mt-1 text-base break-all">{email ?? 'Email unavailable'}</dd>
          </div>
        </dl>
      )}

      {profileState === 'error' ? (
        <p className="text-content-muted mt-6 text-sm" role="alert">
          Your profile could not be loaded.
        </p>
      ) : null}

      {signOutMessage ? (
        <p className="text-content-muted mt-6 text-sm" role="alert">
          {signOutMessage}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          className="border-primary/20 text-primary inline-flex items-center justify-center rounded-sm border px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase"
          onClick={() => {
            void auth.signOut().then((result) => {
              if (!result.ok) setSignOutMessage(result.message)
            })
          }}
        >
          Sign out
        </button>
        <Link
          to={STUDENT_ROUTES.learn}
          className="text-accent-dark text-sm underline underline-offset-4"
        >
          Learning account
        </Link>
      </div>
    </div>
  )
}

function AuthForm() {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [expiredLink] = useState(() => {
    const error = readConfirmationLinkError(window.location.href)
    return {
      message: error?.message ?? null,
      email: error ? readConfirmationEmail() : null,
    }
  })
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in')
  const [email, setEmail] = useState(expiredLink.email ?? '')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [resending, setResending] = useState(false)
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(expiredLink.message !== null)
  const [message, setMessage] = useState<string | null>(expiredLink.message)

  useEffect(() => {
    if (!expiredLink.message) return

    const nextPath = confirmationLinkPathWithoutError(window.location.href)
    if (nextPath !== `${location.pathname}${location.search}${location.hash}`) {
      navigate(nextPath, { replace: true })
      return
    }

    clearConfirmationLinkReplay()
  }, [expiredLink.message, location.hash, location.pathname, location.search, navigate])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setMessage(null)
    setAwaitingConfirmation(false)

    const result =
      mode === 'sign-in'
        ? await auth.signIn(email.trim(), password)
        : await auth.signUp(email.trim(), password)

    setSubmitting(false)

    if (!result.ok) {
      setMessage(result.message)
      setAwaitingConfirmation(result.confirmationRequired === true)
      return
    }

    if (result.needsConfirmation) {
      rememberConfirmationEmail(email)
      setMessage('Check your email to confirm your account. Then sign in.')
      setAwaitingConfirmation(true)
      setMode('sign-in')
      setPassword('')
    }
  }

  async function onResendConfirmation() {
    if (resending) return

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      setMessage('Enter your email to request a new confirmation email.')
      return
    }

    setResending(true)
    setMessage(null)
    rememberConfirmationEmail(trimmedEmail)

    const result = await auth.resendConfirmation(trimmedEmail)
    setResending(false)

    if (!result.ok) {
      setMessage(result.message)
      return
    }

    setMessage('Confirmation email sent. Please check your inbox and spam folder.')
  }

  const isSignIn = mode === 'sign-in'

  return (
    <div className="max-w-md">
      <h1 className="text-primary font-serif text-3xl tracking-tight">Account</h1>
      <p className="text-content-muted mt-4 text-base leading-relaxed">
        {isSignIn ? 'Sign in to your learning account.' : 'Create a learning account.'}
      </p>

      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <label className="text-primary block text-sm font-medium">
          Email
          <input
            className={fieldClass}
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className="text-primary block text-sm font-medium">
          Password
          <input
            className={fieldClass}
            type="password"
            name="password"
            autoComplete={isSignIn ? 'current-password' : 'new-password'}
            required
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        {message ? (
          <p className="text-content text-sm leading-relaxed" role="status">
            {message}
          </p>
        ) : null}

        <button className={primaryButtonClass} type="submit" disabled={submitting || resending}>
          {submitting ? 'Please wait' : isSignIn ? 'Sign in' : 'Create account'}
        </button>

        {awaitingConfirmation ? (
          <button
            type="button"
            className="text-accent-dark text-sm underline underline-offset-4 disabled:opacity-60"
            disabled={resending || submitting}
            onClick={() => {
              void onResendConfirmation()
            }}
          >
            {resending ? 'Please wait' : 'Resend confirmation email'}
          </button>
        ) : null}
      </form>

      <button
        type="button"
        className="text-accent-dark mt-6 text-sm underline underline-offset-4"
        onClick={() => {
          setMode(isSignIn ? 'sign-up' : 'sign-in')
          setMessage(null)
          setAwaitingConfirmation(false)
        }}
      >
        {isSignIn ? 'Create account' : 'Sign in'}
      </button>
    </div>
  )
}
