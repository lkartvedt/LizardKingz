import Link from 'next/link'
import events from '@/data/events.json'

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="card overflow-hidden relative">
        <video
          className="w-full h-[50vh] object-cover rounded-2xl"
          src="/videos/perilous_home_page_video.mp4"
          autoPlay
          muted
          playsInline
          poster="/img/perilous-logo.png"
          controls={false}
        />
        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm border border-white/10">Perilous — Trailer</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Perilous', href: '/perilous', blurb: 'Show details, location, timeline, and promos.' },
          { title: 'Celebrity Contestants', href: '/celebrity-contestants', blurb: 'The 2026 roster (teaser).' },
          { title: 'Creators', href: '/creators', blurb: 'The Lizard Kingz team.' }
        ].map((c) => (
          <div className="card" key={c.title}>
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="text-white/80 mt-2">{c.blurb}</p>
            <a className="btn mt-4" href={c.href}>Open</a>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-brand">Upcoming Promotional Events</h2>
        <div className="grid-cards">
          {events.map((ev) => (
            <div className="card" key={ev.title}>
              <h3>{ev.title}</h3>
              <div className="text-white/70 mt-1">{ev.date} — {ev.location}</div>
              <p className="text-white/80 mt-2">{ev.details}</p>
              <div className="mt-3 text-sm">Merch: <span className="text-brand">{ev.merch}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
