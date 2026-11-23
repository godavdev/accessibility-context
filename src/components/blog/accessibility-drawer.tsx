import { TextAaIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"
import { useIsMobile } from "@/hooks/use-mobile"
import { useAccessibilityStore } from "#/stores/accessibility-store"

export function AccessibilityDrawer() {
  const {
    isDyslexicMode,
    toggleDyslexicMode,
    remarkLinks,
    toggleRemarkLinks,
    lectureGuide,
    toggleLectureGuide,
  } = useAccessibilityStore()
  const isMobile = useIsMobile()

  return (
    <Drawer
      swipeDirection={isMobile ? "down" : "left"}
      showSwipeHandle
    >
      <DrawerTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Abrir ajustes de accesibilidad"
          />
        }
      >
        <TextAaIcon className="size-4" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Ajustes de lectura</DrawerTitle>
          <DrawerDescription>
            Cambia la tipografía para que el texto sea más cómodo de leer.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="dyslexic-mode">Modo disléxico</FieldLabel>
              <FieldDescription>
                Usa la fuente OpenDyslexic en todo el sitio.
              </FieldDescription>
            </FieldContent>
            <Switch
              id="dyslexic-mode"
              checked={isDyslexicMode}
              onCheckedChange={toggleDyslexicMode}
            />
          </Field>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="dyslexic-mode">Remarcar enlaces</FieldLabel>
              <FieldDescription>
                Resalta los enlaces con un color y estilo distintos.
              </FieldDescription>
            </FieldContent>
            <Switch
              id="remark-links"
              checked={remarkLinks}
              onCheckedChange={toggleRemarkLinks}
            />
          </Field>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="lecture-guide">Guía de lectura</FieldLabel>
              <FieldDescription>
                Muestra una guía visual para ayudarte a seguir el texto.
              </FieldDescription>
            </FieldContent>
            <Switch
              id="lecture-guide"
              checked={lectureGuide}
              onCheckedChange={toggleLectureGuide}
            />
          </Field>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>
            Cerrar
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
