import Image from "next/image";

const categories = [
  {
    title: "Hijab",
    image: "/pic1.avif", // Ensure pic1.avif is in the `public` folder
  },
  {
    title: "Scarf",
    image: "/pic2.jpg", // Ensure pic2.jpg is in the `public` folder
  },
  {
    title: "Abaya",
    image: "/pic3.jpg", // Ensure pic3.jpg is in the `public` folder
  },
];

export function BrowseRange() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse Fizra</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="group relative">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
