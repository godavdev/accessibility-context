import { useAccessibilityStore } from "#/stores/accessibility-store"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_a/")({ component: Home })

function Home() {
  const { isDyslexicMode, toggleDyslexicMode } = useAccessibilityStore()

  return (
    <div className={isDyslexicMode ? "font-dyslexic" : ""}>
      <span onClick={toggleDyslexicMode}>
        Texto de ejemplo para probar la fuente dyslexic. Haga clic en cualquier
        lugar para alternar el modo disléxico.
      </span>
      <Link to="/new">Ir a la página /new</Link>
    </div>
  )
}
