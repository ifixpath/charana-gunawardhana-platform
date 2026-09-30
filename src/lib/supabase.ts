import { createClient, type SupabaseClient } from '@supabase/supabase-js'

import type { Locale } from '@/i18n/config'

/** Matches `programs.format_id` in the CMS migration. */
export type ProgramFormatId = 'program' | 'workshop' | 'zoomClass' | 'longTerm' | 'recordedCourse'

export type ProgramStatus = 'draft' | 'published'

export type CourseStatus = 'draft' | 'published'

export type EnrollmentStatus = 'active' | 'revoked'

export type ProfileRow = {
  id: string
  email: string | null
  display_name: string | null
  created_at: string
  updated_at: string
}

export type CourseRow = {
  id: string
  program_id: string
  slug: string
  price_amount: number
  currency: string
  status: CourseStatus
  created_at: string
  updated_at: string
}

export type EnrollmentRow = {
  id: string
  user_id: string
  course_id: string
  status: EnrollmentStatus
  created_at: string
  updated_at: string
}

export type ProgramRow = {
  id: string
  slug: string
  official_name: string
  format_id: ProgramFormatId | null
  path: string
  status: ProgramStatus
  sort_order: number
  created_at: string
  updated_at: string
}

export type ProgramTranslationRow = {
  id: string
  program_id: string
  locale: Locale
  meta_title: string | null
  meta_description: string | null
  hero_eyebrow: string | null
  hero_descriptor: string | null
  about_heading: string | null
  about_body: string | null
  format_heading: string | null
  format_value: string | null
  cta_enquire: string | null
  cta_all_programs: string | null
  created_at: string
  updated_at: string
}

export type Database = {
  public: {
    Tables: {
      programs: {
        Row: ProgramRow
        Insert: {
          id: string
          slug: string
          official_name: string
          format_id?: ProgramFormatId | null
          path: string
          status?: ProgramStatus
          sort_order: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          official_name?: string
          format_id?: ProgramFormatId | null
          path?: string
          status?: ProgramStatus
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      program_translations: {
        Row: ProgramTranslationRow
        Insert: {
          id?: string
          program_id: string
          locale: Locale
          meta_title?: string | null
          meta_description?: string | null
          hero_eyebrow?: string | null
          hero_descriptor?: string | null
          about_heading?: string | null
          about_body?: string | null
          format_heading?: string | null
          format_value?: string | null
          cta_enquire?: string | null
          cta_all_programs?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          program_id?: string
          locale?: Locale
          meta_title?: string | null
          meta_description?: string | null
          hero_eyebrow?: string | null
          hero_descriptor?: string | null
          about_heading?: string | null
          about_body?: string | null
          format_heading?: string | null
          format_value?: string | null
          cta_enquire?: string | null
          cta_all_programs?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: ProfileRow
        Insert: {
          id: string
          email?: string | null
          display_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          display_name?: string | null
        }
        Relationships: []
      }
      courses: {
        Row: CourseRow
        Insert: {
          id?: string
          program_id: string
          slug: string
          price_amount: number
          currency?: string
          status?: CourseStatus
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          program_id?: string
          slug?: string
          price_amount?: number
          currency?: string
          status?: CourseStatus
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      enrollments: {
        Row: EnrollmentRow
        Insert: {
          id?: string
          user_id: string
          course_id: string
          status?: EnrollmentStatus
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          status?: EnrollmentStatus
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
  }
}

let browserClient: SupabaseClient<Database> | undefined

function requiredEnv(name: 'VITE_SUPABASE_URL' | 'VITE_SUPABASE_PUBLISHABLE_KEY'): string {
  const value = import.meta.env[name]?.trim()

  if (!value) {
    throw new Error(`${name} is not set`)
  }

  return value
}

/**
 * Rejects a secret or service-role credential before it can be sent from the browser.
 * Publishable keys are not JWTs. A service-role JWT carries `"role":"service_role"`
 * in its payload, which is not visible as raw text.
 */
function assertPublishableKey(key: string) {
  if (key.startsWith('sb_secret_')) {
    throw new Error('Refusing to use a secret key in the browser Supabase client')
  }

  const segments = key.split('.')

  if (segments.length !== 3 || !segments[1]) {
    return
  }

  try {
    const payload = JSON.parse(atob(segments[1].replace(/-/g, '+').replace(/_/g, '/'))) as {
      role?: string
    }

    if (payload.role === 'service_role') {
      throw new Error('Refusing to use a service role key in the browser Supabase client')
    }
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('Refusing to use a service role key')) {
      throw error
    }
  }
}

/**
 * Browser client for published CMS reads.
 * Not used by the public pages yet. No session is stored.
 */
export function getSupabaseClient(): SupabaseClient<Database> {
  if (browserClient) {
    return browserClient
  }

  const url = requiredEnv('VITE_SUPABASE_URL')

  if (url.startsWith('postgres://') || url.startsWith('postgresql://') || url.includes('@')) {
    throw new Error('VITE_SUPABASE_URL must be the project URL, not a database connection string')
  }

  const key = requiredEnv('VITE_SUPABASE_PUBLISHABLE_KEY')
  assertPublishableKey(key)

  browserClient = createClient<Database>(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  })

  return browserClient
}
