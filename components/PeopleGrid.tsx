import Image from 'next/image'

export default function PeopleGrid({
  people,
  columns = 3,
}: {
  people: { name: string; title: string; bio: string; image: string; email?: string }[]
  columns?: number
}) {
  const gridClass =
    columns === 2
      ? 'grid sm:grid-cols-2 gap-6 justify-center'
      : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'

  return (
    <div className={gridClass}>
      {people.map((p) => (
        <div className="card flex flex-col justify-between items-center text-center mx-auto w-full max-w-[920px] min-h-[260px] p-4" key={p.name}>
          {/* Top section: photo + info */}
          <div>
            <div className="flex items-center gap-4">
              <Image src={p.image} alt={p.name} width={240} height={240} className="avatar" />
              <div>
                <div className="text-lg font-semibold uppercase tracking-wide text-white/90">{p.name}</div>
                <div className="text-white/70">{p.title}</div>
              </div>
            </div>

            <p className="text-white/80 mt-3">{p.bio}</p>
          </div>

          {/* Bottom: email link */}
          {p.email && (
            <a
              href={`mailto:${p.email}`}
              className="btn-orange mt-4 self-center"
            >
              Email {p.name.split(' ')[0]}
            </a>
          )}
        </div>
      ))}
    </div>
  )
}
