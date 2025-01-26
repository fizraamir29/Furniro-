"use client"

import type * as React from "react"

export function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

