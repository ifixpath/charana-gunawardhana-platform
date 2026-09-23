import type { ManagedImage } from '@/data/images'

type PortraitAreaProps = {
  image: ManagedImage
  /** Shown in place of the photograph while `image` is null. */
  placeholderLabel?: string
  className?: string
  /** Tailwind aspect ratio utility, e.g. `aspect-4/5`. */
  aspect?: string
  objectPosition?: string
  /** Use on the first portrait in view so the browser fetches it immediately. */
  eager?: boolean
}

/**
 * Renders approved photography when it exists, and a clearly labelled
 * placeholder when it does not. `object-cover` inside a fixed aspect ratio
 * keeps the image from ever distorting.
 */
export default function PortraitArea({
  image,
  placeholderLabel = 'Portrait pending',
  className = '',
  aspect = 'aspect-4/5',
  objectPosition = 'object-center',
  eager = false,
}: PortraitAreaProps) {
  return (
    <div className={`${aspect} relative w-full overflow-hidden rounded-sm ${className}`.trim()}>
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          className={`h-full w-full object-cover ${objectPosition}`}
        />
      ) : (
        <>
          <div className="from-primary-light via-primary to-primary-dark absolute inset-0 bg-gradient-to-b" />
          <p className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="text-accent/70 font-serif text-3xl leading-none">CG</span>
            <span className="text-content-inverse-muted text-[0.6rem] font-medium tracking-[0.3em] uppercase">
              {placeholderLabel}
            </span>
          </p>
        </>
      )}
    </div>
  )
}
