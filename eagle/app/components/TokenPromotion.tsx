import { Button } from "@/components/ui/button"

export default function TokenPromotion() {
  return (
    <section id="token" className="py-16 bg-green-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Celebrate with Eagles Victory Token!</h2>
        <p className="mb-8">Get your piece of history on pump fun. 100% guaranteed to soar like an eagle!*</p>
        <Button className="bg-yellow-400 text-green-800 hover:bg-yellow-300">Buy EVT on pump fun</Button>
        <p className="mt-4 text-sm">*Not a financial advice. May lose value faster than our opponents.</p>
      </div>
    </section>
  )
}

