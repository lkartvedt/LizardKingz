import creators from '@/data/creators.json'
import PeopleGrid from '@/components/PeopleGrid'

export default function CreatorsPage() {
  return (
    <section className="space-y-6">
      <h1>The Creators — Lizard Kingz LLC</h1>
      <p className="text-white/80">Meet the team behind Perilous.</p>
      <PeopleGrid people={creators as any} />
    </section>
  )
}
