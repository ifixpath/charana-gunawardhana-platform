import Container from '@/components/layout/Container'

type PageHeadingProps = {
  title: string
}

/**
 * Temporary heading block used while the real page designs are pending.
 */
export default function PageHeading({ title }: PageHeadingProps) {
  return (
    <section className="pt-[calc(var(--header-height)+3rem)] pb-16 sm:pt-[calc(var(--header-height)+4rem)] sm:pb-20">
      <Container>
        <h1 className="text-primary text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      </Container>
    </section>
  )
}
