import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { EXTERNAL_LINK_PROPS } from '@/data/socialLinks'

type ButtonLinkVariant = 'primary' | 'outlineOnDark' | 'outlineOnLight'
type ButtonLinkSize = 'sm' | 'md'

type SharedProps = {
  children: ReactNode
  variant?: ButtonLinkVariant
  size?: ButtonLinkSize
  className?: string
}

const BASE =
  'inline-flex items-center justify-center rounded-sm text-center font-semibold uppercase whitespace-nowrap transition-colors duration-200'

const VARIANTS: Record<ButtonLinkVariant, string> = {
  primary: 'bg-accent text-primary-dark hover:bg-accent-light',
  outlineOnDark:
    'border border-white/30 text-content-inverse hover:border-accent hover:text-accent-light',
  outlineOnLight: 'border border-primary/20 text-primary hover:border-accent-dark hover:text-accent-dark',
}

const SIZES: Record<ButtonLinkSize, string> = {
  sm: 'px-5 py-2.5 text-[0.7rem] tracking-[0.16em]',
  md: 'px-7 py-3.5 text-xs tracking-[0.16em]',
}

function buttonClasses({
  variant = 'primary',
  size = 'md',
  className = '',
}: Pick<SharedProps, 'variant' | 'size' | 'className'>) {
  return [BASE, VARIANTS[variant], SIZES[size], className].filter(Boolean).join(' ')
}

type ButtonLinkProps = SharedProps & {
  to: string
  onClick?: () => void
}

/** Call to action pointing at an internal route. */
export default function ButtonLink({
  to,
  children,
  variant,
  size,
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link to={to} onClick={onClick} className={buttonClasses({ variant, size, className })}>
      {children}
    </Link>
  )
}

type ExternalButtonLinkProps = SharedProps & {
  href: string
  /** Should state where the link goes and that it opens a new tab. */
  ariaLabel: string
}

/** Call to action pointing off-site; always opens in a new tab. */
export function ExternalButtonLink({
  href,
  children,
  ariaLabel,
  variant,
  size,
  className,
}: ExternalButtonLinkProps) {
  return (
    <a
      href={href}
      {...EXTERNAL_LINK_PROPS}
      aria-label={ariaLabel}
      className={buttonClasses({ variant, size, className })}
    >
      {children}
    </a>
  )
}
