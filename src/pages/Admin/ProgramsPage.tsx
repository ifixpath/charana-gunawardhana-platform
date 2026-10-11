import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAdminPrograms } from '@/admin/useAdminPrograms'
import type { AdminProgramRecord } from '@/admin/adminPrograms'
import type { ProgramFormatId, ProgramStatus } from '@/lib/supabase'
import { usePageMeta } from '@/i18n/usePageMeta'
import { adminInputClass, adminPrimaryButtonClass, adminSecondaryButtonClass } from '@/pages/Admin/adminStyles'
import { ADMIN_ROUTES, adminProgramPath } from '@/routes/paths'

const FORMAT_OPTIONS: { value: '' | ProgramFormatId | 'none'; label: string }[] = [
  { value: '', label: 'All types' },
  { value: 'program', label: 'Program' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'zoomClass', label: 'Zoom class' },
  { value: 'longTerm', label: 'Long term' },
  { value: 'recordedCourse', label: 'Recorded course' },
  { value: 'none', label: 'Unspecified' },
]

const FORMAT_LABELS: Record<ProgramFormatId, string> = {
  program: 'Program',
  workshop: 'Workshop',
  zoomClass: 'Zoom class',
  longTerm: 'Long term',
  recordedCourse: 'Recorded course',
}

export default function ProgramsPage() {
  usePageMeta({
    title: 'Programs — Charana Gunawardhana',
    description: 'Administrator program list.',
    robots: 'noindex',
  })

  const { load, retry } = useAdminPrograms()
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<'' | ProgramStatus>('')
  const [formatId, setFormatId] = useState<'' | ProgramFormatId | 'none'>('')

  const programs = load.status === 'ready' ? load.programs : null
  const visible = useMemo(
    () => (programs ? programs.filter((program) => matchesFilters(program, query, status, formatId)) : []),
    [formatId, programs, query, status],
  )

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-content max-w-2xl text-sm leading-relaxed">
          Published programs this account can read. Saving and offer editing stay off. Draft rows
          remain hidden by the current database policy, so the Draft filter only applies to rows
          returned here.
        </p>
        <Link to={ADMIN_ROUTES.programNew} className={adminSecondaryButtonClass}>
          Open program form
        </Link>
      </div>

      <form
        className="mt-6 grid gap-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="text-primary block text-sm font-medium">
          Search
          <input
            className={adminInputClass}
            type="search"
            value={query}
            placeholder="Search by name or slug"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label className="text-primary block text-sm font-medium">
          Status
          <select
            className={adminInputClass}
            value={status}
            onChange={(event) => setStatus(event.target.value as '' | ProgramStatus)}
          >
            <option value="">All statuses</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
        <label className="text-primary block text-sm font-medium">
          Program type
          <select
            className={adminInputClass}
            value={formatId}
            onChange={(event) => setFormatId(event.target.value as '' | ProgramFormatId | 'none')}
          >
            {FORMAT_OPTIONS.map((option) => (
              <option key={option.value || 'all'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </form>

      {load.status === 'loading' ? (
        <p className="text-content-muted mt-6 text-sm" role="status">
          Loading programs.
        </p>
      ) : null}

      {load.status === 'unauthorized' ? (
        <p className="text-content mt-6 text-sm leading-relaxed" role="alert">
          Your session was not accepted. Programs were not loaded.
        </p>
      ) : null}

      {load.status === 'forbidden' ? (
        <p className="text-content mt-6 text-sm leading-relaxed" role="alert">
          This account cannot view programs.
        </p>
      ) : null}

      {load.status === 'error' ? (
        <div className="mt-6">
          <p className="text-content text-sm leading-relaxed" role="alert">
            Programs could not be loaded. This is not an empty program list.
          </p>
          <button type="button" className={`${adminPrimaryButtonClass} mt-4`} onClick={retry}>
            Try again
          </button>
        </div>
      ) : null}

      {load.status === 'ready' && programs !== null && programs.length === 0 ? (
        <div className="border-line bg-surface mt-6 rounded-sm border border-dashed px-5 py-12 text-center">
          <h2 className="text-primary font-serif text-2xl tracking-tight">No programs</h2>
          <p className="text-content-muted mx-auto mt-3 max-w-md text-sm leading-relaxed">
            The program list returned no rows.
          </p>
        </div>
      ) : null}

      {load.status === 'ready' && programs !== null && programs.length > 0 && visible.length === 0 ? (
        <p className="text-content-muted mt-6 text-sm" role="status">
          No programs match this search or filter.
        </p>
      ) : null}

      {load.status === 'ready' && visible.length > 0 ? (
        <ul className="border-line bg-surface mt-6 divide-y divide-[var(--color-line)] rounded-sm border">
          {visible.map((program) => (
            <li key={program.id}>
              <Link
                to={adminProgramPath(program.id)}
                className="hover:bg-surface-muted flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="text-primary block text-base">{program.displayName}</span>
                  <span className="text-content-muted mt-1 block text-sm">{program.slug}</span>
                </span>
                <span className="text-content-muted flex flex-wrap gap-x-4 gap-y-1 text-xs tracking-[0.14em] uppercase">
                  <span>{program.status}</span>
                  <span>{program.formatId ? FORMAT_LABELS[program.formatId] : 'Unspecified'}</span>
                  <span className="normal-case tracking-normal">{formatUpdated(program.updatedAt)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function matchesFilters(
  program: AdminProgramRecord,
  query: string,
  status: '' | ProgramStatus,
  formatId: '' | ProgramFormatId | 'none',
) {
  const needle = query.trim().toLowerCase()
  const haystack = `${program.displayName} ${program.slug}`.toLowerCase()
  const matchesQuery = needle.length === 0 || haystack.includes(needle)
  const matchesStatus = status === '' || program.status === status
  const matchesFormat =
    formatId === '' ||
    (formatId === 'none' ? program.formatId === null : program.formatId === formatId)

  return matchesQuery && matchesStatus && matchesFormat
}

function formatUpdated(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}
