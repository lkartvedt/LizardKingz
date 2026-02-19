import Image from 'next/image'
import Link from 'next/link'
import NavCardGrid from '@/components/NavCardGrid'
import { navCards } from '@/data/navCards'
import CarouselRow from '@/components/CarouselRow'
import { list } from '@vercel/blob'

// Revalidate periodically so new uploads appear automatically
export const revalidate = 60

export default async function PerilousPage() {
  // Dynamically fetch all images in your Gallery folder
  const { blobs } = await list({ prefix: 'Gallery/' })

  const gallery = blobs
    .filter(b => /\.(png|jpe?g|webp|avif)$/i.test(b.pathname))
    .sort((a, b) =>
      a.pathname.localeCompare(b.pathname, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map(b => b.url)

  return (
    <article className="space-y-6 md:space-y-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <Image
          src="/img/perilous_logo.png"
          alt="Perilous logo"
          width={500}
          height={500}
          //className="w-64 md:w-96 h-auto"
          className="w-72 md:w-[28rem] h-auto"
          priority
        />

        <div className="flex-1">
          <p className="text-white/100 max-w-2xl mt-2">
            <b>
              Twelve celebrities train to compete in the world's most famous off-road race.
              The final episode is a historic television first when they face off against each
              other and the best in the business, at its most iconic event.
            </b>
          </p>
          <p className="text-white/80 max-w-2xl mt-2">
            Follow our celebrity contestants as they take on the deserts of Baja, 
            from Ensenada to Cabo San Lucas. Training and competing under the guidance of 
            three off-road legends and a host of elite guest drivers.
          </p>

          <div className="mt-3 flex gap-3 text-sm flex-wrap">
            <a
              className="btn"
              href="https://www.imdb.com/title/tt33050046/"
              target="_blank"
              rel="noreferrer"
            >
              IMDB
            </a>
            <Link className="btn" href="/celebrity-contestants">
              Meet the Baja Celebrity Contestants
            </Link>
          </div>

          {/* Hosted By */}
          <div className="mt-10 flex items-center justify-end gap-6">
            <div className="text-right flex-1 max-w-none pr-4">

              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
                HOST – To Be Announced
              </h2>

              <h3 className="text-lg md:text-xl text-white/90 mt-2">
                Casting Style: Jeff Probst, Will Buxton
              </h3>

              <p className="text-xs text-white/50 mt-1">
                (Individuals referenced are not affiliated with the series.)
              </p>

              <p className="text-white/80 mt-6 leading-relaxed">
                <i>Perilous</i> is designed as a primetime, unscripted flagship in the broadcast 
                network and premium streaming space. Our casting style reflects that vision, 
                from the attached racing legends to the celebrity contestants and the series 
                host we will cast for the recognition and credibility expected of a 
                broadcast-scale series.
              </p>

            </div>

            <Image
              src="https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/Headshots/Talent/temp_host.png"
              alt="AI example image of a Perilous host onsite"
              width={225}
              height={225}
              className="rounded-full border border-white/20 shadow-lg flex-shrink-0"
            />
          </div>
        </div>
      </header>

      {/* Meet the Cast/Crew NavCards Section */}
      <section className="pt-2">
        <NavCardGrid items={navCards} />
      </section>

      {/* Photo Gallery Section */}
      <section className="space-y-5 pt-4">
        <h2>Gallery</h2>
        <CarouselRow images={gallery} />
      </section>
    </article>
  )
}
