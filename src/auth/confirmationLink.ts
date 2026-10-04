const PENDING_EMAIL_KEY = 'charana.pendingConfirmationEmail'
const AUTH_ERROR_KEYS = ['error', 'error_code', 'error_description'] as const

const EXPIRED_MESSAGE =
  'This confirmation link has expired. Enter your email and request a new confirmation email.'

const INVALID_MESSAGE =
  'This confirmation link is no longer valid. Enter your email and request a new confirmation email.'

export type ConfirmationLinkError = {
  message: string
}

function callbackParams(href: string): URLSearchParams {
  const url = new URL(href)
  const params = new URLSearchParams(url.search)
  const hash = new URLSearchParams(url.hash.startsWith('#') ? url.hash.slice(1) : url.hash)

  hash.forEach((value, key) => {
    if (!params.has(key)) params.set(key, value)
  })

  return params
}

function confirmationLinkErrorFromParams(params: URLSearchParams): ConfirmationLinkError | null {
  const error = params.get('error')
  const code = params.get('error_code')

  if (!error && !code) return null

  if (code === 'otp_expired' || error === 'access_denied') {
    return { message: EXPIRED_MESSAGE }
  }

  return { message: INVALID_MESSAGE }
}

/**
 * One follow-up read after the error hash is removed, so a strict-mode
 * remount still shows the notice. Cleared once that clean URL is settled.
 */
let replayNotice: ConfirmationLinkError | null = null

/** Reads a failed Supabase auth redirect. Does not treat it as a session. */
export function readConfirmationLinkError(href: string): ConfirmationLinkError | null {
  const error = confirmationLinkErrorFromParams(callbackParams(href))

  if (error) {
    replayNotice = error
    return error
  }

  if (!replayNotice) return null

  const notice = replayNotice
  replayNotice = null
  return notice
}

export function clearConfirmationLinkReplay() {
  replayNotice = null
}

/** Drops only the auth error fragment or query. Student return paths stay. */
export function confirmationLinkPathWithoutError(href: string): string {
  const url = new URL(href)
  const hash = new URLSearchParams(url.hash.startsWith('#') ? url.hash.slice(1) : '')

  for (const key of AUTH_ERROR_KEYS) {
    url.searchParams.delete(key)
    hash.delete(key)
  }

  const search = url.searchParams.toString()
  const nextHash = hash.toString()

  return `${url.pathname}${search ? `?${search}` : ''}${nextHash ? `#${nextHash}` : ''}`
}

function isSafeEmail(value: string): boolean {
  return value.length > 3 && value.length <= 320 && value.includes('@') && !/\s/.test(value)
}

/** Remembers an email from this browser session. Never stores a password. */
export function rememberConfirmationEmail(email: string) {
  const trimmed = email.trim()
  if (!isSafeEmail(trimmed)) return

  try {
    sessionStorage.setItem(PENDING_EMAIL_KEY, trimmed)
  } catch {
    // Storage can be unavailable in a private session.
  }
}

export function readConfirmationEmail(): string | null {
  try {
    const value = sessionStorage.getItem(PENDING_EMAIL_KEY)?.trim() ?? ''
    return isSafeEmail(value) ? value : null
  } catch {
    return null
  }
}
