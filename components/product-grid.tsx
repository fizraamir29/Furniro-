import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: 3500000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eCommerce_Website__7C_Web_Page_Design__7C_UI_KIT__7C_Interior_Landing_Page__Community_-c8kKsruUuKICsAIxjmOiVfhYonzroB.png",
    badge: "New",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eCommerce_Website__7C_Web_Page_Design__7C_UI_KIT__7C_Interior_Landing_Page__Community_-c8kKsruUuKICsAIxjmOiVfhYonzroB.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eCommerce_Website__7C_Web_Page_Design__7C_UI_KIT__7C_Interior_Landing_Page__Community_-c8kKsruUuKICsAIxjmOiVfhYonzroB.png",
    badge: "Sale",
  },
  // Add more products...
]

export function ProductGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-red-500" variant="secondary">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="font-bold">Rp {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

