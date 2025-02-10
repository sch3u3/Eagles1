import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Eagles winning the Super Bowl"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Eagles Soar to Victory!</h1>
          <p className="text-xl md:text-2xl">2025 Super Bowl Champions</p>
        </div>
      </div>
    </section>
  )
}

