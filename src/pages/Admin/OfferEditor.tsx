import type { ReactNode } from 'react'

import { LOCALES, LOCALE_LABELS, type Locale } from '@/i18n/config'
import { adminInputClass } from '@/pages/Admin/adminStyles'

const OFFER_TYPES = [
  ['recorded', 'Recorded'],
  ['live_training', 'Live training'],
  ['coaching', 'Coaching'],
  ['multi_session', 'Multi-session'],
  ['retreat', 'Retreat'],
] as const

const DELIVERY_MODES = [
  ['recorded', 'Recorded'],
  ['zoom', 'Zoom'],
  ['physical', 'Physical'],
  ['hybrid', 'Hybrid'],
] as const

type OfferEditorProps = {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export default function OfferEditor({ locale, onLocaleChange }: OfferEditorProps) {
  return (
    <div className="space-y-6">
      <LocaleSwitch locale={locale} onLocaleChange={onLocaleChange} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={`Title (${LOCALE_LABELS[locale].name})`}>
          <input className={adminInputClass} defaultValue="" disabled placeholder="Not loaded" />
        </Field>
        <Field label="Offer type">
          <Select options={OFFER_TYPES} />
        </Field>
        <Field label="Delivery mode">
          <Select options={DELIVERY_MODES} />
        </Field>
        <Field label="Currency">
          <input className={adminInputClass} defaultValue="" disabled placeholder="Not loaded" />
        </Field>
        <Field label="Regular price">
          <input className={adminInputClass} inputMode="numeric" defaultValue="" disabled placeholder="Not loaded" />
        </Field>
        <Field label="Sale price">
          <input className={adminInputClass} inputMode="numeric" defaultValue="" disabled placeholder="Not loaded" />
        </Field>
        <Field label="Duration">
          <input className={adminInputClass} defaultValue="" disabled placeholder="Not loaded" />
        </Field>
        <Field label={`Duration label (${LOCALE_LABELS[locale].name})`}>
          <input className={adminInputClass} defaultValue="" disabled placeholder="Not loaded" />
        </Field>
      </div>
      <Field label={`Description (${LOCALE_LABELS[locale].name})`}>
        <textarea className={`${adminInputClass} min-h-28`} defaultValue="" disabled placeholder="Not loaded" />
      </Field>
      <Field label={`Schedule (${LOCALE_LABELS[locale].name})`}>
        <textarea className={`${adminInputClass} min-h-24`} defaultValue="" disabled placeholder="Not loaded" />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Starts">
          <input className={adminInputClass} type="datetime-local" defaultValue="" disabled />
        </Field>
        <Field label="Ends">
          <input className={adminInputClass} type="datetime-local" defaultValue="" disabled />
        </Field>
        <Field label="Timezone">
          <input className={adminInputClass} defaultValue="" disabled placeholder="Not loaded" />
        </Field>
        <Field label="Sessions">
          <input className={adminInputClass} inputMode="numeric" defaultValue="" disabled placeholder="Not loaded" />
        </Field>
        <Field label="Offer status">
          <select className={adminInputClass} defaultValue="" disabled>
            <option value="">Not loaded</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </Field>
        <label className="border-line flex items-start gap-3 rounded-sm border px-3 py-3 sm:mt-7">
          <input type="checkbox" className="mt-1" defaultChecked={false} disabled />
          <span>
            <span className="text-primary block text-sm font-medium">Purchasable</span>
            <span className="text-content-muted mt-1 block text-sm leading-relaxed">
              Purchasing stays off until checkout is connected.
            </span>
          </span>
        </label>
      </div>
    </div>
  )
}

function LocaleSwitch({
  locale,
  onLocaleChange,
}: {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Offer language">
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
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="text-primary block text-sm font-medium">
      {label}
      {children}
    </label>
  )
}

function Select({ options }: { options: readonly (readonly [string, string])[] }) {
  return (
    <select className={adminInputClass} defaultValue="" disabled>
      <option value="">Not loaded</option>
      {options.map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
