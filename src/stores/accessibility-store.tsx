import { create } from "zustand"

interface AccessibilityStore {
  isDyslexicMode: boolean
  toggleDyslexicMode: () => void
}

export const useAccessibilityStore = create<AccessibilityStore>((set) => ({
  isDyslexicMode: false,
  toggleDyslexicMode: () =>
    set((state) => ({ isDyslexicMode: !state.isDyslexicMode })),
}))
