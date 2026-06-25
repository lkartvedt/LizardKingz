'use client'

import { useEffect, useRef } from 'react'

export default function VideoPlayer({
  src,
  label,
  captions,
}: {
  src: string
  label?: string
  captions?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return
    let player: any

    import('plyr').then(({ default: Plyr }) => {
      if (!videoRef.current) return

      player = new Plyr(videoRef.current, {
        controls: [
          'play', 'progress', 'current-time',
          'mute', 'volume',
          ...(captions ? ['captions'] : []),
          'fullscreen',
        ],
        autoplay: true,
        muted: true,
        ratio: '16:9',
        hideControls: true,
        captions: { active: false, language: 'en' },
      })

      player.on('ready', () => {
        player.muted = true
        player.play().catch(() => {})
      })

      let prevVolume = 1
      player.on('volumechange', () => {
        if (player.muted && player.volume !== prevVolume) {
          player.muted = false
        }
        prevVolume = player.volume
      })
    })

    return () => { player?.destroy() }
  }, [captions])

  return (
    <div className="card overflow-hidden relative">
      {label && (
        <div className="pointer-events-none absolute top-4 left-4 z-10 bg-black/50 px-3 py-1 rounded-full text-sm border border-white/10">
          {label}
        </div>
      )}
      <video ref={videoRef} playsInline autoPlay muted preload="metadata">
        <source src={src} />
        {captions && (
          <track kind="captions" label="English" src={captions} srcLang="en" default />
        )}
      </video>
    </div>
  )
}
