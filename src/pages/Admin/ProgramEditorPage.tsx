import { useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'

import type { AdminProgramDetail, AdminProgramTranslation } from '@/admin/adminProgramDetail'
import { useAdminProgram } from '@/admin/useAdminProgram'
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
  const requestedId = mode === 'existing' ? (params.programId ?? '') : ''

  if (mode === 'existing') {
    return <ExistingProgramEditor programId={requestedId} />
  }

  return <NewProgramEditor />
}

function ExistingProgramEditor({ programId }: { programId: string }) {
  const { load, retry } = useAdminProgram(programId)
  const title =
    load.status === 'ready' ? `${load.program.officialName} — Charana Gunawardhana` : 'Program — Charana Gunawardhana'

  usePageMeta({
    title,
    description: 'Program editor. Changes are not saved.',
    robots: 'noindex',
  })

  return (
    <div className="mx-auto max-w-5xl">
      <EditorHeading
        message={
          load.status === 'ready'
            ? 'This program is loaded from the database. Saving, publishing, uploads, and offers stay off.'
            : 'The program record is not shown until it loads.'
        }
        requestedId={load.status === 'ready' ? null : programId}
      />

      {load.status === 'loading' ? (
        <p className="text-content-muted mt-6 text-sm" role="status">
          Loading program.
        </p>
      ) : null}

      {load.status === 'unauthorized' ? (
        <p className="text-content mt-6 text-sm leading-relaxed" role="alert">
          Your session was not accepted. This program was not loaded.
        </p>
      ) : null}

      {load.status === 'forbidden' ? (
        <p className="text-content mt-6 text-sm leading-relaxed" role="alert">
          This account cannot view this program.
        </p>
      ) : null}

      {load.status === 'not-found' ? (
        <p className="text-content mt-6 text-sm leading-relaxed" role="alert">
          This program was not found.
        </p>
      ) : null}

      {load.status === 'error' ? (
        <div className="mt-6">
          <p className="text-content text-sm leading-relaxed" role="alert">
            This program could not be loaded. The fields are not shown.
          </p>
          <button type="button" className={`${adminPrimaryButtonClass} mt-4`} onClick={retry}>
            Try again
          </button>
        </div>
      ) : null}

      {load.status === 'ready' ? <LoadedProgramEditor program={load.program} /> : null}
    </div>
  )
}

function LoadedProgramEditor({ program }: { program: AdminProgramDetail }) {
  const [marketingLocale, setMarketingLocale] = useState<Locale>('en')
  const [offerLocale, setOfferLocale] = useState<Locale>('en')
  const translation = program.translations.find((entry) => entry.locale === marketingLocale) ?? null
  const storedLanguages = program.translations.map((entry) => LOCALE_LABELS[entry.locale].name)

  return (
    <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
      <p className="border-accent/40 bg-accent/10 text-primary mt-6 rounded-sm border px-4 py-3 text-sm" role="status">
        Save is disabled.
      </p>

      <div className="mt-6 space-y-6">
        <EditorSection
          title="Marketing details"
          description="Official name, public path, and the translations stored for this program. Each language stays separate."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <ReadOnlyField label="Official name" value={program.officialName} />
            <ReadOnlyField label="Slug" value={program.slug} />
            <ReadOnlyField label="Public path" value={program.path} />
            <ReadOnlyField label="Sort order" value={String(program.sortOrder)} />
            <label className="text-primary block text-sm font-medium">
              Program type
              <select className={adminInputClass} value={program.formatId ?? ''} disabled>
                <option value="">Unspecified</option>
                <option value="program">Program</option>
                <option value="workshop">Workshop</option>
                <option value="zoomClass">Zoom class</option>
                <option value="longTerm">Long term</option>
                <option value="recordedCourse">Recorded course</option>
              </select>
            </label>
          </div>
          <LocaleSwitch label="Marketing language" locale={marketingLocale} onLocaleChange={setMarketingLocale} />
          <p className="text-content-muted mt-4 text-sm" role="status">
            {storedLanguages.length > 0
              ? `Stored languages: ${storedLanguages.join(', ')}.`
              : 'No translations are stored.'}
            {translation ? '' : ` No ${LOCALE_LABELS[marketingLocale].name} translation is stored.`}
          </p>
          <TranslationFields translation={translation} localeName={LOCALE_LABELS[marketingLocale].name} />
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
          description="A published program can be shown on the public site. This status is loaded and cannot be changed here."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-primary block max-w-xs text-sm font-medium">
              Program status
              <select className={adminInputClass} value={program.status} disabled>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </label>
            <ReadOnlyField label="Updated" value={formatUpdated(program.updatedAt)} />
          </div>
        </EditorSection>
      </div>

      <SaveBar />
    </form>
  )
}

function NewProgramEditor() {
  const [marketingLocale, setMarketingLocale] = useState<Locale>('en')
  const [offerLocale, setOfferLocale] = useState<Locale>('en')

  usePageMeta({
    title: 'New program — Charana Gunawardhana',
    description: 'Program editor. Changes are not saved.',
    robots: 'noindex',
  })

  return (
    <form className="mx-auto max-w-5xl" autoComplete="off" onSubmit={(event) => event.preventDefault()}>
      <EditorHeading
        message="This form is blank. It is not a program record, and nothing is written when you leave."
        requestedId={null}
      />
      <p className="border-accent/40 bg-accent/10 text-primary mt-6 rounded-sm border px-4 py-3 text-sm" role="status">
        {BACKEND_PENDING}. Save is disabled.
      </p>
      <div className="mt-6 space-y-6">
        <EditorSection
          title="Marketing details"
          description="Official name, public path, and translated introduction. Each language stays separate."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <EmptyField label="Official name" />
            <EmptyField label="Slug" />
            <EmptyField label="Public path" />
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
          <LocaleSwitch label="Marketing language" locale={marketingLocale} onLocaleChange={setMarketingLocale} />
          <div className="mt-4 grid gap-4">
            <EmptyField label={`Meta title (${LOCALE_LABELS[marketingLocale].name})`} />
            <EmptyField label={`Hero descriptor (${LOCALE_LABELS[marketingLocale].name})`} />
            <EmptyField label={`About heading (${LOCALE_LABELS[marketingLocale].name})`} />
            <EmptyTextArea label={`About (${LOCALE_LABELS[marketingLocale].name})`} />
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
      <SaveBar />
    </form>
  )
}

function TranslationFields({
  translation,
  localeName,
}: {
  translation: AdminProgramTranslation | null
  localeName: string
}) {
  const value = (field: keyof Omit<AdminProgramTranslation, 'locale'>) => translation?.[field] ?? null

  return (
    <div className="mt-4 grid gap-4">
      <ReadOnlyField label={`Meta title (${localeName})`} value={value('metaTitle')} />
      <ReadOnlyField label={`Meta description (${localeName})`} value={value('metaDescription')} multiline />
      <ReadOnlyField label={`Hero eyebrow (${localeName})`} value={value('heroEyebrow')} />
      <ReadOnlyField label={`Hero descriptor (${localeName})`} value={value('heroDescriptor')} />
      <ReadOnlyField label={`About heading (${localeName})`} value={value('aboutHeading')} />
      <ReadOnlyField label={`About (${localeName})`} value={value('aboutBody')} multiline />
      <ReadOnlyField label={`Format heading (${localeName})`} value={value('formatHeading')} />
      <ReadOnlyField label={`Format value (${localeName})`} value={value('formatValue')} />
      <ReadOnlyField label={`Enquire label (${localeName})`} value={value('ctaEnquire')} />
      <ReadOnlyField label={`All programs label (${localeName})`} value={value('ctaAllPrograms')} />
    </div>
  )
}

function EditorHeading({ message, requestedId }: { message: string; requestedId: string | null }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-content max-w-2xl text-sm leading-relaxed">{message}</p>
        {requestedId ? (
          <p className="text-content-muted mt-2 text-sm break-all">Requested identifier: {requestedId}</p>
        ) : null}
      </div>
      <Link to={ADMIN_ROUTES.programs} className="text-accent-dark text-sm underline underline-offset-4">
        Back to programs
      </Link>
    </div>
  )
}

function SaveBar() {
  return (
    <div className="border-line mt-6 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-content-muted text-sm">{BACKEND_PENDING}</p>
      <button type="button" className={adminPrimaryButtonClass} disabled>
        Save program
      </button>
    </div>
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

function ReadOnlyField({
  label,
  value,
  multiline = false,
}: {
  label: string
  value: string | null
  multiline?: boolean
}) {
  const shown = value ?? ''
  const placeholder = value === null ? 'Not stored' : undefined

  return (
    <label className="text-primary block text-sm font-medium">
      {label}
      {multiline ? (
        <textarea className={`${adminInputClass} min-h-28`} value={shown} placeholder={placeholder} disabled readOnly />
      ) : (
        <input className={adminInputClass} value={shown} placeholder={placeholder} disabled readOnly />
      )}
    </label>
  )
}

function EmptyField({ label }: { label: string }) {
  return (
    <label className="text-primary block text-sm font-medium">
      {label}
      <input className={adminInputClass} defaultValue="" disabled placeholder="Not loaded" />
    </label>
  )
}

function EmptyTextArea({ label }: { label: string }) {
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
      <button
        type="button"
        className="border-line text-content-muted mt-4 rounded-sm border px-3 py-2 text-xs font-semibold tracking-[0.14em] uppercase"
        disabled
      >
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
        <input
          className={`${adminInputClass} file:mr-3`}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
          disabled
        />
      </label>
      <label className="text-primary mt-4 block text-sm font-medium">
        Alt text
        <input className={adminInputClass} defaultValue="" disabled placeholder="Not loaded" />
      </label>
    </div>
  )
}

function formatUpdated(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}
