import Image from "next/image"
import { Button } from "@/components/ui/button"

export function RoomInspiration() {
  return (
    <section className="py-16 md:py-24 bg-[#FCF8F3]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              50+ Beautiful rooms
              <br />
              inspiration
            </h2>
            <p className="text-gray-600 max-w-[500px]">
              Our designers already made a lot of beautiful prototypes of rooms that inspire you
            </p>
            <Button size="lg" className="bg-[#B88E2F] hover:bg-[#A67D2E] text-white px-8">
              Explore More
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image src="/T1.jpg" alt="Room inspiration" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image src="T2.jpg" alt="Room inspiration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

