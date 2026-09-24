import charanaAbout from '@/assets/images/charana/charana-about.webp'
import charanaHero from '@/assets/images/charana/charana-hero.webp'
import lakmaliSiriwardhana from '@/assets/images/contact/lakmali-siriwardhana.jpg'
import morningGymPhoto from '@/assets/images/programs/morning-gym/morning-gym-hero.webp'
import experienceYour100Logo from '@/assets/logos/optimized/experience-your-100.webp'
import mindMagicLogo from '@/assets/logos/optimized/mind-magic.webp'
import morningGymLogo from '@/assets/logos/optimized/morning-gym.webp'
import optimisticMagnetLogo from '@/assets/logos/optimized/optimistic-magnet.webp'
import paradigmShiftingForAbundanceLogo from '@/assets/logos/optimized/paradigm-shifting-for-abundance.webp'
import realityRoomLogo from '@/assets/logos/optimized/reality-room.webp'
import socialMediaBusinessDevelopmentLogo from '@/assets/logos/optimized/social-media-business-development.webp'
import unstoppableLogo from '@/assets/logos/optimized/unstoppable.webp'

export type ImageAsset = {
  src: string
  alt: string
  /** Intrinsic pixel size, so the browser can reserve the aspect ratio. */
  width: number
  height: number
}

export type ManagedImage = ImageAsset | null

/**
 * Approved photography is wired up here and nowhere else.
 *
 * To publish an image, drop the file into `src/assets/images/charana/`, import
 * it at the top of this file and assign it.
 *
 * While an entry is `null` the matching section renders a clearly labelled
 * placeholder instead, so the layout is never broken and no stand-in face is
 * ever shown.
 *
 * Live portraits are same-size WebP files. The PNG originals stay in
 * `src/assets/images/charana/` as source assets.
 */
export const PORTRAIT_HERO: ImageAsset = {
  src: charanaHero,
  alt: 'Charana Gunawardhana speaking on stage to an audience',
  width: 1478,
  height: 963,
}

export const PORTRAIT_ABOUT: ImageAsset = {
  src: charanaAbout,
  alt: 'Charana Gunawardhana seated in a beige suit',
  width: 1024,
  height: 1536,
}

/**
 * The one approved Morning Gym photograph. The published file is a same-size
 * WebP derived from `morning-gym-hero.jpg`, which is left untouched as source.
 */
export const MORNING_GYM_PHOTO: ImageAsset = {
  src: morningGymPhoto,
  alt: 'Charana Gunawardhana hosting a live Morning Gym session, with participants joining across two screens',
  width: 1450,
  height: 1085,
}

/**
 * Official program marks. Every current source is an opaque RGB square, so
 * placements treat them as small inset tiles rather than free-floating marks.
 * Alt text is empty: every placement names the programme in adjacent text.
 * Published files are 400px WebP derivatives. Source files stay untouched.
 */
function programLogo(src: string): ImageAsset {
  return { src, alt: '', width: 400, height: 400 }
}

export const MORNING_GYM_LOGO = programLogo(morningGymLogo)
export const MIND_MAGIC_LOGO = programLogo(mindMagicLogo)
export const OPTIMISTIC_MAGNET_LOGO = programLogo(optimisticMagnetLogo)
export const SOCIAL_MEDIA_BUSINESS_DEVELOPMENT_LOGO = programLogo(socialMediaBusinessDevelopmentLogo)
export const UNSTOPPABLE_LOGO = programLogo(unstoppableLogo)
export const EXPERIENCE_YOUR_100_LOGO = programLogo(experienceYour100Logo)
export const REALITY_ROOM_LOGO = programLogo(realityRoomLogo)
export const PARADIGM_SHIFTING_FOR_ABUNDANCE_LOGO = programLogo(paradigmShiftingForAbundanceLogo)

export const PROGRAM_LOGOS = {
  'morning-gym': MORNING_GYM_LOGO,
  'mind-magic': MIND_MAGIC_LOGO,
  'optimistic-magnet': OPTIMISTIC_MAGNET_LOGO,
  'social-media-business-development': SOCIAL_MEDIA_BUSINESS_DEVELOPMENT_LOGO,
  unstoppable: UNSTOPPABLE_LOGO,
  'experience-your-100': EXPERIENCE_YOUR_100_LOGO,
  'reality-room': REALITY_ROOM_LOGO,
  'paradigm-shifting-for-abundance': PARADIGM_SHIFTING_FOR_ABUNDANCE_LOGO,
} as const

/**
 * Approved Lakmali Siriwardhana portrait for the Mind Magic enquiry card.
 * Official name is the alt text in every language.
 */
export const LAKMALI_SIRIWARDHANA_PORTRAIT: ImageAsset = {
  src: lakmaliSiriwardhana,
  alt: 'Lakmali Siriwardhana',
  width: 1303,
  height: 1207,
}
