import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Lizard Kingz — Perilous',
  description: 'Lizard Kings LLC — official site for Perilous.',
  metadataBase: new URL('https://lizardkingz.com'),
  openGraph: { title: 'Lizard Kingz — Perilous', description: 'Desert racing show', type: 'website' }
}

const Nav = () => (
    <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/30">
      <nav className="container py-4 flex items-center gap-6">
        {/* Left: Logo (no w-full so it doesn't center itself) */}
        <Link
          href="/"
          aria-label="Lizard Kingz — Home"
          className="no-underline flex items-center"
        >
          <Image
            src="/img/lizard_kingz_logo_text_dark.PNG"
            alt="Lizard Kingz"
            width={400}
            height={120}
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto py-1 transition-all duration-300"
            priority
          />
          <span className="sr-only">Lizard Kingz</span>
        </Link>

        {/* Spacer to push tabs toward center */}
        <div className="flex-1" />

        {/* Center: Tabs */}
        <div className="flex items-center gap-5 text-sm">
          <Link href="/perilous" className="no-underline">Perilous</Link>
          <Link href="/celebrity-contestants" className="no-underline">Celebrity Contestants</Link>
          <Link href="/talent" className="no-underline">Talent</Link>
          <Link href="/creators" className="no-underline">Creators</Link>
          <Link href="/contact" className="no-underline">Contact</Link>
        </div>

        {/* Spacer to keep tabs centered while Shop hugs the right */}
        <div className="flex-1" />

        {/* Right: CTA */}
        <Link href="/shop" className="btn btn-primary no-underline">Shop</Link>
      </nav>
    </header>


  // <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/30">
  //   <nav className="container py-4 flex items-center gap-6">

  //     <Link
  //       href="/"
  //       aria-label="Lizard Kingz — Home"
  //       className="no-underline flex justify-center items-center w-full"
  //     >
  //       <Image
  //         src="/img/lizard_kingz_logo_text_dark.PNG"
  //         alt="Lizard Kingz"
  //         width={400}
  //         height={120}
  //         className="w-32 sm:w-44 md:w-56 lg:w-12 xl:w-72 h-auto py-2 transition-all duration-300"
  //         priority
  //       />
  //       <span className="sr-only">Lizard Kingz</span>
  //     </Link>


  //     <div className="flex gap-5 text-sm">
  //       <Link href="/perilous" className="no-underline">Perilous</Link>
  //       <Link href="/celebrity-contestants" className="no-underline">Celebrity Contestants</Link>
  //       <Link href="/talent" className="no-underline">Talent</Link>
  //       <Link href="/creators" className="no-underline">Creators</Link>
  //       <Link href="/contact" className="no-underline">Contact</Link>
  //     </div>
  //     <div className="flex-1" />
  //     <Link href="/shop" className="btn btn-primary no-underline">Shop</Link>
  //   </nav>
  // </header>
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
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="IMDB">IMDB</a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
