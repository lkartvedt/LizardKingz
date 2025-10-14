import Image from 'next/image'
import Link from 'next/link'

const gallery = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1600&auto=format&fit=crop"
]

export default function PerilousPage() {
  return (
    <article className="space-y-8">
      <header className="flex items-center gap-6">
        <Image src="/img/perilous-logo.png" alt="Perilous logo" width={140} height={140} className="rounded-xl bg-white/5 p-2" />
        <div>
          <h1>Perilous</h1>
          <p className="text-white/80 max-w-2xl mt-2">
            Season location: <b>Cabo San Lucas, Baja California</b>. Filming begins in <b>2026</b>.
            Follow celebrity contestants as they take on the desert with guidance from elite mentors.
          </p>
          <div className="mt-3 flex gap-3 text-sm">
            <a className="btn" href="https://www.imdb.com/" target="_blank" rel="noreferrer">IMDB</a>
            <Link className="btn" href="/celebrity-contestants">Meet the 2026 Celebrity Contestants</Link>
          </div>
        </div>
      </header>

      <section className="space-y-3">
        <h2>Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="card p-2">
              <Image src={src} alt={`promo-${i}`} width={1200} height={800} className="rounded-xl object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Celebrity Contestants', href: '/celebrity-contestants', blurb: 'Get to know the roster.' },
          { title: 'Talent', href: '/talent', blurb: 'Mentors, drivers, and specialists.' },
          { title: 'Creators', href: '/creators', blurb: 'The Lizard Kingz team.' }
        ].map(card => (
          <div className="card" key={card.title}>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-white/80 mt-2">{card.blurb}</p>
            <a className="btn mt-4" href={card.href}>Open</a>
          </div>
        ))}
      </section>
    </article>
  )
}
