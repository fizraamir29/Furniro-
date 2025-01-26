"use client"

import * as React from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface WishlistStore {
  items: any[]
  addItem: (item: any) => void
  removeItem: (id: string) => void
  clearWishlist: () => void
}

const useWishlistStore = create<WishlistStore>()(
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
      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage",
    },
  ),
)

export function useWishlist() {
  const store = useWishlistStore()

  React.useEffect(() => {
    const handleStorage = () => {
      store.clearWishlist()
    }

    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [store])

  return store
}

