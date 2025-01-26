"use client"

import * as React from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface CartStore {
  items: any[]
  addItem: (item: any) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
)

export function useCart() {
  const store = useCartStore()

  React.useEffect(() => {
    const handleStorage = () => {
      store.clearCart()
    }

    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [store])

  return store
}

