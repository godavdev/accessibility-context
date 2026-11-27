import { PlayIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Product } from "#/data/products-data"

interface ProductCardProps {
  product: Product
  size?: "default" | "large"
  clickable?: boolean
}

export function ProductCard({
  product,
  size = "default",
  clickable = true,
}: ProductCardProps) {
  const isLarge = size === "large"

  const card = (
    <Card
      className={cn(
        "transition-shadow",
        clickable && "group-hover:shadow-lg group-hover:ring-primary/30",
        isLarge && "scale-125"
      )}
      style={{ viewTransitionName: `product-card-${product.id}` }}
    >
      <CardContent className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div
          className="relative flex aspect-video w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl sm:w-56"
          style={{ backgroundColor: product.color }}
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-black/40 text-white shadow-sm">
            <PlayIcon size={20} weight="fill" aria-hidden="true" />
          </span>
        </div>
        <div className="min-w-0 space-y-1.5">
          <CardTitle className="text-lg text-balance">{product.name}</CardTitle>
          <CardDescription className="leading-6 text-pretty">
            {product.description}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  )

  if (!clickable) return card

  return (
    <Link
      viewTransition
      to="/products/$productId"
      params={{ productId: product.id }}
      className="group block rounded-4xl focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      {card}
    </Link>
  )
}
