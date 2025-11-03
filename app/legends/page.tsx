import talent from '@/data/talent.json'
import PeopleGrid from '@/components/PeopleGrid'

export default function LegendsPage() {
  return (
    <section className="space-y-6">
      <h1>
        <span className="text-brand">PERILOUS</span> Legends
      </h1>
      <p className="text-white/80">
        Meet the 2026 lineup of champs, special guests and crew chiefs guiding the contestants.
      </p>
      <PeopleGrid people={talent as any} />
    </section>
  )
}

