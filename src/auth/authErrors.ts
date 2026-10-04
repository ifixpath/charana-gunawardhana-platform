import type { AuthError } from '@supabase/supabase-js'

const MESSAGES: Record<string, string> = {
  invalid_credentials: 'Email or password is incorrect.',
  email_not_confirmed: 'Confirm your email before signing in.',
  user_already_exists: 'An account with this email already exists. Sign in instead.',
  email_exists: 'An account with this email already exists. Sign in instead.',
  weak_password: 'Use a password of at least 8 characters.',
  over_request_rate_limit: 'Too many attempts. Wait a moment and try again.',
  over_email_send_rate_limit: 'Too many attempts. Wait a moment and try again.',
}

export function authFailureMessage(error: AuthError): string {
  if (error.code && MESSAGES[error.code]) {
    return MESSAGES[error.code]
  }

  return 'Something went wrong. Try again.'
}
