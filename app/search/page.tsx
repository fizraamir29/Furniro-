"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Products } from "@/components/products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  return (
    <main className="flex-grow">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Search Results for &quot;{query}&quot;</h1>
        <Products />
      </div>
    </main>
  )
}

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchContent />
      </Suspense>
      <Footer />
    </div>
  )
}

