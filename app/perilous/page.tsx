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
          className="w-64 md:w-96 h-auto"
          priority
        />

        <div className="flex-1">
          <p className="text-white/100 max-w-2xl mt-2">
            <b>
              Twelve celebrities compete to race the legendary Baja 1000, facing
              each other and the world’s best in a historic, first-of-its-kind TV finale.
            </b>
          </p>
          <p className="text-white/80 max-w-2xl mt-2">
            Follow celebrity contestants as they take on the deserts of Cabo San
            Lucas with guidance from elite mentors. Filming begins in 2026.
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
          <div className="mt-8 flex items-center justify-end gap-6">
            <div className="text-right max-w-lg">
              <h2 className="text-2xl font-semibold text-white/90 tracking-wide">
                Hosted By
              </h2>
              <h3 className="text-xl font-semibold text-white mt-1">Rat Sult</h3>
              <p className="text-white/70 mt-2">
                Veteran off-road announcer, racer, and media personality, Rat Sult
                brings the heart of the desert to every broadcast—guiding viewers
                through the grit, speed, and spirit of <i>Perilous</i>.
              </p>
            </div>

            <Image
              src="https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/Headshots/Talent/rat_sult.png"
              alt="Rat Sult"
              width={200}
              height={200}
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
