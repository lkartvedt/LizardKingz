import Link from 'next/link'
import events from '@/data/events.json'
import NavCardGrid from '@/components/NavCardGrid'
import { navCards } from '@/data/navCards'


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
          poster=""
          controls={false}
        />
        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm border border-white/10">
          Perilous — Trailer
        </div>
      </div>

      {/* Meet the Cast/Crew NavCards Section */}
      <section className="pt-2">
        <NavCardGrid items={navCards} />
      </section>

      <div className="space-y-4">
        <h2 className="text-brand">Upcoming & Recent Events</h2>
        <div className="grid-cards">
          {events.map((ev) => (
            <div className="card" key={ev.title}>
              <h3>{ev.title}</h3>
              <div className="text-white/70 mt-1">
                {ev.date} — {ev.location}
              </div>
              <p className="text-white/80 mt-2">{ev.details}</p>
              <div className="mt-3 text-sm">
                Merch: <span className="text-brand">{ev.merch}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
