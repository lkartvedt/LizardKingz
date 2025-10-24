import contestants from '@/data/contestants.json'
import PeopleGrid from '@/components/PeopleGrid'

export default function CelebrityContestantsPage() {
  return (
    <section className="space-y-6">
      <h1>2026 Celebrity Contestants</h1>
      <p className="text-white/80">Headshots and bios will be revealed as announcements drop.</p>
      <PeopleGrid people={contestants as any} />
    </section>
  )
}
