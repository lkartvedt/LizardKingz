import contestants from '@/data/contestants.json'
import PeopleGrid from '@/components/PeopleGrid'

export default function CelebrityContestantsPage() {
  return (
    <section className="space-y-6">
      <h1>Celebrity Contestants — 2026</h1>
      <p className="text-white/80">Headshots and bios will be revealed as announcements drop.</p>
      <PeopleGrid people={contestants as any} />
    </section>
  )
}
