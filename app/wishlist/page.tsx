"use client"

import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function WishlistPage() {
  const { items, removeItem } = useWishlist()
  const { addItem: addToCart } = useCart()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
          {items.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 space-y-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="rounded-md w-full object-cover"
                  />
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="font-bold">Rp {item.price.toLocaleString()}</p>
                  <div className="flex space-x-2">
                    <Button onClick={() => addToCart(item)}>Add to Cart</Button>
                    <Button variant="outline" onClick={() => removeItem(item.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

