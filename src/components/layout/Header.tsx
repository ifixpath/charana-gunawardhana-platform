import { NavLink } from 'react-router-dom'

import Container from '@/components/layout/Container'
import { MAIN_NAV } from '@/routes/navigation'
import { ROUTES } from '@/routes/paths'

export default function Header() {
  return (
    <header className="border-line bg-surface/95 sticky top-0 z-50 border-b backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <NavLink
          to={ROUTES.home}
          className="text-primary text-base font-semibold tracking-wide sm:text-lg"
        >
          Charana Gunawardhana
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {MAIN_NAV.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === ROUTES.home}
                  className={({ isActive }) =>
                    [
                      'hover:text-accent-dark transition-colors',
                      isActive ? 'text-accent-dark font-medium' : 'text-content-muted',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
