import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Inspiration() {
  return (
    <section className="py-16 bg-[#FCF8F3]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              50+ Beautiful rooms
              <br />
              inspiration
            </h2>
            <p className="text-gray-600">
              Our designers already made a lot of beautiful prototypes of rooms that inspire you
            </p>
            <Button className="bg-[#B88E2F] hover:bg-[#9A7626] text-white px-8">Explore More</Button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://i.pinimg.com/236x/4e/63/d3/4e63d3c3610d8584b2669fa7942d904a.jpg"
                alt="Room inspiration"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <Image
                src="https://img.freepik.com/free-photo/modern-muslim-woman-hijab-office-room_285396-11089.jpg"
                alt="Room inspiration"
                width={300}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

