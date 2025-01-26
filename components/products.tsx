"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Share2, RefreshCw, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  discount?: number
  category: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Luxurious Satin Hijab",
    description: "Stylish Hijab",
    price: 2500,
    image: "/FF2.jpg",
    category: "chair",
    discount: 30,
  },
  {
    id: "2",
    name: "Everyday Cotton Hijab",
    description: "Today Trendy",
    price: 25000,
    image: "/s2.jpg",
    category: "chair",
  },
  // Add more products...
]

export function Products() {
  const [visibleProducts, setVisibleProducts] = React.useState(8)
  const { addItem } = useCart()
  const { items: wishlistItems, addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlist()

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 4)
  }

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
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleProducts).map((product) => (
            <Card key={product.id} className="group relative overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.discount && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    -{product.discount}%
                  </span>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    <Button size="icon" variant="secondary" onClick={() => addItem(product)}>
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                    <Button size="icon" variant="secondary">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                    <Button size="icon" variant="secondary">
                      <RefreshCw className="h-4 w-4" />
                      <span className="sr-only">Compare</span>
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
                <p className="font-bold">Rp {product.price.toLocaleString()}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={loadMore} className="px-8">
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

