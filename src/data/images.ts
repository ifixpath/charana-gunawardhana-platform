import charanaAbout from '@/assets/images/charana/charana-about.webp'
import charanaHero from '@/assets/images/charana/charana-hero.webp'
import morningGymPhoto from '@/assets/images/programs/morning-gym/morning-gym-hero.webp'
import mindMagicLogo from '@/assets/logos/optimized/mind-magic.webp'
import morningGymLogo from '@/assets/logos/optimized/morning-gym.webp'

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
 * Official Morning Gym wordmark, supplied on its own dark navy field. The alt
 * text is intentionally empty: every placement so far names the programme in
 * adjacent text, so a label here would only be announced twice.
 * The published file is a 400px WebP derived from the approved source at
 * `src/assets/logos/programs/morning-gym-hero.jpg`, which is left untouched.
 */
export const MORNING_GYM_LOGO: ImageAsset = {
  src: morningGymLogo,
  alt: '',
  width: 400,
  height: 400,
}

/**
 * Mind Magic wordmark. Like the Morning Gym one it carries an opaque dark
 * field rather than an alpha channel, so it is always placed as a small
 * self-contained mark rather than sitting directly on a page background.
 * The published file is a 400px WebP derived from the approved source at
 * `src/assets/logos/mind-magic.png`, which is left untouched.
 */
export const MIND_MAGIC_LOGO: ImageAsset = {
  src: mindMagicLogo,
  alt: '',
  width: 400,
  height: 400,
}
