import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Lizard Kingz — Perilous',
  description: 'Lizard Kings LLC — official site for Perilous.',
  metadataBase: new URL('https://lizardkingz.com'),
  openGraph: { title: 'Lizard Kingz — Perilous', description: 'Desert racing show', type: 'website' }
}

const Nav = () => (
  <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/30">
    <nav className="container py-4 flex items-center gap-6">
      <Link className="font-bold text-xl no-underline" href="/">🦎 Lizard Kingz</Link>
      <div className="flex gap-5 text-sm">
        <Link href="/perilous" className="no-underline">Perilous</Link>
        <Link href="/celebrity-contestants" className="no-underline">Celebrity Contestants</Link>
        <Link href="/talent" className="no-underline">Talent</Link>
        <Link href="/creators" className="no-underline">Creators</Link>
        <Link href="/contact" className="no-underline">Contact</Link>
      </div>
      <div className="flex-1" />
      <Link href="/shop" className="btn btn-primary no-underline">Shop</Link>
    </nav>
  </header>
)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Nav />
        <main className="container py-10">{children}</main>
        <footer className="border-t border-white/10 mt-10">
          <div className="container py-8 text-sm flex flex-col md:flex-row gap-4 md:items-center">
            <div>© {new Date().getFullYear()} Lizard Kings LLC</div>
            <div className="flex-1" />
            <div className="flex gap-4">
              <a href="#" aria-label="YouTube">YouTube</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="TikTok">TikTok</a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
