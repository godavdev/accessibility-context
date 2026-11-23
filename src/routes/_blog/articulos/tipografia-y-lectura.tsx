import { QuotesIcon, TextAaIcon } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"

import { ArticleLayout } from "@/components/blog/article-layout"
import { posts } from "#/lib/posts"

export const Route = createFileRoute("/_blog/articulos/tipografia-y-lectura")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ArticleLayout post={posts[0]}>
      <p className="first-letter:float-left first-letter:mr-2 first-letter:font-heading first-letter:text-5xl first-letter:font-semibold first-letter:leading-9 first-letter:text-primary">
        Hay textos que invitan a quedarse un rato y otros que parecen evitarlo.
        La diferencia rara vez está en lo que se dice, sino en cómo se presenta.
        La tipografía es la voz silenciosa de una página: puede acercarnos al
        contenido o cansarnos antes de leer la primera frase.
      </p>

      <h2 className="pt-2 font-heading text-xl font-semibold tracking-tight text-foreground">
        El tamaño importa (pero no es lo único)
      </h2>
      <p>
        Un cuerpo de texto demasiado pequeño obliga a entrecerrar los ojos y
        rompe el ritmo de lectura. Como referencia, conviene empezar en 16 px o
        más y dejar que la persona ajuste el zoom sin que nada se desborde. Un
        buen interlineado —alrededor de 1,5 veces el tamaño de la letra— da
        espacio suficiente para que los ojos vuelvan a encontrar la siguiente
        línea.
      </p>

      <h2 className="pt-2 font-heading text-xl font-semibold tracking-tight text-foreground">
        Tres ajustes que cambian la experiencia
      </h2>
      <ul className="list-disc space-y-2 pl-5 marker:text-primary">
        <li>
          <strong className="font-semibold text-foreground">Longitud de línea:</strong>{" "}
          entre 45 y 75 caracteres suele ser cómodo; las líneas interminables
          cansan la mirada.
        </li>
        <li>
          <strong className="font-semibold text-foreground">Contraste:</strong>{" "}
          el texto gris claro sobre fondo blanco parece elegante, pero suele
          ser difícil de leer durante varios minutos seguidos.
        </li>
        <li>
          <strong className="font-semibold text-foreground">Peso y estilo:</strong>{" "}
          reserva la negrita para lo importante y evita abusar de la cursiva en
          párrafos largos.
        </li>
      </ul>

      <div className="rounded-4xl border border-border bg-muted/60 px-5 py-5 sm:px-6">
        <div className="flex gap-3">
          <QuotesIcon size={20} className="mt-0.5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted-foreground">
            Una tipografía accesible no es la que gusta a todo el mundo, sino
            la que deja que cada persona lea a su manera.
          </p>
        </div>
      </div>

      <h2 className="pt-2 font-heading text-xl font-semibold tracking-tight text-foreground">
        Dar el control a quien lee
      </h2>
      <p>
        Incluso con una elección cuidada, las preferencias varían: hay personas
        que leen mejor con una fuente con más separación entre caracteres o con
        un tipo de letra pensado para dislexia. Por eso este blog incluye un
        ajuste que cambia toda la tipografía a OpenDyslexic. Ábrelo desde los
        ajustes de accesibilidad de la cabecera: el contenido no cambia, pero la
        forma de leerlo sí.
      </p>
      <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
        <TextAaIcon size={16} />
        El mismo texto, otra manera de leerlo.
      </p>
    </ArticleLayout>
  )
}
