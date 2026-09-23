import { useEffect, useState } from 'react'

/**
 * Tracks whether the window has scrolled past `threshold` pixels.
 * Used by the header to swap between its transparent and solid states.
 */
export function useIsScrolled(threshold = 16) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })

    return () => {
      window.removeEventListener('scroll', update)
    }
  }, [threshold])

  return isScrolled
}
