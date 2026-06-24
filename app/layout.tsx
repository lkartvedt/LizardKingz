import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Bebas_Neue } from 'next/font/google'
import Nav from '@/components/Nav'

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
