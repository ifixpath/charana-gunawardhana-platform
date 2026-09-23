import type { Translation } from '@/i18n/types'

export const en: Translation = {
  nav: {
    home: 'Home',
    about: 'About',
    programs: 'Programs',
    insights: 'Insights',
    media: 'Media',
    contact: 'Contact',
  },
  actions: {
    explorePrograms: 'Explore Programs',
  },
  a11y: {
    skipToContent: 'Skip to content',
    brandHome: 'Charana Gunawardhana — home',
    mainNavigation: 'Main navigation',
    mobileNavigation: 'Mobile navigation',
    openMenu: 'Open main menu',
    closeMenu: 'Close main menu',
    languageSwitcher: 'Select language',
  },
  programs: {
    mindMagic: {
      meta: {
        title: 'Mind Magic — Charana Gunawardhana',
        description:
          'Mind Magic is a mindset and personal transformation program, available as a recorded program of approximately 8.5 hours and as a live workshop.',
      },
      hero: {
        eyebrow: 'Program',
        descriptor: 'Mindset & Personal Transformation Program',
        supporting: 'Available in recorded and live workshop formats.',
        badges: ['Recorded Program · Approx. 8.5 Hours', 'Live Workshop'],
      },
      overview: {
        heading: 'About Mind Magic',
        body: 'Mind Magic is available as both a recorded learning experience and a live workshop, giving participants different ways to engage with the program.',
      },
      formats: {
        heading: 'Two Formats',
        recorded: {
          title: 'Recorded Program',
          points: ['Approx. 8.5 hours', 'Pre-course homework required'],
        },
        live: {
          title: 'Live Workshop',
          points: ['Delivered as a live workshop experience'],
        },
      },
      journey: {
        heading: 'How the Recorded Journey Works',
        steps: ['Prepare', 'Complete Pre-Course Homework', 'Continue to Program Access'],
      },
      next: {
        heading: 'Continue Your Journey',
        body: 'Completing Mind Magic can form part of the eligibility for selected future programs.',
      },
      cta: {
        enquire: 'Enquire About Mind Magic',
        allPrograms: 'View All Programs',
      },
    },
  },
}
