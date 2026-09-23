import { MIND_MAGIC_LOGO, type ImageAsset } from '@/data/images'
import { ROUTES, type RoutePath } from '@/routes/paths'

export type FocusArea = {
  id: string
  title: string
  description: string
}

export const FOCUS_AREAS: readonly FocusArea[] = [
  {
    id: 'personal-growth',
    title: 'Personal Growth',
    description: 'Habits, self-awareness and steady progress that compounds over time.',
  },
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Leading with clarity, responsibility and considered judgement.',
  },
  {
    id: 'mindset',
    title: 'Mindset',
    description: 'Attention, belief and emotional discipline as daily practice.',
  },
  {
    id: 'direction',
    title: 'Business & Life Direction',
    description: 'Choosing a direction with intent, then moving on it consistently.',
  },
]

/** How the programme runs. Kept to an approved set so the labels stay uniform. */
export type ProgramFormat = 'Program' | 'Workshop' | 'Zoom Class' | 'Long-term Program'

export type ProgramPreview = {
  id: string
  name: string
  /** One line only — detail belongs on the programme page, not the preview. */
  description: string
  format: ProgramFormat
  /** Programme mark, shown only where an approved logo exists. */
  logo?: ImageAsset
  /** Which formats the programme is offered in. */
  availability?: string
  /** Short confirmed metadata, e.g. a recorded running time. */
  detail?: string
  /** Overrides the generic "Explore Program" wording. */
  ctaLabel?: string
  /**
   * Language-neutral path to the programme's own page, set once that page
   * exists. Rows without one keep pointing at the programmes index.
   */
  path?: RoutePath
  /**
   * Associated initiative brand, e.g. an offering that runs under Rich
   * Brothers rather than under Charana's own name. Left unset until an
   * attribution is confirmed; the row simply omits the note.
   */
  brand?: string
}

export const PROGRAM_PREVIEWS: readonly ProgramPreview[] = [
  {
    id: 'mind-magic',
    name: 'Mind Magic',
    description: 'Mindset & Personal Transformation Program',
    format: 'Program',
    logo: MIND_MAGIC_LOGO,
    availability: 'Available in recorded and live workshop formats.',
    detail: 'Recorded Program · Approx. 8.5 Hours',
    ctaLabel: 'Explore Mind Magic',
    path: ROUTES.mindMagic,
  },
  {
    id: 'optimistic-magnet',
    name: 'Optimistic Magnet',
    description: 'A guided program centred on gratitude, perspective and abundance thinking.',
    format: 'Program',
  },
  {
    id: 'social-media-business-development',
    name: 'Social Media for Business Development',
    description: 'A practical online class on using social media to support business growth.',
    format: 'Zoom Class',
  },
  {
    id: 'unstoppable',
    name: 'Unstoppable',
    description: 'A long-term life transformation program focused on discipline and progress.',
    format: 'Long-term Program',
  },
  {
    id: 'experience-your-100',
    name: 'Experience Your 100%',
    description: 'A one-day workshop designed to help participants unlock their full performance.',
    format: 'Workshop',
  },
]

export type TrustPillar = {
  id: string
  title: string
  description: string
  status: string
}

export const TRUST_PILLARS: readonly TrustPillar[] = [
  {
    id: 'student-stories',
    title: 'Student Stories',
    description: 'Experiences from people inside the programs will be published here.',
    status: 'Coming soon',
  },
  {
    id: 'community-experiences',
    title: 'Community Experiences',
    description: 'Reflections shared by the community will appear in this space.',
    status: 'Coming soon',
  },
  {
    id: 'media-recognition',
    title: 'Media & Recognition',
    description: 'Features, interviews and appearances will be listed here.',
    status: 'Coming soon',
  },
]
