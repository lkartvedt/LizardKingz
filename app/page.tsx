'use client'

import { useRef, useState } from 'react'
import events from '@/data/events.json'
import NavCardGrid from '@/components/NavCardGrid'
import { navCards } from '@/data/navCards'

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  // Start as playing, not ended
  const [paused, setPaused] = useState(false)
  const [ended, setEnded] = useState(false)

  const play = () => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {}) // ignore autoplay restrictions
  }

  const pause = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
  }

  const replay = () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    setEnded(false)
    play()
  }

  const handleEnded = () => {
    setEnded(true)
    setPaused(true)
  }

  const handlePlay = () => {
    setPaused(false)
    setEnded(false)
  }

  const handlePause = () => {
    // Only show overlay when actually paused
    setPaused(true)
  }

  // Click video: toggle. If ended, treat click as replay.
  const handleVideoClick = () => {
    if (ended) return replay()
    paused ? play() : pause()
  }

  return (
    <section className="space-y-10">
      {/* Trailer */}
      <div className="card overflow-hidden relative">
        <div className="aspect-[16/9] relative">
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
            onPause={handlePause}
            onClick={handleVideoClick}
          />
        </div>

        {/* Trailer label */}
        <div className="pointer-events-none absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm border border-white/10">
          Perilous — Trailer
        </div>

        {/* Center overlay appears ONLY when paused or ended */}
        {(paused || ended) && (
          <button
            onClick={ended ? replay : play}
            className="absolute inset-0 grid place-items-center"
            aria-label={ended ? 'Replay trailer' : 'Play trailer'}
            title={ended ? 'Replay trailer' : 'Play trailer'}
          >
            <span className="rounded-full bg-black/60 backdrop-blur px-5 py-3 border border-white/15 flex items-center gap-2 text-white hover:bg-black/70 active:scale-95 transition">
              {/* Play icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              {ended ? 'Replay' : 'Play'}
            </span>
          </button>
        )}
      </div>

      {/* ✨ Tagline below trailer */}
      <div className="text-center mt-4">
        <p className="text-lg md:text-xl text-white/90 italic tracking-wide">
          The World-Exclusive Competition Adventure Series Inspired by the{' '}
          <span className="text-brand font-semibold not-italic">BAJA&nbsp;1000</span>
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
