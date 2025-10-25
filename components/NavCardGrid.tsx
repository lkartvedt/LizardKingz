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
    <section className={`grid md:grid-cols-3 gap-6 items-stretch ${className}`}>
      {items.map((card) => (
        <div
          key={card.title}
          className="card h-full flex flex-col text-center px-6 pt-6 pb-3 min-h-[320px] md:min-h-[220px]"
        >
          {/* grows to fill available vertical space */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">{card.blurb}</h3>
            <p className="text-white/70 max-w-xs">{card.description}</p>
          </div>

          {/* pinned near the bottom */}
          <Link className="btn-orange mt-auto self-center" href={card.href}>
            {card.title}
          </Link>
        </div>
      ))}
    </section>
  )
}
