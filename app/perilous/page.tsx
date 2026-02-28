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
          className="w-48 md:w-[18rem] h-auto"
          priority
        />

        <div className="flex-1">
          <p className="text-white/100 max-w-2xl mt-2">
            <b>
              Twelve celebrities train to compete in the world's most famous off-road race. 
              In a historic television first, contestants face off against each other and the 
              best in the business.
              </b>
          </p>
          <p className="text-white/80 max-w-2xl mt-2">
            Follow our celebrity contestants as they take on the deserts of Baja. 
            From Ensenada to Cabo San Lucas, they will train and compete under the guidance 
            of three off-road legends & a host of elite guest drivers.
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
        </div>
      </header>

      {/* Host Casting Style Section */}
      <section className="pt-2 space-y-6">
        {/* Quote */}
        {/* <p className="quote-display w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.1] text-white text-justify">
          <span className="text-brand">HOST CASTING STYLE:</span>{' '}
          A broadcast-scale personality with the authority,
          credibility, and charisma of Jeff Probst, Jeremy Clarkson, or Mike Rowe.
        </p> */}

        <p className="quote-display w-full text-[1rem] sm:text-[1.3rem] md:text-[1.8rem] lg:text-[2.3rem] xl:text-[2.8rem] leading-snug text-white text-justify [text-align-last:justify]">
          <span className="text-brand">HOST CASTING STYLE:</span>{' '}
          A broadcast-scale personality with the authority, credibility, and charisma
          of a Jeff Probst, Jeremy Clarkson, or Mike Rowe.
        </p>

      {/* Silhouette image with overlay card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          {/* Image */}
          <div className="relative w-full">
            <Image
              src="https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/Pages/casting_style_silhouette_desert.png"
              alt="Host casting style silhouette"
              width={1333}
              height={786}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Bottom-left overlay */}
          <div className="absolute bottom-10 left-10">
            <p className="max-w-sm text-white text-base sm:text-xl md:text-2xl leading-relaxed">
              <i><b>Perilous</b></i> is designed as a primetime, unscripted flagship in the 
              broadcast network and premium streaming space. Our casting style reflects that vision, 
              from the attached racing legends to the celebrity contestants and series host, we'll cast 
              for the recognition and credibility expected of a broadcast-scale series.
            </p>
          </div>
        </div>
      </section>

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
