import { useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'

import { LOCALES, LOCALE_LABELS, type Locale } from '@/i18n/config'
import { usePageMeta } from '@/i18n/usePageMeta'
import OfferEditor from '@/pages/Admin/OfferEditor'
import { BACKEND_PENDING, adminInputClass, adminPrimaryButtonClass } from '@/pages/Admin/adminStyles'
import { ADMIN_ROUTES } from '@/routes/paths'

type ProgramEditorPageProps = {
  mode: 'new' | 'existing'
}

export default function ProgramEditorPage({ mode }: ProgramEditorPageProps) {
  const params = useParams()
  const requestedId = mode === 'existing' ? (params.programId ?? '') : null
  const [marketingLocale, setMarketingLocale] = useState<Locale>('en')
  const [offerLocale, setOfferLocale] = useState<Locale>('en')

  usePageMeta({
    title:
      mode === 'new'
        ? 'New program — Charana Gunawardhana'
        : 'Program — Charana Gunawardhana',
    description: 'Program editor. Changes are not saved.',
    robots: 'noindex',
  })

  return (
    <form className="mx-auto max-w-5xl" autoComplete="off" onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-content max-w-2xl text-sm leading-relaxed">
            {mode === 'new'
              ? 'This form is blank. It is not a program record, and nothing is written when you leave.'
              : 'This program could not be loaded. The fields below are blank and are not a saved record.'}
          </p>
          {requestedId ? (
            <p className="text-content-muted mt-2 text-sm break-all">Requested identifier: {requestedId}</p>
          ) : null}
        </div>
        <Link
          to={ADMIN_ROUTES.programs}
          className="text-accent-dark text-sm underline underline-offset-4"
        >
          Back to programs
        </Link>
      </div>

      <p className="border-accent/40 bg-accent/10 text-primary mt-6 rounded-sm border px-4 py-3 text-sm" role="status">
        {BACKEND_PENDING}. Save is disabled.
      </p>

      <div className="mt-6 space-y-6">
        <EditorSection
          title="Marketing details"
          description="Official name, public path, and translated introduction. Each language stays separate."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Official name" />
            <TextField label="Slug" />
            <TextField label="Public path" />
            <label className="text-primary block text-sm font-medium">
              Program type
              <select className={adminInputClass} defaultValue="" disabled>
                <option value="">Not loaded</option>
                <option value="program">Program</option>
                <option value="workshop">Workshop</option>
                <option value="zoomClass">Zoom class</option>
                <option value="longTerm">Long term</option>
                <option value="recordedCourse">Recorded course</option>
              </select>
            </label>
          </div>
          <LocaleSwitch
            label="Marketing language"
            locale={marketingLocale}
            onLocaleChange={setMarketingLocale}
          />
          <div className="mt-4 grid gap-4">
            <TextField label={`Meta title (${LOCALE_LABELS[marketingLocale].name})`} />
            <TextField label={`Hero descriptor (${LOCALE_LABELS[marketingLocale].name})`} />
            <TextField label={`About heading (${LOCALE_LABELS[marketingLocale].name})`} />
            <TextAreaField label={`About (${LOCALE_LABELS[marketingLocale].name})`} />
          </div>
        </EditorSection>

        <EditorSection
          title="Offers and pricing"
          description="Regular and sale prices, delivery, duration, schedule, and publication for one offer. No offer is loaded."
        >
          <OfferEditor locale={offerLocale} onLocaleChange={setOfferLocale} />
        </EditorSection>

        <EditorSection
          title="Benefits and bonuses"
          description="Each line is translated on its own. No benefit or bonus is loaded."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <EmptyList title="Benefits" action="Add benefit" />
            <EmptyList title="Bonuses" action="Add bonus" />
          </div>
        </EditorSection>

        <EditorSection
          title="Images"
          description="Logo, hero, and gallery images use the program slug. No files are loaded or uploaded."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <ImageSlot role="Logo" />
            <ImageSlot role="Hero" />
            <ImageSlot role="Gallery" />
          </div>
        </EditorSection>

        <EditorSection
          title="Publication settings"
          description="A published program can be shown on the public site. This status is not loaded."
        >
          <label className="text-primary block max-w-xs text-sm font-medium">
            Program status
            <select className={adminInputClass} defaultValue="" disabled>
              <option value="">Not loaded</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
        </EditorSection>
      </div>

      <div className="border-line mt-6 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-content-muted text-sm">{BACKEND_PENDING}</p>
        <button type="button" className={adminPrimaryButtonClass} disabled>
          Save program
        </button>
      </div>
    </form>
  )
}

function EditorSection({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="border-line bg-surface rounded-sm border p-5 sm:p-6">
      <h2 className="text-primary font-serif text-2xl tracking-tight">{title}</h2>
      <p className="text-content-muted mt-2 max-w-2xl text-sm leading-relaxed">{description}</p>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function TextField({ label }: { label: string }) {
  return (
    <label className="text-primary block text-sm font-medium">
      {label}
      <input className={adminInputClass} defaultValue="" disabled placeholder="Not loaded" />
    </label>
  )
}

function TextAreaField({ label }: { label: string }) {
  return (
    <label className="text-primary block text-sm font-medium">
      {label}
      <textarea className={`${adminInputClass} min-h-28`} defaultValue="" disabled placeholder="Not loaded" />
    </label>
  )
}

function LocaleSwitch({
  label,
  locale,
  onLocaleChange,
}: {
  label: string
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}) {
  return (
    <div className="mt-6">
      <p className="text-content-muted text-xs font-semibold tracking-[0.14em] uppercase">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={label}>
        {LOCALES.map((entry) => {
          const selected = entry === locale
          return (
            <button
              key={entry}
              type="button"
              aria-pressed={selected}
              className={
                selected
                  ? 'bg-primary text-content-inverse rounded-sm px-3 py-2 text-xs font-semibold tracking-[0.14em] uppercase'
                  : 'border-line text-primary rounded-sm border px-3 py-2 text-xs font-semibold tracking-[0.14em] uppercase'
              }
              onClick={() => onLocaleChange(entry)}
            >
              {LOCALE_LABELS[entry].short}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function EmptyList({ title, action }: { title: string; action: string }) {
  return (
    <div className="border-line rounded-sm border border-dashed p-4">
      <h3 className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">{title}</h3>
      <p className="text-content-muted mt-3 text-sm">None loaded.</p>
      <button type="button" className="border-line text-content-muted mt-4 rounded-sm border px-3 py-2 text-xs font-semibold tracking-[0.14em] uppercase" disabled>
        {action}
      </button>
    </div>
  )
}

function ImageSlot({ role }: { role: string }) {
  return (
    <div className="border-line rounded-sm border border-dashed p-4">
      <h3 className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">{role}</h3>
      <div className="bg-surface-muted text-content-muted mt-3 flex h-28 items-center justify-center rounded-sm text-sm">
        No image
      </div>
      <label className="text-primary mt-4 block text-sm font-medium">
        File
        <input className={`${adminInputClass} file:mr-3`} type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" disabled />
      </label>
      <label className="text-primary mt-4 block text-sm font-medium">
        Alt text
        <input className={adminInputClass} defaultValue="" disabled placeholder="Not loaded" />
      </label>
    </div>
  )
}
