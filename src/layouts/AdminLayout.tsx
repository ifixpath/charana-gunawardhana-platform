import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import { useAdminSession } from '@/admin/adminSession'
import { useAuth } from '@/auth/useAuth'
import { ADMIN_ROUTES, ROUTES } from '@/routes/paths'

const navItems = [
  { to: ADMIN_ROUTES.home, label: 'Overview', end: true },
  { to: ADMIN_ROUTES.programs, label: 'Programs', end: false },
] as const

export default function AdminLayout() {
  const location = useLocation()
  const { email } = useAdminSession()
  const auth = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const [signOutMessage, setSignOutMessage] = useState<string | null>(null)
  const menuTitleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    dialogRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const title = titleForPath(location.pathname)

  return (
    <div className="bg-surface-muted min-h-dvh lg:grid lg:grid-cols-[16rem_minmax(0,1fr)]">
      <aside className="bg-primary text-content-inverse hidden lg:flex lg:min-h-dvh lg:flex-col">
        <AdminBrand />
        <AdminNav onNavigate={() => setMenuOpen(false)} />
      </aside>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-primary-dark/70"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby={menuTitleId}
            className="bg-primary text-content-inverse relative flex h-full w-[min(100%,18rem)] flex-col shadow-xl"
          >
            <AdminBrand titleId={menuTitleId} />
            <AdminNav id="admin-navigation-mobile" onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-col">
        <header className="border-line bg-surface sticky top-0 z-30 flex items-center gap-3 border-b px-4 py-3 sm:px-6">
          <button
            type="button"
            className="border-line text-primary inline-flex h-10 w-10 items-center justify-center rounded-sm border lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? 'admin-navigation-mobile' : undefined}
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon />
          </button>
          <div className="min-w-0 flex-1">
            <p className="text-content-muted text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
              Admin
            </p>
            <h1 className="text-primary truncate font-serif text-xl tracking-tight">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-content-muted hidden max-w-48 truncate text-sm sm:block">
              {email ?? 'Administrator'}
            </p>
            <button
              type="button"
              className="border-primary/20 text-primary rounded-sm border px-3 py-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
              onClick={() => {
                void auth.signOut().then((result) => {
                  if (!result.ok) setSignOutMessage(result.message)
                })
              }}
            >
              Sign out
            </button>
          </div>
        </header>

        {signOutMessage ? (
          <p className="text-content px-4 py-3 text-sm sm:px-6" role="alert">
            {signOutMessage}
          </p>
        ) : null}

        <main id="main" tabIndex={-1} className="flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function AdminBrand({ titleId }: { titleId?: string }) {
  return (
    <div className="border-primary-light border-b px-5 py-5">
      <LinkHome />
      <p id={titleId} className="text-accent-light mt-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
        Admin
      </p>
    </div>
  )
}

function LinkHome() {
  return (
    <Link to={ROUTES.home} className="font-serif text-lg tracking-tight text-white">
      Charana Gunawardhana
    </Link>
  )
}

function AdminNav({ id, onNavigate }: { id?: string; onNavigate?: () => void }) {
  return (
    <nav id={id} className="flex flex-1 flex-col gap-1 px-3 py-4" aria-label="Admin">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            [
              'rounded-sm px-3 py-3 text-sm tracking-wide',
              isActive ? 'bg-primary-light text-accent-light' : 'text-content-inverse-muted hover:bg-primary-light/70 hover:text-white',
            ].join(' ')
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function titleForPath(pathname: string) {
  if (pathname === ADMIN_ROUTES.programNew) return 'New program'
  if (pathname.startsWith(`${ADMIN_ROUTES.programs}/`)) return 'Program'
  if (pathname === ADMIN_ROUTES.programs) return 'Programs'
  if (pathname === ADMIN_ROUTES.home) return 'Overview'
  return 'Admin'
}
