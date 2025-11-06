"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const processSteps = [
  {
    number: 1,
    title: "Audit",
    description: "We analyze your current processes to identify the highest-impact automation opportunities.",
    color: "primary",
  },
  {
    number: 2,
    title: "Prototype",
    description: "We build a working prototype to validate the solution and demonstrate ROI potential.",
    color: "secondary",
  },
  {
    number: 3,
    title: "Scale",
    description: "We deploy the full solution with comprehensive testing and team training.",
    color: "primary",
  },
  {
    number: 4,
    title: "Support",
    description: "We provide ongoing monitoring, optimization, and support to maximize your ROI.",
    color: "secondary",
  },
]

export function ProcessTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps one by one
          processSteps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index])
            }, index * 300)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full hidden md:block">
        <div
          className="w-full bg-gradient-to-b from-primary to-secondary transition-all duration-2000 ease-out"
          style={{
            height: `${(visibleSteps.length / processSteps.length) * 100}%`,
          }}
        />
      </div>

      <div className="space-y-12">
        {processSteps.map((step, index) => (
          <div
            key={step.number}
            className={`flex items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } transition-all duration-700 ${
              visibleSteps.includes(index) ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
          >
            {/* Content */}
            <div className="flex-1">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {visibleSteps.includes(index) ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <span className="text-xl font-bold">{step.number}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-poppins)]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            </div>

            {/* Timeline dot */}
            <div className="hidden md:block relative z-10">
              <div
                className={`w-6 h-6 rounded-full border-4 border-background transition-all duration-500 ${
                  visibleSteps.includes(index)
                    ? step.color === "primary"
                      ? "bg-primary"
                      : "bg-secondary"
                    : "bg-border"
                }`}
              />
            </div>

            {/* Spacer for alternating layout */}
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  )
}
