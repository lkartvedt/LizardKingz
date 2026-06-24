'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

type EventData = {
  title: string
  date: string
  location: string
  details: string
  merch?: string
  images?: string[]
  extraDetails?: string
}

export default function EventModal({ event, onClose }: { event: EventData; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0)
  const images = event.images ?? []
  const total = images.length

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Reset carousel when event changes
  useEffect(() => { setImgIndex(0) }, [event])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0B0D0F] border border-white/15 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur border border-white/15 text-white flex items-center justify-center hover:bg-white/10 transition"
        >
          ✕
        </button>

        {/* Image carousel */}
        {total > 0 && (
          <div className="relative w-full aspect-video bg-black rounded-t-2xl overflow-hidden">
            <Image
              src={images[imgIndex]}
              alt={`${event.title} — image ${imgIndex + 1} of ${total}`}
              fill
              className="object-contain"
              priority
            />

            {total > 1 && (
              <>
                <button
                  onClick={() => setImgIndex(i => (i - 1 + total) % total)}
                  aria-label="Previous image"
                  className="btn absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur hover:bg-white/10"
                >
                  ←
                </button>
                <button
                  onClick={() => setImgIndex(i => (i + 1) % total)}
                  aria-label="Next image"
                  className="btn absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur hover:bg-white/10"
                >
                  →
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      aria-label={`Image ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors ${i === imgIndex ? 'bg-white' : 'bg-white/35'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Details */}
        <div className="p-6 space-y-3">
          <h2 className="text-white text-xl font-semibold">{event.title}</h2>
          <p className="text-white/55 text-sm">{event.date} — {event.location}</p>
          <p className="text-white/80">{event.details}</p>
          {event.extraDetails && (
            <p className="text-white/80">{event.extraDetails}</p>
          )}
          {event.merch && (
            <p className="text-sm pt-1">
              Merch: <span className="text-brand">{event.merch}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
