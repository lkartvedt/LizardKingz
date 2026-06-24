'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { href: '/perilous',               label: 'Perilous' },
  { href: '/celebrity-contestants',  label: 'Celebrity Contestants' },
  { href: '/legends',                label: 'Legends' },
  { href: '/creators',               label: 'Creators' },
  { href: '/contact',                label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/30">
      <nav className="container py-4 flex items-center gap-4">
        <Link href="/" aria-label="Lizard Kingz — Home" className="no-underline flex items-center shrink-0">
          <Image
            src="/img/lizard_kingz_logo_text_dark.png"
            alt=""
            width={400}
            height={120}
            className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto py-1 transition-all duration-300"
            priority
          />
          <span className="sr-only">Lizard Kingz</span>
        </Link>

        <div className="flex-1" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="no-underline whitespace-nowrap">
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block flex-1" />

        <Link href="/shop" className="hidden md:inline-flex btn btn-primary no-underline">
          Shop
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden btn px-3 py-2"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="container py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="no-underline py-3 text-base border-b border-white/10 last:border-0"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="btn btn-primary no-underline self-start mt-4"
              onClick={() => setOpen(false)}
            >
              Shop
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
