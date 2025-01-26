import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Products } from "@/components/products"

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6">Shop Our Collection</h1>
          <Products />
        </div>
      </main>
      <Footer />
    </div>
  )
}

