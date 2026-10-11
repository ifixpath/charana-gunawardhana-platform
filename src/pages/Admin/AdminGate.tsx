import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { AdminSessionContext } from '@/admin/adminSession'
import { useAdminAccess } from '@/admin/useAdminAccess'
import { useAuth } from '@/auth/useAuth'
import { DEFAULT_LOCALE, LOCALE_TAGS } from '@/i18n/config'
import { usePageMeta } from '@/i18n/usePageMeta'
import { adminInputClass, adminPrimaryButtonClass } from '@/pages/Admin/adminStyles'
import { ROUTES } from '@/routes/paths'

export default function AdminGate() {
  const { access, retry } = useAdminAccess()

  useEffect(() => {
    document.documentElement.lang = LOCALE_TAGS[DEFAULT_LOCALE]
  }, [])

  if (access.status === 'ready') {
    return (
      <AdminSessionContext.Provider value={{ email: access.email }}>
        <Outlet />
      </AdminSessionContext.Provider>
    )
  }

  return (
    <AdminAccessFrame>
      {access.status === 'loading' ? <LoadingAccess /> : null}
      {access.status === 'signed-out' ? <AdminSignIn /> : null}
      {access.status === 'forbidden' ? <ForbiddenAccess /> : null}
      {access.status === 'error' ? <AccessError onRetry={retry} /> : null}
    </AdminAccessFrame>
  )
}

function AdminAccessFrame({ children }: { children: ReactNode }) {
  return (
    <div className="bg-surface-muted min-h-dvh">
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-center px-5 py-12">
        <Link to={ROUTES.home} className="text-primary font-serif text-lg tracking-tight">
          Charana Gunawardhana
        </Link>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  )
}

function LoadingAccess() {
  usePageMeta({
    title: 'Admin — Charana Gunawardhana',
    description: 'Admin authorization.',
    robots: 'noindex',
  })

  return (
    <p className="text-content-muted text-base" role="status">
      Checking admin access.
    </p>
  )
}

function AdminSignIn() {
  usePageMeta({
    title: 'Admin sign in — Charana Gunawardhana',
    description: 'Administrator sign in.',
    robots: 'noindex',
  })

  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setMessage(null)

    const result = await auth.signIn(email.trim(), password)
    setSubmitting(false)

    if (!result.ok) {
      setMessage(result.message)
    }
  }

  return (
    <div>
      <h1 className="text-primary font-serif text-3xl tracking-tight">Admin</h1>
      <p className="text-content-muted mt-4 text-base leading-relaxed">
        Sign in with an administrator account. Access is confirmed by the admin service before the
        dashboard opens.
      </p>
      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <label className="text-primary block text-sm font-medium">
          Email
          <input
            className={adminInputClass}
            type="email"
            name="email"
            autoComplete="username"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="text-primary block text-sm font-medium">
          Password
          <input
            className={adminInputClass}
            type="password"
            name="password"
            autoComplete="current-password"
            required
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {message ? (
          <p className="text-content text-sm leading-relaxed" role="alert">
            {message}
          </p>
        ) : null}
        <button className={`${adminPrimaryButtonClass} w-full`} type="submit" disabled={submitting}>
          {submitting ? 'Please wait' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}

function ForbiddenAccess() {
  usePageMeta({
    title: 'Admin unavailable — Charana Gunawardhana',
    description: 'This account is not an administrator.',
    robots: 'noindex',
  })

  const auth = useAuth()
  const [message, setMessage] = useState<string | null>(null)

  return (
    <div>
      <h1 className="text-primary font-serif text-3xl tracking-tight">Admin unavailable</h1>
      <p className="text-content-muted mt-4 text-base leading-relaxed" role="alert">
        This account is signed in, but it is not an administrator.
      </p>
      {message ? (
        <p className="text-content mt-4 text-sm" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="button"
        className={`${adminPrimaryButtonClass} mt-8`}
        onClick={() => {
          void auth.signOut().then((result) => {
            if (!result.ok) setMessage(result.message)
          })
        }}
      >
        Sign out
      </button>
    </div>
  )
}

function AccessError({ onRetry }: { onRetry: () => void }) {
  usePageMeta({
    title: 'Admin error — Charana Gunawardhana',
    description: 'Admin access could not be verified.',
    robots: 'noindex',
  })

  return (
    <div>
      <h1 className="text-primary font-serif text-3xl tracking-tight">Admin access</h1>
      <p className="text-content-muted mt-4 text-base leading-relaxed" role="alert">
        Admin access could not be verified. The dashboard stays closed until the admin service
        confirms this account.
      </p>
      <button type="button" className={`${adminPrimaryButtonClass} mt-8`} onClick={onRetry}>
        Try again
      </button>
    </div>
  )
}
