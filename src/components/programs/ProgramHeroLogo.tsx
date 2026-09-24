import { PROGRAM_LOGOS } from '@/data/images'
import { type CatalogProgramId } from '@/data/programs'

type ProgramHeroLogoProps = {
  id: CatalogProgramId
}

/**
 * Small official program mark for detail-page heroes. The programme name
 * stays a real text heading; this tile is only an identity mark.
 */
export default function ProgramHeroLogo({ id }: ProgramHeroLogoProps) {
  const logo = PROGRAM_LOGOS[id]

  return (
    <img
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      decoding="async"
      className="mt-9 h-auto w-16 rounded-sm lg:w-20"
    />
  )
}
