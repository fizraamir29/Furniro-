import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F3]">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-6 md:px-12">
          <h1 className="text-3xl font-bold text-center text-[#B88E2F] mb-6">About Furniro</h1>
          <div className="prose max-w-none text-gray-700">
            <p>
            Furniro is your ultimate destination for beautifully crafted, comfortable, and stylish hijabs. We believe that modest fashion should never compromise on elegance. With a passion for both style and culture, we offer a wide variety of hijabs to fit every occasion and personal style.
            </p>
            <p>
              Founded in 2020, Furniro has quickly become a go-to online store for high-quality hijabs. From everyday wear to special occasions, we strive to provide designs that allow you to express your individuality while maintaining the integrity of modest fashion.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#B88E2F]">Our Mission</h2>
            <p>
              Our mission is simple: To offer premium, stylish, and comfortable hijabs that empower individuals to feel confident in their modesty, while also allowing them to showcase their personal style.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#B88E2F]">Our Values</h2>
            <ul className="list-disc pl-6">
              <li><strong>Quality:</strong> We provide hijabs made from the finest fabrics that are both durable and soft on the skin.</li>
              <li><strong>Elegance:</strong> Our designs reflect the beauty of modest fashion, combining modern trends with timeless elegance.</li>
              <li><strong>Customer-Centric:</strong> Your satisfaction is our top priority, and we are committed to providing excellent service every step of the way.</li>
              <li><strong>Sustainability:</strong> We aim to use eco-friendly materials and processes to minimize our environmental impact.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#B88E2F]">Why Choose Furniro?</h2>
            <p>
              At Furniro, we understand the significance of a hijab beyond fashion. It's a statement, a symbol of identity, and an expression of modesty. Our collection is designed to blend fashion with function—ensuring that every hijab is not only stylish but also comfortable, breathable, and versatile for all seasons.
            </p>
            <p>
              Whether you’re looking for a lightweight cotton hijab for the summer or a cozy pashmina for winter, we have something for every occasion. Explore our range and find the perfect hijab to complete your wardrobe.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
