// import { AccessibilityProvider } from "#/provider/accessibility-provider"
import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_a")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    // <AccessibilityProvider>
    <Outlet />
    // </AccessibilityProvider>
  )
}
