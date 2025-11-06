import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type React from "react"

interface IndustryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  automations: string[]
  caseStudy: {
    metric: string
    result: string
  }
  bgGradient: string
}

export function IndustryCard({ title, description, icon, automations, caseStudy, bgGradient }: IndustryCardProps) {
  return (
    <Card
      className={`p-8 h-full ${bgGradient} border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-lg text-primary">{icon}</div>
          <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-poppins)]">{title}</h3>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-foreground mb-3">Key Automations:</h4>
          <div className="flex flex-wrap gap-2">
            {automations.map((automation) => (
              <Badge key={automation} variant="secondary" className="text-sm">
                {automation}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-secondary/10 rounded-lg p-4 mb-6 flex-grow">
          <div className="text-3xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">
            {caseStudy.metric}
          </div>
          <div className="text-sm text-muted-foreground">{caseStudy.result}</div>
        </div>

        <Button className="w-full" asChild>
          <Link href="/contact">
            Get Industry-Specific Solution
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  )
}
