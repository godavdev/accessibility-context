import { useEffect, useState } from "react"

export const MaskGuide = () => {
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
    <div className="fixed w-screen h-screen flex flex-col shrink-0  left-0 top-0 z-50 pointer-events-none ">
      <div
        className=" w-screen bg-black/50"
        style={{ height: mouseY - 10 }}
      ></div>
      <div className="w-screen h-10"></div>
      <div className="flex-1 w-screen bg-black/50"></div>
    </div>
  )
}
