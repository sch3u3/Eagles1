import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Eagles 2025 Champs
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="#players" className="hover:text-yellow-300">
            Players
          </Link>
          <Link href="#token" className="hover:text-yellow-300">
            Token
          </Link>
          <Button className="bg-yellow-400 text-green-800 hover:bg-yellow-300 text-sm">Buy EVT on pump fun</Button>
        </nav>
        <div className="flex items-center space-x-4 md:hidden">
          <Button className="bg-yellow-400 text-green-800 hover:bg-yellow-300 text-sm">Buy EVT</Button>
          <button>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}

