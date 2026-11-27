import { createFileRoute } from "@tanstack/react-router"
import { startTransition, useState, ViewTransition } from "react"

import { ProductCard } from "@/components/products/product-card"
import { Button } from "#/components/ui/button"
import { products } from "#/data/products-data"

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [orderedProducts, setOrderedProducts] = useState(products)
  const [firstElementIsBig, setFirstElementIsBig] = useState(false)

  const handleRandomizeOrder = () => {
    startTransition(() => {
      setOrderedProducts((current) =>
        [...current].sort(() => Math.random() - 0.5)
      )
    })
  }

  const handleToggleFirstElementSize = () => {
    startTransition(() => {
      setFirstElementIsBig((prev) => !prev)
    })
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 px-4 py-10 sm:px-6">
      <header className="space-y-2">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          Productos
        </h1>
        <p className="text-sm text-muted-foreground">
          {orderedProducts.length} productos disponibles.
        </p>
        <Button onClick={handleRandomizeOrder}>Ordenar random</Button>
        <Button onClick={handleToggleFirstElementSize}>
          {firstElementIsBig ? "Reducir" : "Aumentar"} el tamaño del primer elemento
        </Button>
      </header>

      <ul className="space-y-4">
        {orderedProducts.map((product, index) => (
          <ViewTransition key={product.id} >
            <li>
              <ProductCard
                product={product}
                size={firstElementIsBig && index === 0 ? "large" : "default"}
              />
            </li>
          </ViewTransition>
        ))}
      </ul>
    </div>
  )
}
