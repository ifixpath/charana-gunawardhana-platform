import type { ReactNode } from 'react'

import type { SocialNetwork } from '@/data/socialLinks'

type SocialIconProps = {
  network: SocialNetwork
  className?: string
}

/**
 * Simplified line-art marks drawn inline, so four small icons cost no
 * dependency. Stroke weight is shared for a consistent, quiet appearance.
 */
const GLYPHS: Record<SocialNetwork, ReactNode> = {
  facebook: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M13.8 7.8h-.9a2.1 2.1 0 0 0-2.1 2.1v9.3" />
      <path d="M9.6 12.6h4.2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <path d="M16.7 7.4h.01" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.8 9.4 15.8 12l-5 2.6Z" />
    </>
  ),
  tiktok: (
    <>
      <circle cx="10.2" cy="15.8" r="3.3" />
      <path d="M13.5 15.8V4.5" />
      <path d="M13.5 4.5c.6 2.7 2.6 4.5 5.2 4.8" />
    </>
  ),
}

export default function SocialIcon({ network, className = 'h-[18px] w-[18px]' }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {GLYPHS[network]}
    </svg>
  )
}
