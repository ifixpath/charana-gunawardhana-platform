import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ButtonLink, { ExternalButtonLink } from '@/components/ui/ButtonLink'
import {
  THE_SECRET_PART_1_BLOCKS,
  type ResourceBlock,
} from '@/content/resources/mind-magic/the-secret/part-1'
import { MIND_MAGIC_RESOURCES } from '@/data/mindMagicResources'
import { labelClass } from '@/i18n/script'
import { useLocale, useLocalizedPath, useTranslations } from '@/i18n/useI18n'
import { usePageMeta } from '@/i18n/usePageMeta'
import { ROUTES } from '@/routes/paths'

function ResourceBlockView({ block, id }: { block: ResourceBlock; id?: string }) {
  if (block.type === 'heading') {
    return (
      <h2
        id={id}
        className="text-primary font-serif mt-12 text-2xl leading-snug first:mt-0 sm:text-3xl"
      >
        {block.text}
      </h2>
    )
  }

  if (block.type === 'paragraph') {
    return (
      <p className="text-content mt-5 text-base leading-8 whitespace-pre-line sm:text-lg">{block.text}</p>
    )
  }

  if (block.type === 'emphasis') {
    return (
      <p className="border-line text-primary mt-8 border-l pl-5 text-base leading-8 whitespace-pre-line sm:text-lg">
        {block.text}
      </p>
    )
  }

  return (
    <div className="border-line mt-14 border-t pt-10">
      <h2 className="text-primary font-serif text-2xl leading-snug sm:text-3xl">{block.heading}</h2>
      <ol className="mt-6 flex flex-col gap-4">
        {block.items.map((item, index) => (
          <li key={item} className="flex gap-4">
            <span aria-hidden="true" className="text-accent-dark font-serif w-8 shrink-0 text-sm">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-content min-w-0 text-base leading-8 sm:text-lg">{item}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function TheSecretPart1Page() {
  const t = useTranslations()
  const locale = useLocale()
  const localizedPath = useLocalizedPath()
  const copy = t.programs.mindMagic.resources.theSecretPart1

  usePageMeta(copy.meta)

  return (
    <>
      <section className="bg-primary-dark text-content-inverse relative isolate overflow-hidden pt-[calc(var(--header-height)+2.5rem)] pb-12 sm:pt-[calc(var(--header-height)+3rem)] sm:pb-14 lg:pt-[calc(var(--header-height)+4rem)] lg:pb-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(85%_70%_at_50%_0%,var(--color-primary)_0%,var(--color-primary-dark)_70%)]"
        />

        <Container>
          <p className={`flex items-center gap-4 font-medium ${labelClass(copy.eyebrow)}`}>
            <span aria-hidden="true" className="bg-accent h-px w-10 shrink-0" />
            <span className="text-accent-light">{copy.eyebrow}</span>
          </p>

          <p
            className={`text-content-inverse-muted mt-6 font-medium ${labelClass(copy.series, 'text-[0.7rem] tracking-[0.2em] uppercase', 'text-[0.8rem]')}`}
          >
            {copy.series}
          </p>

          <h1 className="font-serif mt-4 max-w-2xl text-3xl leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            ජීවිතයේ මහා රහස
          </h1>

          <p className="text-content-inverse-muted mt-5 max-w-xl text-base leading-relaxed">
            {copy.supporting}
          </p>

          <div className="mt-8">
            <ButtonLink
              to={localizedPath(ROUTES.mindMagic)}
              variant="outlineOnDark"
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.back}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section labelledBy="the-secret-part-1-heading">
        <article lang="si" className="max-w-2xl">
          {locale !== 'si' ? (
            <p className="text-content-muted mb-10 text-sm leading-relaxed">{copy.sinhalaNote}</p>
          ) : null}

          {THE_SECRET_PART_1_BLOCKS.map((block, index) => (
            <ResourceBlockView
              key={`${block.type}-${index}`}
              id={
                block.type === 'heading' &&
                THE_SECRET_PART_1_BLOCKS.findIndex((item) => item.type === 'heading') === index
                  ? 'the-secret-part-1-heading'
                  : undefined
              }
              block={block}
            />
          ))}

          <div className="border-line mt-16 flex flex-col gap-3 border-t pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <ButtonLink
              to={localizedPath(ROUTES.mindMagic)}
              variant="outlineOnLight"
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.back}
            </ButtonLink>
            <ExternalButtonLink
              href={MIND_MAGIC_RESOURCES.videos.theSecret}
              ariaLabel={copy.watchVideoAria}
              className="w-full whitespace-normal text-balance sm:w-auto"
            >
              {copy.watchVideo}
            </ExternalButtonLink>
          </div>
        </article>
      </Section>
    </>
  )
}
