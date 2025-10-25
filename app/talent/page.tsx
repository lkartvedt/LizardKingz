import talent from '@/data/talent.json'
import PeopleGrid from '@/components/PeopleGrid'

export default function TalentPage() {
  return (
    <section className="space-y-6">
      <h1>2026 Racing Legends</h1>
      <p className="text-white/80">Meet the stunt drivers, mechanics, navigators, and specialists guiding the contestants.</p>
      <PeopleGrid people={talent as any} />
    </section>
  )
}
