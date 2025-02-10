import Header from "./components/Header"
import Hero from "./components/Hero"
import PlayerShowcase from "./components/PlayerShowcase"
import TokenPromotion from "./components/TokenPromotion"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PlayerShowcase />
        <TokenPromotion />
      </main>
      <Footer />
    </div>
  )
}

