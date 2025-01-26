import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-[#FFF9F3] overflow-hidden">
      <div className="container relative z-10 flex items-center justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"> {/* Increased gap */}
          {/* Left Content */}
          <div className="space-y-3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <p className="text-sm uppercase tracking-wider text-gray-700">
              New Arrival
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#B88E2F] leading-snug">
              Discover Our
              <br />
              New Collection
            </h1>
            <p className="text-gray-600 max-w-[450px] leading-normal">
              Discover our exclusive collection of high-quality scarves, designed to bring elegance and warmth to any occasion.
            </p>
            <Button
              size="lg"
              className="bg-[#B88E2F] hover:bg-[#A67D2E] text-white px-6 py-2"
            >
              BUY NOW
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center">
            <Image
              src="/B1.png" // Replace with your image path
              alt="Modern furniture showcase"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
