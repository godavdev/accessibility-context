import { create } from "zustand"
import { persist } from "zustand/middleware"
interface AccessibilityStore {
  isDyslexicMode: boolean
  toggleDyslexicMode: () => void
  remarkLinks: boolean
  toggleRemarkLinks: () => void
  lectureGuide: boolean
  toggleLectureGuide: () => void
  maskGuide: boolean
  toggleMaskGuide: () => void
}

export const useAccessibilityStore = create<AccessibilityStore>(
  // persist(
  (set) => ({
    isDyslexicMode: false,
    toggleDyslexicMode: () =>
      set((state) => ({ isDyslexicMode: !state.isDyslexicMode })),
    remarkLinks: false,
    toggleRemarkLinks: () =>
      set((state) => ({ remarkLinks: !state.remarkLinks })),
    lectureGuide: false,
    toggleLectureGuide: () =>
      set((state) => ({ lectureGuide: !state.lectureGuide })),
    maskGuide: false,
    toggleMaskGuide: () => set((state) => ({ maskGuide: !state.maskGuide })),
  }),
  // { name: "accessibility-store" },
  // ),
)
