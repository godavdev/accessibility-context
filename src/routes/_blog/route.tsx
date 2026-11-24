import { BookOpenIcon, NewspaperIcon, TextAaIcon } from "@phosphor-icons/react"
import { createFileRoute, Link, Outlet } from "@tanstack/react-router"

import { AccessibilityDrawer } from "@/components/blog/accessibility-drawer"
import { cn } from "@/lib/utils"
import { useAccessibilityStore } from "#/stores/accessibility-store"
import { AccessibilityStyles } from "#/components/accessibility-styles"
import { LectureGuide } from "#/components/lecture-guide"

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/articulos/tipografia-y-lectura", label: "Tipografía" },
  { to: "/articulos/diseno-para-todos", label: "Diseño inclusivo" },
] as const

export const Route = createFileRoute("/_blog")({
  component: BlogLayout,
})

function BlogLayout() {
  return (
    <AccessibilityStyles>
      <div
        className={cn(
          "flex min-h-screen flex-col bg-background text-foreground",
        )}
      >
        <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <Link
              to="/"
              className="group flex items-center gap-3 rounded-2xl"
            >
              <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:-rotate-6">
                <BookOpenIcon
                  size={20}
                  weight="fill"
                />
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-sm font-semibold tracking-tight">
                  Entre Líneas
                </span>
                <span className="block text-xs text-muted-foreground">
                  Un blog sobre accesibilidad
                </span>
              </span>
            </Link>

            <AccessibilityDrawer />

            <nav
              aria-label="Navegación principal"
              className="flex w-full flex-wrap items-center gap-1 border-t border-border pt-3"
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
                >
                  {item.to === "/" ? (
                    <NewspaperIcon size={15} />
                  ) : (
                    <TextAaIcon size={15} />
                  )}
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <div className=" page-content  flex flex-1 flex-col justify-center items-center">
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
          <Outlet />
        </main>
        </div>

        <footer className="border-t border-border bg-muted/40">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-6">
            <p>
              <span className="font-medium text-foreground">Entre Líneas</span>{" "}
              · Notas para una web más legible.
            </p>
            <nav
              aria-label="Enlaces del pie de página"
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="transition-colors hover:text-foreground hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </div>
    </AccessibilityStyles>
  )
}
