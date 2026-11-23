import { useAccessibilityStore } from "#/stores/accessibility-store"
import { cn } from "cn"
import type { ReactNode } from "react"
import { LectureGuide } from "./lecture-guide"
import { MaskGuide } from "./mask-guide"

export const AccessibilityStyles = ({ children }: { children: ReactNode }) => {
  const { remarkLinks, isDyslexicMode, lectureGuide, maskGuide } =
    useAccessibilityStore()

  return (
    <div
      className={cn(
        remarkLinks ? "[&_a]:text-blue-500! [&_a]:underline!" : "",
        isDyslexicMode ? "font-dyslexic!" : "",
      )}
    >
      {children}
      {lectureGuide && <LectureGuide />}
      {maskGuide && <MaskGuide />}
    </div>
  )
}
