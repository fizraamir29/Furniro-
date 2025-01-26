import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Everyday Hijabs ",
    image: "/FF1.jpg",
    href: "/category/dining",
  },
  {
    name: "Sports Hijabs",
    image: "/FF2.jpg",
    href: "/category/living",
  },
  {
    name: "Party Hijabs",
    image: "/FF3.jpg",
    href: "/category/bedroom",
  },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Redefining Modesty with Style</h2>
          <p className="text-gray-600">Explore our versatile range of premium hijabs that reflect your individuality while keeping you effortlessly chic</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

