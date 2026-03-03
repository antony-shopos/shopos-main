"use client"

import { useEffect, useRef } from "react"

interface FluidDotBackgroundProps {
  baseOpacity?: number
  activeOpacity?: number
  gap?: number
  influenceRadius?: number
}

export default function FluidDotBackground({
  baseOpacity = 0.08,
  activeOpacity = 0.35,
  gap = 18,
  influenceRadius = 120,
}: FluidDotBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")!
    let animationFrameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          const dx = x - mouse.current.x
          const dy = y - mouse.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          const influence =
            Math.max(0, influenceRadius - distance) / influenceRadius

          const size = 1.5 + influence * 2.5
          const opacity =
            baseOpacity + influence * (activeOpacity - baseOpacity)

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0,0,0,${opacity})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }

    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [baseOpacity, activeOpacity, gap, influenceRadius])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  )
}