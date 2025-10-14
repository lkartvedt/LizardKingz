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

      <div className="space-y-4">
        <h2 className="text-brand">Upcoming Events</h2>
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
