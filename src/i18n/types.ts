import type { CatalogProgramId } from '@/data/programs'
import type {
  FocusAreaId,
  ProgramFormatId,
  ProgramId,
  TrustPillarId,
} from '@/data/homeContent'
import type { SocialNetwork } from '@/data/socialLinks'

/**
 * Copy for the Mind Magic page. The programme name itself is never
 * translated — it is the official name in every language — so it does not
 * appear as a key here.
 */
export type MindMagicCopy = {
  /** Localised document title and meta description. */
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    descriptor: string
    supporting: string
    /** The two confirmed formats, shown as a metadata line. */
    badges: readonly [string, string]
  }
  overview: { heading: string; body: string }
  formats: {
    heading: string
    recorded: { title: string; points: readonly [string, string] }
    live: { title: string; points: readonly [string] }
  }
  journey: { heading: string; steps: readonly [string, string, string] }
  next: { heading: string; body: string }
  cta: { enquire: string; allPrograms: string }
}

export type OptimisticMagnetCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    descriptor: string
    supporting: string
    badges: readonly [string, string]
  }
  about: { heading: string; body: string }
  journey: {
    heading: string
    body: string
    from: string
    to: string
  }
  eligibility: { heading: string; body: string; review: string }
  continuation: { heading: string; body: string }
  cta: { enquire: string; allPrograms: string }
}

export type SocialMediaBusinessDevelopmentCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    descriptor: string
    supporting: string
  }
  about: { heading: string; body: string }
  focus: { heading: string; body: string }
  cta: { enquire: string; allPrograms: string }
}

export type UnstoppableCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    descriptor: string
    supporting: string
  }
  about: { heading: string; body: string }
  duration: { heading: string; value: string }
  focus: { heading: string; body: string }
  cta: { enquire: string; allPrograms: string }
}

export type ExperienceYour100Copy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    descriptor: string
    supporting: string
  }
  about: { heading: string; body: string }
  format: { heading: string; value: string }
  focus: { heading: string; body: string }
  cta: { enquire: string; allPrograms: string }
}

export type RealityRoomCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    descriptor: string
    supporting: string
  }
  about: { heading: string; body: string }
  format: { heading: string; value: string }
  focus: { heading: string; body: string }
  availability: { heading: string; body: string }
  cta: { enquire: string; allPrograms: string }
}

export type ParadigmShiftingForAbundanceCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    descriptor: string
  }
  about: { heading: string; body: string }
  format: { heading: string; value: string }
  cta: { enquire: string; allPrograms: string }
}

export type MorningGymProgramCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    supporting: string
  }
  about: { heading: string; body: string }
  focus: {
    heading: string
    items: readonly [string, string, string]
  }
  community: { heading: string; cta: string }
  cta: { enquire: string; allPrograms: string }
  a11y: { photo: string; joinCommunity: string }
}

export type HomeProgramItemCopy = {
  description: string
  availability?: string
  detail?: string
  cta?: string
}

/**
 * Every visible string on the public homepage. Brand and official programme
 * names stay out of this tree and are rendered from the data layer.
 */
export type HomeCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    headline: readonly [string, string]
    supporting: string
    ctaPrograms: string
    ctaJourney: string
  }
  about: {
    eyebrow: string
    heading: string
    body: string
    cta: string
  }
  focus: {
    eyebrow: string
    heading: string
    items: Record<FocusAreaId, { title: string; description: string }>
  }
  morningGym: {
    eyebrow: string
    heading: string
    supporting: string
    ctaExplore: string
    ctaCommunity: string
  }
  programs: {
    eyebrow: string
    heading: string
    intro: string
    viewAll: string
    explore: string
    formats: Record<ProgramFormatId, string>
    items: Record<ProgramId, HomeProgramItemCopy>
  }
  trust: {
    eyebrow: string
    heading: string
    body: string
    comingSoon: string
    items: Record<TrustPillarId, { title: string; description: string }>
  }
  media: {
    eyebrow: string
    heading: string
    body: string
    insightsTitle: string
    insightsDescription: string
    mediaTitle: string
    mediaDescription: string
    ctaInsights: string
    ctaYoutube: string
    follow: string
  }
  finalCta: {
    headline: readonly [string, string]
    supporting: string
    ctaPrograms: string
    ctaConnect: string
  }
  footer: {
    rights: string
  }
  a11y: {
    heroPortrait: string
    aboutPortrait: string
    morningGymPhoto: string
    follow: string
    social: Record<SocialNetwork, string>
    whatsappCommunity: string
    watchYoutube: string
  }
}

export type Translation = {
  nav: {
    home: string
    about: string
    programs: string
    insights: string
    media: string
    contact: string
  }
  actions: {
    explorePrograms: string
  }
  a11y: {
    skipToContent: string
    brandHome: string
    mainNavigation: string
    mobileNavigation: string
    openMenu: string
    closeMenu: string
    languageSwitcher: string
  }
  home: HomeCopy
  programs: {
    mindMagic: MindMagicCopy
    optimisticMagnet: OptimisticMagnetCopy
    socialMediaBusinessDevelopment: SocialMediaBusinessDevelopmentCopy
    unstoppable: UnstoppableCopy
    experienceYour100: ExperienceYour100Copy
    morningGym: MorningGymProgramCopy
    realityRoom: RealityRoomCopy
    paradigmShiftingForAbundance: ParadigmShiftingForAbundanceCopy
  }
  programsIndex: ProgramsIndexCopy
  about: AboutCopy
  contact: ContactCopy
  media: MediaPageCopy
  insights: InsightsPageCopy
  notFound: {
    title: string
    description: string
    heading: string
    backHome: string
  }
}

export type ProgramsIndexItemCopy = {
  description?: string
  availability?: string
  detail?: string
}

export type ProgramsIndexCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    heading: string
    supporting: string
  }
  featured: {
    heading: string
    morningGym: { heading: string; supporting: string; cta: string }
    mindMagic: { heading: string; supporting: string; detail: string; cta: string }
  }
  list: {
    heading: string
    explore: string
    comingSoon: string
    items: Record<CatalogProgramId, ProgramsIndexItemCopy>
  }
  progression: {
    heading: string
    body: string
    optimisticMagnet: string
  }
  finalCta: {
    heading: string
    supporting: string
    enquire: string
  }
  a11y: {
    morningGymPhoto: string
  }
}

export type AboutCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    heading: string
    positioning: string
    supporting: string
  }
  intro: {
    heading: string
    body: string
  }
  journey: {
    heading: string
    body: string
    supporting: string
  }
  focus: {
    heading: string
    items: Record<FocusAreaId, { title: string; description: string }>
  }
  programs: {
    heading: string
    supporting: string
    cta: string
  }
  finalCta: {
    heading: string
    ctaPrograms: string
    ctaContact: string
  }
  a11y: {
    portrait: string
  }
}

export type ContactCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    heading: string
    supporting: string
  }
  options: {
    heading: string
    supporting: string
    profile: string
    email: string
    community: {
      heading: string
      body: string
      cta: string
    }
  }
  enquiry: {
    heading: string
    association: string
    phoneLabel: string
  }
  programs: {
    heading: string
    supporting: string
    cta: string
  }
  social: {
    heading: string
    supporting: string
  }
  finalCta: {
    heading: string
    ctaPrograms: string
    ctaHome: string
  }
  a11y: {
    community: string
    email: string
    enquiryPhone: string
  }
}

export type InsightsPageCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    heading: string
    supporting: string
  }
  themes: {
    heading: string
    supporting: string
  }
  featured: {
    heading: string
    body: string
  }
  programs: {
    heading: string
    supporting: string
    cta: string
  }
  media: {
    heading: string
    supporting: string
    cta: string
  }
  finalCta: {
    heading: string
    ctaPrograms: string
    ctaContact: string
  }
  a11y: {
    themes: string
  }
}

export type MediaPageCopy = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    heading: string
    supporting: string
  }
  featured: {
    heading: string
    supporting: string
  }
  video: {
    heading: string
    supporting: string
    cta: string
  }
  social: {
    heading: string
    supporting: string
    profile: string
  }
  finalCta: {
    heading: string
    ctaPrograms: string
    ctaContact: string
  }
  a11y: {
    featured: string
    watchYoutube: string
  }
}
