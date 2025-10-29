import Image from 'next/image'
import creators from '@/data/creators.json'
import PeopleGrid from '@/components/PeopleGrid_Square'

export default function CreatorsPage() {
  return (
    <section className="space-y-6 text-center">
      {/* Centered logo */}
      <div className="flex justify-center">
        <Image
          src="/img/lizard_kingz_logo_dark.PNG"
          alt="Lizard Kingz logo"
          width={240}
          height={240}
          className="mx-auto w-40 md:w-48 h-auto"
          priority
        />
      </div>

      {/* Title and subtitle */}
      <div>
        <p className="text-white/80 max-w-xl mx-auto mt-2">
          Meet the team behind <b>Perilous</b>.
        </p>
      </div>

      {/* People grid (3-column layout) */}
      <div className="mx-auto max-w-6xl">
        <PeopleGrid people={creators as any} columns={3} />
      </div>
    </section>
  )
}
