"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Building2 } from "lucide-react"

interface ServiceFlipCardProps {
  title: string
  problem: string
  solution: string
  value: string
  industries: string[]
  buildTime: string
  savings: string
  icon: React.ReactNode
}

export function ServiceFlipCard({
  title,
  problem,
  solution,
  value,
  industries,
  buildTime,
  savings,
  icon,
}: ServiceFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="group perspective-1000 h-80 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card - Problem */}
        <Card
          className="absolute inset-0 w-full h-full backface-hidden glassmorphism border-2 border-primary/30 hover:border-primary/70 transition-all duration-300 hover:glow-primary"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg text-primary">{icon}</div>
                <h3 className="text-xl font-bold gradient-text font-[family-name:var(--font-poppins)]">{title}</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed font-[family-name:var(--font-manrope)]">
                {problem}
              </p>
            </div>
            <div className="text-center">
              <div className="text-sm text-accent font-medium">Click to see solution</div>
            </div>
          </div>
        </Card>

        {/* Back of card - Solution */}
        <Card
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/50 glow-primary"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-3 font-[family-name:var(--font-poppins)]">{title}</h3>
              <p className="text-foreground mb-4 leading-relaxed font-[family-name:var(--font-manrope)]">{solution}</p>
              <div className="text-lg font-semibold text-accent mb-4">{value}</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="h-4 w-4 text-primary" />
                <div className="flex flex-wrap gap-1">
                  {industries.slice(0, 2).map((industry) => (
                    <Badge
                      key={industry}
                      variant="secondary"
                      className="text-xs bg-primary/20 text-primary border-primary/30"
                    >
                      {industry}
                    </Badge>
                  ))}
                  {industries.length > 2 && (
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      +{industries.length - 2}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground font-[family-name:var(--font-manrope)]">{buildTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-accent" />
                  <span className="text-accent font-medium font-[family-name:var(--font-manrope)]">{savings}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
