"use client"

import { useCart } from "@/hooks/use-cart"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CartPage() {
  const { items, removeItem } = useCart()

  const total = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="flex-grow">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="font-bold">Rp {item.price.toLocaleString()}</p>
                  </div>
                  <Button variant="destructive" onClick={() => removeItem(item.id)}>
                    Remove
                  </Button>
                </div>
              ))}
              <div className="border-t pt-4">
                <p className="text-xl font-bold">Total: Rp {total.toLocaleString()}</p>
                <Button className="mt-4">Proceed to Checkout</Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

