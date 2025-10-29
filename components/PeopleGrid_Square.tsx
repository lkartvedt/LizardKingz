import Image from 'next/image'

type Person = {
  name: string
  title: string
  image: string
  email?: string
  imdb?: string
  bio?: string
}

export default function PeopleGrid_Square({
  people,
  columns = 3,
}: {
  people: Person[]
  columns?: number
}) {
  const gridClass =
    columns === 2
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-6'
      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'

  return (
    <div className={gridClass}>
      {people.map((p) => (
        <div
          key={p.name}
          className="card flex items-center gap-4 p-4 min-h-[140px]"
        >
          {/* Left: photo */}
          <Image
            src={p.image}
            alt={p.name}
            width={128}
            height={128}
            className="rounded-xl w-28 h-28 object-cover shrink-0"
          />

          {/* Right: text + actions */}
          <div className="flex-1 text-left">
            <h3 className="text-lg font-semibold uppercase tracking-wide text-white/90">
              {p.imdb ? (
                <a
                  href={p.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand hover:underline underline-offset-4"
                >
                  {p.name}
                </a>
              ) : (
                p.name
              )}
            </h3>
            <div className="text-white/70">{p.title}</div>

            {p.bio && (
              <p className="text-sm text-white/80 mt-2">{p.bio}</p>
            )}

            {p.email && (
              <a
                href={`mailto:${p.email}`}
                className="btn-orange mt-3 inline-flex items-center justify-center text-sm px-3 py-1.5"
              >
                Email {p.name.split(' ')[0]}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
