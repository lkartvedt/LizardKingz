'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function CarouselRow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  const visible = 3
  const total = images.length

  const prev = () => setIndex(i => (i - 1 + total) % total)
  const next = () => setIndex(i => (i + 1) % total)

  // Compute the 3 images to show, looping seamlessly
  const visibleImages = [
    images[index],
    images[(index + 1) % total],
    images[(index + 2) % total],
  ]

  return (
    <div className="relative">
      {/* Frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleImages.map((src, i) => (
            <div
              key={`${index}-${i}`}
              className="min-w-[33.3333%] aspect-square relative"
            >
              <Image
                src={src}
                alt={`gallery-${i}`}
                fill
                className="object-cover"
                sizes="33vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="btn absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur hover:bg-white/10"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="btn absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur hover:bg-white/10"
      >
        →
      </button>
    </div>
  )
}
