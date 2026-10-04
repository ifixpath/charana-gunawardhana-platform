import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '@/auth/useAuth'
import { usePageMeta } from '@/i18n/usePageMeta'
import { getSupabaseClient } from '@/lib/supabase'
import StudentFrame from '@/pages/Student/StudentFrame'
import { STUDENT_ROUTES } from '@/routes/paths'

const signInHref = `${STUDENT_ROUTES.account}?next=${encodeURIComponent(STUDENT_ROUTES.learn)}`

export default function LearnPage() {
  usePageMeta({
    title: 'Learn — Charana Gunawardhana',
    description: 'Student course access.',
    robots: 'noindex',
  })

  const auth = useAuth()

  return (
    <StudentFrame>
      <h1 className="text-primary font-serif text-3xl tracking-tight">Learn</h1>
      {auth.status === 'loading' ? (
        <p className="text-content-muted mt-4 max-w-xl text-base leading-relaxed">
          Loading your learning account.
        </p>
      ) : auth.user ? (
        <LearningAccount userId={auth.user.id} />
      ) : (
        <div className="max-w-xl">
          <p className="text-content-muted mt-4 text-base leading-relaxed">
            Sign in to open your learning account.
          </p>
          <Link
            to={signInHref}
            className="bg-accent text-primary-dark mt-8 inline-flex items-center justify-center rounded-sm px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase"
          >
            Sign in
          </Link>
        </div>
      )}
    </StudentFrame>
  )
}

function LearningAccount({ userId }: { userId: string }) {
  const [state, setState] = useState<'loading' | 'empty' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let active = true

    getSupabaseClient()
      .from('enrollments')
      .select('id')
      .eq('user_id', userId)
      .then(({ data, error }) => {
        if (!active) return
        if (error) {
          setState('error')
          return
        }
        setState(data && data.length > 0 ? 'ready' : 'empty')
      })

    return () => {
      active = false
    }
  }, [userId])

  if (state === 'loading') {
    return (
      <p className="text-content-muted mt-4 max-w-xl text-base leading-relaxed">
        Loading your learning account.
      </p>
    )
  }

  if (state === 'error') {
    return (
      <p className="text-content-muted mt-4 max-w-xl text-base leading-relaxed" role="alert">
        Your learning account could not be loaded.
      </p>
    )
  }

  if (state === 'ready') {
    return (
      <p className="text-content-muted mt-4 max-w-xl text-base leading-relaxed">
        Your learning account is signed in. Course material is not available on this page yet.
      </p>
    )
  }

  return (
    <p className="text-content-muted mt-4 max-w-xl text-base leading-relaxed">
      No courses available in your learning account yet.
    </p>
  )
}
