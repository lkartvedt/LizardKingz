import Link from 'next/link'
import type { NavCard } from '@/data/navCards'

export default function NavCardGrid({
  items,
  className = '',
}: {
  items: NavCard[]
  className?: string
}) {
  return (
    <section className={`grid grid-cols-3 gap-3 md:gap-6 items-stretch ${className}`}>
      {items.map((card) => (
        <div
          key={card.title}
          className="card h-full flex flex-col text-center px-2 py-4 md:px-6 md:pt-6 md:pb-3 md:min-h-[220px]"
        >
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2">{card.blurb}</h3>
            <p className="hidden md:block text-white/70 max-w-xs">{card.description}</p>
          </div>

          <Link className="btn-orange mt-2 md:mt-auto self-center text-xs md:text-base px-2 py-1 md:px-4 md:py-2" href={card.href}>
            <span className="hidden md:inline">{card.title}</span>
            <span className="md:hidden">View →</span>
          </Link>
        </div>
      ))}
    </section>
  )
}
