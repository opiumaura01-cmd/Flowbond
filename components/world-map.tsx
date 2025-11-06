"use client"

import { useEffect, useState } from "react"

export function WorldMap() {
  const [connections, setConnections] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setConnections((prev) => {
        const newConnections = [...prev]
        if (newConnections.length < 5) {
          newConnections.push(Math.random())
        } else {
          newConnections.shift()
          newConnections.push(Math.random())
        }
        return newConnections
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg overflow-hidden">
      {/* Simplified world map representation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-2xl">
          {/* Connection lines */}
          {connections.map((connection, index) => (
            <div
              key={index}
              className="absolute w-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse"
              style={{
                left: `${20 + connection * 60}%`,
                top: `${30 + connection * 40}%`,
                height: `${20 + connection * 30}%`,
                transform: `rotate(${connection * 90 - 45}deg)`,
                animationDelay: `${index * 0.5}s`,
              }}
            />
          ))}

          {/* Global presence indicators */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-1000" />
          <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-secondary rounded-full animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-1500" />
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse animation-delay-500" />

          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-primary rounded-full animate-pulse-glow" />
          </div>
        </div>
      </div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-poppins)]">
            Global Automation Network
          </h3>
          <p className="text-muted-foreground">Serving clients across 15+ countries</p>
        </div>
      </div>
    </div>
  )
}
