import { EyeIcon, HighlighterIcon, SparkleIcon } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"

import { ArticleLayout } from "@/components/blog/article-layout"
import { buttonVariants } from "@/components/ui/button"
import { posts } from "#/lib/posts"

export const Route = createFileRoute("/_blog/articulos/diseno-para-todos")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ArticleLayout post={posts[1]}>
      <p className="first-letter:float-left first-letter:mr-2 first-letter:font-heading first-letter:text-5xl first-letter:font-semibold first-letter:leading-9 first-letter:text-primary">
        Diseñar para todas las personas suena ambicioso, pero casi siempre se
        traduce en decisiones muy concretas: dejar espacio, usar palabras claras
        y no dar por hecho que todo el mundo ve, o lee, de la misma forma.
      </p>

      <h2 className="pt-2 font-heading text-xl font-semibold tracking-tight text-foreground">
        La claridad también es una forma de cuidado
      </h2>
      <p>
        Un botón con texto explícito, un mensaje de error que explica qué ha
        pasado o un enlace con sentido fuera de contexto son detalles pequeños.
        Sin embargo, son los que permiten que alguien navegue con un lector de
        pantalla, con el teclado o con poca luz sin perderse por el camino.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 rounded-4xl border border-border bg-card p-5 shadow-sm ring-1 ring-foreground/5">
          <EyeIcon size={20} className="text-primary" />
          <h3 className="font-heading text-base font-semibold">Pensar en la vista</h3>
          <p className="text-sm leading-6 text-muted-foreground">
            Mantén contraste suficiente y no transmitas información solo
            mediante el color.
          </p>
        </div>
        <div className="space-y-2 rounded-4xl border border-border bg-card p-5 shadow-sm ring-1 ring-foreground/5">
          <HighlighterIcon size={20} className="text-primary" />
          <h3 className="font-heading text-base font-semibold">Pensar en la lectura</h3>
          <p className="text-sm leading-6 text-muted-foreground">
            Usa frases cortas y estructura el contenido con títulos que
            realmente aporten contexto.
          </p>
        </div>
      </div>

      <h2 className="pt-2 font-heading text-xl font-semibold tracking-tight text-foreground">
        Tres hábitos que puedes aplicar hoy
      </h2>
      <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-primary">
        <li>
          Recorre tu página solo con el tabulador: ¿se ve siempre dónde estás?
        </li>
        <li>
          Aumenta el zoom al 200 %: ¿se sigue leyendo todo sin desplazamiento
          horizontal?
        </li>
        <li>
          Lee los enlaces en aislamiento: ¿se entiende su destino sin ver el
          resto del texto?
        </li>
      </ol>

      <div className="rounded-4xl border border-primary/20 bg-primary/5 px-5 py-5 sm:px-6">
        <div className="flex gap-3">
          <SparkleIcon size={20} className="mt-0.5 shrink-0 text-primary" weight="fill" />
          <p className="text-sm leading-6 text-muted-foreground">
            La accesibilidad no es una lista de requisitos al final del
            proyecto: es una manera de tomar decisiones desde el principio.
          </p>
        </div>
      </div>

      <h2 className="pt-2 font-heading text-xl font-semibold tracking-tight text-foreground">
        Seguir practicando
      </h2>
      <p>
        No hace falta cambiarlo todo de una vez. Empieza por un componente,
        observa cómo se siente y sigue ajustando. Si quieres otra perspectiva,
        la primera entrada de este blog trata sobre la tipografía y cómo un
        simple cambio de fuente puede hacer que un texto vuelva a resultar
        cómodo.
      </p>
      <Link
        to="/articulos/tipografia-y-lectura"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Leer sobre tipografía
      </Link>
    </ArticleLayout>
  )
}
