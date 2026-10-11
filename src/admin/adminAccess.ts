export const ADMIN_ME_PATH = '/api/admin/me'

export type AdminAccess =
  | { status: 'loading' }
  | { status: 'signed-out' }
  | { status: 'forbidden' }
  | { status: 'error' }
  | { status: 'ready'; email: string | null }

type AdminMeSuccess = {
  admin: true
  user: {
    id: string
    email: string | null
  }
}

function isAdminMeSuccess(value: unknown): value is AdminMeSuccess {
  if (typeof value !== 'object' || value === null) return false
  if (!('admin' in value) || value.admin !== true) return false
  if (!('user' in value) || typeof value.user !== 'object' || value.user === null) return false

  const user: object = value.user
  if (!('id' in user) || typeof user.id !== 'string' || user.id.length === 0) return false

  const email = 'email' in user ? user.email : null
  return email === null || typeof email === 'string'
}

/**
 * Asks the trusted admin endpoint whether this access token belongs to an
 * administrator. A missing token, a non-JSON response, or any body other than
 * `{ admin: true }` does not grant access.
 */
export async function requestAdminAccess(accessToken: string): Promise<AdminAccess> {
  try {
    const response = await fetch(ADMIN_ME_PATH, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
    })

    const contentType = response.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json')) {
      return { status: 'error' }
    }

    const body: unknown = await response.json()

    if (response.status === 200 && isAdminMeSuccess(body)) {
      return { status: 'ready', email: body.user.email }
    }

    if (response.status === 401) return { status: 'signed-out' }
    if (response.status === 403) return { status: 'forbidden' }
    return { status: 'error' }
  } catch {
    return { status: 'error' }
  }
}
