import { createContext, useContext, useState, type ReactNode } from "react"

interface AccessibilityContextValue {
  isDyslexicMode: boolean
  toggleDyslexicMode: () => void
}

const context = createContext<AccessibilityContextValue | undefined>(undefined)

export const useAccessibilityContext = () => {
  const contextValue = useContext(context)
  if (!contextValue) {
    throw new Error(
      "useAccessibilityContext must be used within an AccessibilityProvider",
    )
  }
  return contextValue
}

export const AccessibilityProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isDyslexicMode, setIsDyslexicMode] = useState(false)

  const toggleDyslexicMode = () => {
    setIsDyslexicMode((prev) => !prev)
  }

  return (
    <context.Provider value={{ isDyslexicMode, toggleDyslexicMode }}>
      {children}
    </context.Provider>
  )
}
