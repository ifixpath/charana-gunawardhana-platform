import { createClient } from '@supabase/supabase-js'

import { getSupabaseServerEnv } from './env.js'

export type AdminMeBody =
  | {
      admin: true
      user: {
        id: string
        email: string | null
      }
    }
  | {
      error: 'unauthorized' | 'forbidden' | 'server_error'
    }

export type AdminMeResult = {
  status: 200 | 401 | 403 | 500
  body: AdminMeBody
}

function unauthorized(): AdminMeResult {
  return { status: 401, body: { error: 'unauthorized' } }
}

function forbidden(): AdminMeResult {
  return { status: 403, body: { error: 'forbidden' } }
}

function serverError(): AdminMeResult {
  return { status: 500, body: { error: 'server_error' } }
}

function readBearerToken(request: Request): string | null {
  const header = request.headers.get('authorization')

  if (!header) {
    return null
  }

  const match = /^Bearer\s+(\S+)\s*$/i.exec(header)
  const token = match?.[1]

  if (!token) {
    return null
  }

  return token
}

function isRejectedCredential(error: unknown): boolean {
  if (!error || typeof error !== 'object' || !('status' in error)) {
    return !error
  }

  const status = error.status
  return status === 400 || status === 401 || status === 403
}

function isOwnAdminRow(value: unknown, userId: string): boolean {
  if (typeof value !== 'object' || value === null || !('user_id' in value)) {
    return false
  }

  return value.user_id === userId
}

/**
 * Proves the caller from the Supabase access token, then checks admin_users
 * as that user so the existing row policy evaluates auth.uid().
 */
export async function authorizeAdmin(request: Request): Promise<AdminMeResult> {
  const token = readBearerToken(request)

  if (!token) {
    return unauthorized()
  }

  let env: ReturnType<typeof getSupabaseServerEnv>

  try {
    env = getSupabaseServerEnv()
  } catch {
    return serverError()
  }

  try {
    const client = createClient(env.url, env.publishableKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    })

    const { data, error } = await client.auth.getUser(token)

    if (error || !data.user?.id) {
      return isRejectedCredential(error) ? unauthorized() : serverError()
    }

    const userId = data.user.id
    const { data: adminRow, error: adminError } = await client
      .from('admin_users')
      .select('user_id')
      .eq('user_id', userId)
      .maybeSingle()

    if (adminError || !isOwnAdminRow(adminRow, userId)) {
      return adminError ? serverError() : forbidden()
    }

    const email = data.user.email

    return {
      status: 200,
      body: {
        admin: true,
        user: {
          id: userId,
          email: typeof email === 'string' && email.length > 0 ? email : null,
        },
      },
    }
  } catch {
    return serverError()
  }
}
