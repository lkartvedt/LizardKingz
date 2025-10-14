import Image from 'next/image'

interface Person {
  name: string
  title: string
  bio: string
  image: string
}

interface PeopleGridProps {
  people: Person[]
  columns?: 2 | 3
}

export default function PeopleGrid({ people, columns = 3 }: PeopleGridProps) {
  const gridClass =
    columns === 2
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center'
      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'

  return (
    <div className={gridClass}>
      {people.map((p) => (
        <div
          key={p.name}
          className="card flex flex-col justify-between h-full min-h-[340px] w-full"
        >
          {/* Top section */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src={p.image}
                alt={p.name}
                width={112}
                height={112}
                className="avatar"
              />
              <div>
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-white/70">{p.title}</div>
              </div>
            </div>
            <p className="text-white/80 mt-3">{p.bio}</p>
          </div>

          {/* Optional footer (keeps height uniform even if missing) */}
          <div className="mt-auto"></div>
        </div>
      ))}
    </div>
  )
}
