import { PORTRAIT_HERO } from '@/data/images'
import { useTranslations } from '@/i18n/useI18n'

/**
 * Full-bleed hero image layer. No frame, no border, no card — the photograph
 * fills the entire hero.
 *
 * The source frames Charana slightly right of centre against a dark stage, so
 * `object-position` is tuned per breakpoint:
 *
 * - mobile crops horizontally (the frame is far taller than the photo) and
 *   `54%` carries his face to roughly 68% across, clearing the lower-left
 *   corner for the copy while keeping his hair inside the frame;
 * - desktop crops vertically, and `20%` keeps headroom above his hair while
 *   leaving his face and upper body in the open right-hand half.
 */
export default function HeroBackdrop() {
  const { home } = useTranslations()

  return (
    <div className="absolute inset-0 -z-10">
      <img
        src={PORTRAIT_HERO.src}
        alt={home.a11y.heroPortrait}
        width={PORTRAIT_HERO.width}
        height={PORTRAIT_HERO.height}
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover object-[54%_28%] lg:object-[42%_20%]"
      />
    </div>
  )
}
