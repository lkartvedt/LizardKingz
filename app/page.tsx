'use client'

import { useEffect, useRef, useState } from 'react'
import events from '@/data/events.json'
import NavCardGrid from '@/components/NavCardGrid'
import { navCards } from '@/data/navCards'

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [paused, setPaused] = useState(false)
  const [ended, setEnded] = useState(false)
  const [muted, setMuted] = useState(false)            // default: try sound ON
  const [needsUnmutePrompt, setNeedsUnmutePrompt] = useState(false) // shown only if fallback happens

  // Try autoplay WITH sound, fallback to muted if blocked
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = false
    v.volume = 1
    v.play()
      .then(() => {
        setMuted(false)
        setNeedsUnmutePrompt(false)
      })
      .catch(() => {
        v.muted = true
        setMuted(true)
        setNeedsUnmutePrompt(true)
        v.play().catch(() => {})
      })
  }, [])

  const play = () => videoRef.current?.play().catch(() => {})
  const pause = () => videoRef.current?.pause()
  const replay = () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    setEnded(false)
    play()
  }

  const handleEnded = () => { setEnded(true); setPaused(true) }
  const handlePlay = () => { setPaused(false); setEnded(false) }
  const handlePause = () => setPaused(true)

  const unmuteAndPlay = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = false
    v.volume = 1
    setMuted(false)
    setNeedsUnmutePrompt(false)
    v.play().catch(() => {})
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    const next = !muted
    v.muted = next
    setMuted(next)
    if (!next) { v.volume = 1; v.play().catch(() => {}) }
  }

  // Click behavior: if ended -> replay; else if muted & showing prompt -> unmute; else toggle pause
  const handleVideoClick = () => {
    if (ended) return replay()
    if (muted && needsUnmutePrompt) return unmuteAndPlay()
    paused ? play() : pause()
  }

  return (
    <section className="space-y-10">
      {/* Teaser */}
      <div className="card overflow-hidden relative">
        <div className="aspect-[16/9] relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl"
            src="https://hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com/Teaser/perilous_trailer_v6.mov"
            autoPlay
            muted={muted}          // controlled: we try sound-on first, fallback sets this true
            playsInline
            controls={false}
            preload="metadata"
            onEnded={handleEnded}
            onPlay={handlePlay}
            onPause={handlePause}
            onClick={handleVideoClick}
          />
        </div>

        {/* Teaser label */}
        <div className="pointer-events-none absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm border border-white/10">
          Perilous — Teaser
        </div>

        {/* First-load fallback: show unmute prompt only if autoplay-with-sound was blocked */}
        {needsUnmutePrompt && !ended && (
          <button
            onClick={unmuteAndPlay}
            className="absolute inset-0 grid place-items-center"
            aria-label="Unmute teaser"
            title="Tap to unmute"
          >
            <span className="rounded-full bg-black/60 backdrop-blur px-5 py-3 border border-white/15 flex items-center gap-2 text-white hover:bg-black/70 active:scale-95 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a3.5 3.5 0 0 0-2.5-3.34v6.68A3.5 3.5 0 0 0 16.5 12z" />
              </svg>
              Tap to unmute
            </span>
          </button>
        )}

        {/* Play / Replay overlay (same as your UX) */}
        {(paused || ended) && !needsUnmutePrompt && (
          <button
            onClick={ended ? replay : play}
            className="absolute inset-0 grid place-items-center"
            aria-label={ended ? 'Replay teaser' : 'Play teaser'}
            title={ended ? 'Replay teaser' : 'Play teaser'}
          >
            <span className="rounded-full bg-black/60 backdrop-blur px-5 py-3 border border-white/15 flex items-center gap-2 text-white hover:bg-black/70 active:scale-95 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              {ended ? 'Replay' : 'Play'}
            </span>
          </button>
        )}

        {/* Bottom-right mute chip */}
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 rounded-full bg-black/60 backdrop-blur px-3 py-1.5 text-xs border border-white/15 text-white hover:bg-black/70 transition"
          aria-label={muted ? 'Unmute' : 'Mute'}
          title={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? 'Sound Off' : 'Sound On'}
        </button>
      </div>

      {/* Tagline */}
      <blockquote className="mt-6 text-white/90">
        {/* Quote */}
        <p className="text-lg md:text-xl italic tracking-wide text-center">
          “<span className="text-brand font-semibold">Perilous</span> is the greatest idea in 50 years of off-road racing.”
        </p>

        {/* Attribution */}
        <footer className="mt-4 flex justify-end pr-6 md:pr-10">
          <div className="w-2/3 max-w-md text-center">
            <p className="text-base md:text-lg font-semibold not-italic">
              — Sal Fish
            </p>
            <p className="text-sm md:text-base text-white/70">
              Former publisher of <em>Hot Rod Magazine</em>,<br />
              The Godfather of Baja, 2006 ORMHoF inductee
            </p>
          </div>
        </footer>
      </blockquote>

      {/* Meet the Cast/Crew */}
      <section className="pt-2">
        <NavCardGrid items={navCards} />
      </section>

      {/* Events */}
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

              {ev.merch && (
                <div className="mt-3 text-sm">
                  Merch: <span className="text-brand">{ev.merch}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
