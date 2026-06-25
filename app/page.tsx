'use client'

import { useState } from 'react'
import Image from 'next/image'
import events from '@/data/events.json'
import NavCardGrid from '@/components/NavCardGrid'
import { navCards } from '@/data/navCards'
import EventModal from '@/components/EventModal'
import VideoPlayer from '@/components/VideoPlayer'

export default function HomePage() {
  const [eventIndex, setEventIndex] = useState(0)
  const visibleEvents = events.slice(eventIndex, eventIndex + 3)
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  return (
    <section className="space-y-10">
      {/* Teaser */}
      <VideoPlayer
        src="https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/Teaser/perilous_trailer_v6.mov"
        label="Perilous — Teaser"
        captions="/captions/teaser.vtt"
      />

      {/* Tagline */}
      <section className="mt-12 max-w-[1400px] mx-auto px-4">
        <blockquote className="text-center">

          {/* Quote */}
          <p className="quote-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-normal text-white">
            “<span className="text-brand italic">Perilous</span><span className="text-black">-</span>is the greatest idea in 50 years of off-road racing.”
          </p>

          {/* Attribution */}
          <footer className="mt-10 max-w-4xl mx-auto text-center">

            <p className="text-4xl md:text-5xl font-semibold text-white tracking-wide">
              — Sal Fish
            </p>

            {/* <p className="mt-2 text-base md:text-lg text-white/70 leading-relaxed"> */}
            <p className="mt-2 text-lg md:text-xl text-white/70 leading-relaxed">

              Former publisher of <em>Hot Rod Magazine</em> ·  
              The Godfather of Baja ·  
              2006 ORMHoF inductee
            </p>

          </footer>


        </blockquote>
      </section>


      {/* Brand Partners */}
      <section className="py-4 space-y-6 text-center">
        <h3 className="text-brand">Special thanks to our Brand Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {[
            { name: 'NORRA',        file: 'norra_logo',        href: 'https://www.norra.com/' },
            { name: 'SpeedUTV',     file: 'speed_utv_logo',    href: 'https://speedutv.com/' },
            { name: 'Geiser Bros.', file: 'geiser_logo',       href: 'https://geiserbrosinc.com/' },
            { name: 'Estero Beach', file: 'estero_beach_logo', href: 'https://esterobeach.com/' },
            { name: 'Ride Baja',    file: 'ride_baja_logo',    href: 'https://ridebaja.com/' },
            { name: 'Lugz',         file: 'lugz_logo',         href: 'https://www.lugz.com/' },
          ].map(({ name, file, href }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>
              <Image
                src={`https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/BrandPartners/${file}.png`}
                alt={name}
                width={160}
                height={60}
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Meet the Cast/Crew */}
      <section className="pt-2">
        <NavCardGrid items={navCards} />
      </section>

      {/* Events */}
      <div className="space-y-4">
        <h2 className="text-brand">Upcoming Events</h2>

        <div className="relative px-8">
          <div className="grid-cards">
            {visibleEvents.map((ev) => {
              const isPast = new Date(ev.dateISO) < new Date()
              return (
                <div className={`card flex flex-col ${isPast ? 'opacity-40 grayscale' : ''}`} key={ev.title}>
                  <h3>{ev.title}</h3>
                  <div className="text-white/70 mt-1">
                    {ev.date} — {ev.location}
                  </div>
                  <p className="text-white/80 mt-2">{ev.details}</p>
                  {ev.merch && (
                    <div className="mt-3 text-sm">
                      Merch: <span className="text-brand">{ev.merch}</span>
                    </div>
                  )}
                  {(ev.images || ev.extraDetails) && (
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <button
                        className="btn-orange text-sm"
                        onClick={() => setSelectedEvent(ev)}
                      >
                        More Details
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {events.length > 3 && eventIndex > 0 && (
            <button
              onClick={() => setEventIndex(i => i - 1)}
              aria-label="Previous events"
              className="btn absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur hover:bg-white/10"
            >
              ←
            </button>
          )}
          {events.length > 3 && eventIndex < events.length - 3 && (
            <button
              onClick={() => setEventIndex(i => i + 1)}
              aria-label="Next events"
              className="btn absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur hover:bg-white/10"
            >
              →
            </button>
          )}
        </div>

        {events.length > 3 && (
          <div className="flex justify-center gap-2 pt-1">
            {Array.from({ length: events.length - 2 }, (_, i) => (
              <button
                key={i}
                onClick={() => setEventIndex(i)}
                aria-label={`Event set ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === eventIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  )
}
