/**
 * The contract every locale file fills in.
 *
 * Only shared chrome — navigation, the header call to action and accessible
 * names — is translated at this stage. Page copy is still English-only and
 * lives with its sections.
 *
 * When localised page copy arrives, add a `pages` branch here (for example
 * `pages.home.title` and `pages.home.description` for localised titles and
 * meta descriptions). TypeScript will then flag every locale file that is
 * missing the new keys, so no language can silently fall behind.
 */
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
  programs: {
    mindMagic: MindMagicCopy
  }
}
