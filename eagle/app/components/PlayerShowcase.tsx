import Image from "next/image"

const players = [
  { name: "Jalen Hurts", position: "QB", image: "/placeholder.svg?height=400&width=300" },
  { name: "DeVonta Smith", position: "WR", image: "/placeholder.svg?height=400&width=300" },
  { name: "A.J. Brown", position: "WR", image: "/placeholder.svg?height=400&width=300" },
  { name: "Lane Johnson", position: "OT", image: "/placeholder.svg?height=400&width=300" },
]

export default function PlayerShowcase() {
  return (
    <section id="players" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Super Bowl Heroes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {players.map((player) => (
            <div key={player.name} className="text-center">
              <Image
                src={player.image || "/placeholder.svg"}
                alt={player.name}
                width={300}
                height={400}
                className="rounded-lg shadow-lg mb-4"
              />
              <h3 className="font-bold">{player.name}</h3>
              <p>{player.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

