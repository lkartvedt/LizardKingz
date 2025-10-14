import Image from 'next/image'

export default function PeopleGrid({ people }: { people: {name:string,title:string,bio:string,image:string}[] }) {
  return (
    <div className="grid-cards">
      {people.map((p) => (
        <div className="card" key={p.name}>
          <div className="flex items-center gap-4">
            <Image src={p.image} alt={p.name} width={112} height={112} className="avatar" />
            <div>
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="text-white/70">{p.title}</div>
            </div>
          </div>
          <p className="text-white/80 mt-3">{p.bio}</p>
        </div>
      ))}
    </div>
  )
}
