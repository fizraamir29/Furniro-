"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  description: string
  price: string // Keep price as a string for the initial input
  image: string
  category: string
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: " Luxurious Satin Hijab",
    description: "Elevate your elegance with this luxurious satin hijab. Soft, smooth, and perfect for special occasions or formal wear. Available in a range of stunning colors, it adds a sophisticated touch to any outfit.",
    price: "$25.99",
    image: "/s1.jpg",
    category: "Hijabs",
  },
  {
    id: "2",
    name: "Everyday Cotton Hijab",
    description: "Comfortable, breathable, and easy to wear—this everyday cotton hijab is perfect for daily use. Its lightweight fabric keeps you cool and stylish throughout the day. A must-have for every wardrobe.",
    price: "$15.99",
    image: "/s2.jpg",
    category: "Hijabs",
  },
  {
    id: "3",
    name: "Chiffon Elegance Hijab",
    description: "The Chiffon Elegance Hijab combines grace and comfort. Made from high-quality chiffon, it offers a smooth drape and a delicate, flowing finish. Perfect for both casual and formal occasions",
    price: "$18.99",
    image: "/s3.jpg",
    category: "Hijabs",
  },
  {
    id: "4",
    name: "Premium Pashmina Hijab",
    description: "Stay warm and chic with our premium pashmina hijab. Soft and cozy, this hijab is ideal for cooler months or evening events. Its rich texture and subtle shine make it a standout piece. ",
    price: "$32.99",
    image: "/s4.jpg",
    category: "decoration",
  },
]

export function FeaturedProducts() {
  const { addItem } = useCart()
  const { items: wishlistItems, addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlist()

  const toggleWishlist = (product: Product) => {
    const isInWishlist = wishlistItems.some((item) => item.id === product.id)
    if (isInWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group relative overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    <Button size="icon" variant="secondary" onClick={() => addItem(product)}>
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                    <Button size="icon" variant="secondary" onClick={() => toggleWishlist(product)}>
                      <Heart
                        className={cn(
                          "h-4 w-4",
                          wishlistItems.some((item) => item.id === product.id) && "fill-current text-red-500",
                        )}
                      />
                      <span className="sr-only">Add to wishlist</span>
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <p className="font-bold">Rp {parseFloat(product.price.replace('$', '')).toLocaleString()}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/shop">
            <Button variant="outline" className="px-8">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
