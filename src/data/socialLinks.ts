export type SocialNetwork = 'facebook' | 'instagram' | 'youtube' | 'tiktok'

export type SocialLink = {
  id: SocialNetwork
  category: 'social'
  label: string
  url: string
  /** Accessible name for icon-only links. */
  ariaLabel: string
}

export type CommunityLink = {
  id: 'whatsapp-community'
  category: 'community'
  label: string
  /** Wording for a button or link that joins the community. */
  ctaLabel: string
  url: string
  ariaLabel: string
}

/** Public profiles. Rendered as the footer icon row. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'facebook',
    category: 'social',
    label: 'Facebook',
    url: 'https://web.facebook.com/profile.php?id=61570921796543',
    ariaLabel: 'Charana Gunawardhana on Facebook (opens in a new tab)',
  },
  {
    id: 'instagram',
    category: 'social',
    label: 'Instagram',
    url: 'https://www.instagram.com/mindmagic_mentor/?hl=en',
    ariaLabel: 'Charana Gunawardhana on Instagram (opens in a new tab)',
  },
  {
    id: 'youtube',
    category: 'social',
    label: 'YouTube',
    url: 'https://youtube.com/@charanagunawardhana-p12a?si=_Lv1qE-Blp7jfteI',
    ariaLabel: 'Charana Gunawardhana on YouTube (opens in a new tab)',
  },
  {
    id: 'tiktok',
    category: 'social',
    label: 'TikTok',
    url: 'https://www.tiktok.com/@charanagunawardhana_aum?is_from_webapp=1&sender_device=pc',
    ariaLabel: 'Charana Gunawardhana on TikTok (opens in a new tab)',
  },
]

/**
 * The community invite is intentionally kept out of `SOCIAL_LINKS`: it is a
 * commitment to join a group, not a profile to follow. It is reserved for a
 * single dedicated call to action (Morning Gym / Contact) rather than the
 * generic footer icon row.
 */
export const WHATSAPP_COMMUNITY: CommunityLink = {
  id: 'whatsapp-community',
  category: 'community',
  label: 'Morning Gym Community',
  ctaLabel: 'Join WhatsApp Community',
  url: 'https://chat.whatsapp.com/FAbI577g9FR4ajlpmvZj81',
  ariaLabel: 'Join the Morning Gym community on WhatsApp (opens in a new tab)',
}

/** Spread onto any anchor pointing off-site. */
export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const
