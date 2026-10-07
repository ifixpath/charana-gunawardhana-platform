/**
 * Server runtime configuration for the admin API.
 * Reads process.env only. Never reads import.meta.env or a VITE_ variable.
 * The future secret key is intentionally not read here.
 */

function isProjectUrl(url: string): boolean {
  if (url.startsWith('postgres://') || url.startsWith('postgresql://') || url.includes('@')) {
    return false
  }

  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:'
  } catch {
    return false
  }
}

function payloadRole(value: unknown): string | undefined {
  if (typeof value !== 'object' || value === null || !('role' in value)) {
    return undefined
  }

  return typeof value.role === 'string' ? value.role : undefined
}

/** Refuses a secret or service-role credential in the publishable slot. */
function isPrivilegedCredential(key: string): boolean {
  if (key.startsWith('sb_secret_')) {
    return true
  }

  const segments = key.split('.')
  const payloadSegment = segments[1]

  if (segments.length !== 3 || !payloadSegment) {
    return false
  }

  try {
    const payload: unknown = JSON.parse(Buffer.from(payloadSegment, 'base64url').toString('utf8'))
    return payloadRole(payload) === 'service_role'
  } catch {
    return false
  }
}

export function getSupabaseServerEnv(): { url: string; publishableKey: string } {
  const url = process.env.SUPABASE_URL?.trim() ?? ''
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY?.trim() ?? ''

  if (!url || !publishableKey || !isProjectUrl(url) || isPrivilegedCredential(publishableKey)) {
    throw new Error('Server configuration is incomplete')
  }

  return { url, publishableKey }
}
