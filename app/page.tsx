import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { RoomInspiration } from "@/components/room-inspiration"
import { SocialFeed } from "@/components/social-feed"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <RoomInspiration />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  )
}

