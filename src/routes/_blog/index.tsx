import {
  ArrowRightIcon,
  BookOpenIcon,
  CalendarBlankIcon,
  HighlighterIcon,
  NewspaperIcon,
  SparkleIcon,
  TextAaIcon,
} from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { posts } from "#/lib/posts"

export const Route = createFileRoute("/_blog/")({
  component: Home,
})

const postIcons = [TextAaIcon, HighlighterIcon] as const

function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-4xl border border-border bg-card px-6 py-12 text-center shadow-md ring-1 ring-foreground/5 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl space-y-6">
          <Badge variant="outline" className="gap-1.5 px-3 py-1 text-muted-foreground">
            <SparkleIcon data-icon="inline-start" className="text-primary" weight="fill" />
            Blog de accesibilidad
          </Badge>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Palabras que se pueden{" "}
            <span className="text-primary">leer</span>
          </h1>
          <p className="text-base leading-7 text-muted-foreground text-pretty sm:text-lg">
            Ideas sencillas sobre tipografía, diseño y accesibilidad. Una
            pequeña bitácora para recordar que leer bien es un derecho, no un
            extra.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#articulos" className={buttonVariants({ size: "lg" })}>
              Explorar artículos
              <ArrowRightIcon data-icon="inline-end" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="articulos" className="space-y-6 scroll-mt-36">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="space-y-1">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Artículos recientes
            </h2>
            <p className="text-sm text-muted-foreground">
              Dos lecturas breves para empezar.
            </p>
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            <NewspaperIcon data-icon="inline-start" />
            {posts.length} publicaciones
          </Badge>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post, index) => {
            const Icon = postIcons[index] ?? BookOpenIcon
            return (
              <Link key={post.to} to={post.to} className="group block">
                <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:ring-primary/30">
                  <CardHeader>
                    <span className="mb-3 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={22} />
                    </span>
                    <CardTitle className="text-lg text-balance">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="leading-6">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto flex-wrap items-center justify-between gap-2 pt-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarBlankIcon size={14} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-primary">
                      Leer artículo
                      <ArrowRightIcon
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      <section>
        <Card size="sm" className="bg-primary/5 ring-primary/10">
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-background text-primary shadow-sm">
                <BookOpenIcon size={20} />
              </span>
              <div className="space-y-1">
                <h2 className="font-heading text-base font-semibold">
                  Pequeños cambios, grandes diferencias
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  Aumentar el interlineado o elegir otra fuente puede cambiar
                  por completo la experiencia de lectura. Pruébalo desde los
                  ajustes de accesibilidad de la cabecera.
                </p>
              </div>
            </div>
            <Link
              to="/articulos/diseno-para-todos"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Descubrir cómo
              <ArrowRightIcon data-icon="inline-end" className="size-4" />
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
