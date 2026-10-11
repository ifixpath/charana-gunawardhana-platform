import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import type { ProgramFormatId, ProgramStatus } from '@/lib/supabase'
import { usePageMeta } from '@/i18n/usePageMeta'
import { BACKEND_PENDING, adminInputClass, adminSecondaryButtonClass } from '@/pages/Admin/adminStyles'
import { ADMIN_ROUTES, adminProgramPath } from '@/routes/paths'

type ProgramRecord = {
  id: string
  officialName: string
  formatId: ProgramFormatId | null
  status: ProgramStatus
}

const FORMAT_OPTIONS: { value: '' | ProgramFormatId | 'none'; label: string }[] = [
  { value: '', label: 'All types' },
  { value: 'program', label: 'Program' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'zoomClass', label: 'Zoom class' },
  { value: 'longTerm', label: 'Long term' },
  { value: 'recordedCourse', label: 'Recorded course' },
  { value: 'none', label: 'Unspecified' },
]

/**
 * Program rows are not loaded. The list stays empty until an admin read API
 * exists, so static site copy is never presented as database records.
 */
const PROGRAM_RECORDS: readonly ProgramRecord[] = []

export default function ProgramsPage() {
  usePageMeta({
    title: 'Programs — Charana Gunawardhana',
    description: 'Administrator program list.',
    robots: 'noindex',
  })

  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<'' | ProgramStatus>('')
  const [formatId, setFormatId] = useState<'' | ProgramFormatId | 'none'>('')

  const visible = useMemo(
    () =>
      PROGRAM_RECORDS.filter((program) => {
        const haystack = program.officialName.toLowerCase()
        const matchesQuery = haystack.includes(query.trim().toLowerCase())
        const matchesStatus = status === '' || program.status === status
        const matchesFormat =
          formatId === '' ||
          (formatId === 'none' ? program.formatId === null : program.formatId === formatId)
        return matchesQuery && matchesStatus && matchesFormat
      }),
    [formatId, query, status],
  )

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-content max-w-2xl text-sm leading-relaxed">
          Published and draft programs will appear here. Nothing in this list is a saved record yet.
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
            placeholder="Search by program name"
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

      <p className="text-content-muted mt-4 text-sm" role="status">
        {BACKEND_PENDING}
      </p>

      {visible.length === 0 ? (
        <div className="border-line bg-surface mt-4 rounded-sm border border-dashed px-5 py-12 text-center">
          <h2 className="text-primary font-serif text-2xl tracking-tight">No programs loaded</h2>
          <p className="text-content-muted mx-auto mt-3 max-w-md text-sm leading-relaxed">
            Search and filters are ready. Program records will show here after the admin service is
            connected. This empty list is not a count of published programs.
          </p>
        </div>
      ) : (
        <ul className="border-line bg-surface mt-4 divide-y divide-[var(--color-line)] rounded-sm border">
          {visible.map((program) => (
            <li key={program.id}>
              <Link
                to={adminProgramPath(program.id)}
                className="hover:bg-surface-muted flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-primary text-base">{program.officialName}</span>
                <span className="text-content-muted text-xs tracking-[0.14em] uppercase">
                  {program.status}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
