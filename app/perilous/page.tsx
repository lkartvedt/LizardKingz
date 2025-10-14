import Image from 'next/image'
import Link from 'next/link'

const gallery = [
  "https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/1.png",
  "https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/2.png",
  "https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/3.png",
  "https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/4.png",
  "https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/5.png",
  "https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/6.png",
  "https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/7.png",
  "https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/8.png",
  "https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/9.png"
]

export default function PerilousPage() {
  return (
    <article className="space-y-8">
      <header className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src="/img/perilous-logo.png"
          alt="Perilous logo"
          width={300}
          height={300}
          className="w-48 md:w-72 h-auto"
          priority
        />
        <div>
          <p className="text-white/100 max-w-2xl mt-2">
            <b>
              Twelve celebrities compete to race the legendary Baja 1000, facing each other and the world’s best in a historic, first-of-its-kind TV finale.
            </b>
          </p>
          <p className="text-white/80 max-w-2xl mt-2">
            Follow celebrity contestants as they take on the deserts of Cabo San Lucas with
            guidance from elite mentors. Filming begins in 2026.
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


      <section className="space-y-5">
        <h2>Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="card p-2">
              <Image
                src={src}
                alt={`promo-${i}`}
                width={1200}
                height={800}
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-6 items-stretch">
        {[
          {
            title: 'Celebrity Contestants',
            href: '/celebrity-contestants',
            blurb: 'Get to know the Roster',
            description: 'Meet the stars brave enough to take on the desert.'
          },
          {
            title: 'Talent',
            href: '/talent',
            blurb: 'Discover the mentors',
            description: 'The pros behind the wheel: Mentors, stunt drivers, and off-road veterans to coach the contestants.'
          },
          {
            title: 'Creators',
            href: '/creators',
            blurb: 'Meet the Lizard Kingz',
            description: 'Get to know the visionary team behind Perilous.'
          }
        ].map(card => (
          <div
            key={card.title}
            className="card h-full flex flex-col text-center px-6 pt-6 pb-3 min-h-[320px] md:min-h-[220px]"
          >
            {/* grows to fill available vertical space */}
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">{card.blurb}</h3>
              <p className="text-white/70 max-w-xs">{card.description}</p>
            </div>

            {/* pinned near the bottom */}
            <a className="btn-orange mt-auto self-center" href={card.href}>
              {card.title}
            </a>
          </div>
        ))}
      </section>

    </article>
  )
}
