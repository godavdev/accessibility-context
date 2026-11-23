import { useEffect, useState } from "react"

export const LectureGuide = () => {
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseY(event.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  })

  return (
    <div
      className="fixed w-screen h-2 bg-primary left-0 top-0 z-50 pointer-events-none"
      style={{ top: mouseY }}
    ></div>
  )
}
