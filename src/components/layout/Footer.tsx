import SocialLinks from '@/components/common/SocialLinks'
import Container from '@/components/layout/Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-line bg-surface-muted border-t">
      <Container className="text-content-muted flex flex-col gap-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="text-primary font-medium">Charana Gunawardhana</p>
        <SocialLinks className="-mx-2.5 gap-1 sm:order-3 sm:mx-0" />
        <p className="sm:order-2">&copy; {year} Charana Gunawardhana. All rights reserved.</p>
      </Container>
    </footer>
  )
}
