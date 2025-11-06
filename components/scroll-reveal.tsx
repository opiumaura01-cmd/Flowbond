"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "fade" | "zoom"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)"

    switch (direction) {
      case "up":
        return "translate3d(0, 40px, 0) scale(1)"
      case "down":
        return "translate3d(0, -40px, 0) scale(1)"
      case "left":
        return "translate3d(40px, 0, 0) scale(1)"
      case "right":
        return "translate3d(-40px, 0, 0) scale(1)"
      case "zoom":
        return "translate3d(0, 0, 0) scale(0.95)"
      default:
        return "translate3d(0, 0, 0) scale(1)"
    }
  }

  const getOpacity = () => {
    if (direction === "fade") return isVisible ? 1 : 0
    return isVisible ? 1 : 0
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}
