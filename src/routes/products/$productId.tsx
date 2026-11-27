import { ArrowLeftIcon } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"

import { ProductCard } from "@/components/products/product-card"
import { products } from "#/data/products-data"

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { productId } = Route.useParams()
  const product = products.find((item) => item.id === productId)

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-10 sm:px-6">
      <Link
        to="/products"
        viewTransition
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        <ArrowLeftIcon size={16} aria-hidden="true" />
        Volver a productos
      </Link>

      {product ? (
        <ProductCard product={product} size="large" clickable={false} />
      ) : (
        <div className="space-y-2 rounded-4xl border border-border bg-card px-6 py-12 text-center shadow-md">
          <h1 className="font-heading text-2xl font-semibold">
            Producto no encontrado
          </h1>
          <p className="text-sm text-muted-foreground">
            No existe un producto con el id &quot;{productId}&quot;.
          </p>
        </div>
      )}
    </div>
  )
}
