import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react'
import { Bebas_Neue } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Lizard Kingz — Perilous',
  description: 'Lizard Kings LLC — official site for Perilous.',
  metadataBase: new URL('https://lizardkingz.com'),
  openGraph: {
    title: 'Lizard Kingz — Perilous',
    description: 'Desert racing show',
    type: 'website',
  },
}

const display = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
})

const Nav = () => (
  <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/30">
    <nav className="container py-4 flex items-center gap-6">
      <Link href="/" aria-label="Lizard Kingz — Home" className="no-underline flex items-center">
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

      <div className="flex items-center gap-5 text-sm">
        <Link href="/perilous" className="no-underline">Perilous</Link>
        <Link href="/celebrity-contestants" className="no-underline">Celebrity Contestants</Link>
        <Link href="/legends" className="no-underline">Legends</Link>
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
    <html lang="en" className={`dark ${display.variable}`}>

      <body className="font-sans">
        <Nav />
        <main className="container py-10">
          <h1 className="sr-only">Lizard Kingz — Perilous</h1>
          {children}
        </main>

        <footer className="border-t border-white/10 mt-10">
          <div className="container py-8 text-sm flex flex-col md:flex-row gap-4 md:items-center">
            <div>© {new Date().getFullYear()} Lizard Kingz LLC</div>
            <div className="flex-1" />
            <div className="flex gap-4">
              <a href="https://www.instagram.com/perilousbaja/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.imdb.com/title/tt33050046/" target="_blank" rel="noreferrer">IMDB</a>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
