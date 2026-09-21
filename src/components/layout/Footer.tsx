import Container from '@/components/layout/Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-line bg-surface-muted border-t">
      <Container className="text-content-muted flex flex-col gap-1 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-primary font-medium">Charana Gunawardhana</p>
        <p>&copy; {year} Charana Gunawardhana. All rights reserved.</p>
      </Container>
    </footer>
  )
}
