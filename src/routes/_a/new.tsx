import { useAccessibilityContext } from "#/provider/accessibility-provider"
import { useAccessibilityStore } from "#/stores/accessibility-store"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_a/new")({
  component: RouteComponent,
})

function RouteComponent() {
  const { isDyslexicMode } = useAccessibilityStore()

  return (
    <div className={isDyslexicMode ? "font-dyslexic" : ""}>Hello "/new"!</div>
  )
}
