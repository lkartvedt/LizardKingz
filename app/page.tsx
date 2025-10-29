'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import events from '@/data/events.json'
import NavCardGrid from '@/components/NavCardGrid'
import { navCards } from '@/data/navCards'

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showReplay, setShowReplay] = useState(false)

  const handleEnded = () => setShowReplay(true)
  const handlePlay = () => setShowReplay(false)

  const replay = () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    v.play().catch(() => {}) // ignore autoplay restrictions
  }

  return (
    <section className="space-y-10">
      {/* Trailer */}
      <div className="card overflow-hidden relative">
        <div className="aspect-[16/9]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl"
            src="https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/Trailer/Perilous_Trailer_V1.mov"
            autoPlay
            muted
            playsInline
            controls={false}
            preload="metadata"
            onEnded={handleEnded}
            onPlay={handlePlay}
          />
        </div>

        {/* Trailer label */}
        <div className="pointer-events-none absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm border border-white/10">
          Perilous — Trailer
        </div>

        {/* Replay overlay */}
        {showReplay && (
          <button
            onClick={replay}
            className="absolute inset-0 grid place-items-center"
            aria-label="Replay trailer"
            title="Replay trailer"
          >
            <span className="rounded-full bg-black/60 backdrop-blur px-5 py-3 border border-white/15 flex items-center gap-2 text-white hover:bg-black/70 active:scale-95 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </span>
          </button>
        )}
      </div>

      {/* ✨ Tagline below trailer */}
      <div className="text-center mt-4">
        <p className="text-lg md:text-xl text-white/90 italic tracking-wide">
          The World-Exclusive Competition Adventure Series Inspired by the <span className="text-brand font-semibold not-italic">BAJA&nbsp;1000</span>
        </p>
      </div>

      {/* Meet the Cast/Crew NavCards Section */}
      <section className="pt-2">
        <NavCardGrid items={navCards} />
      </section>

      {/* Events Section */}
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
