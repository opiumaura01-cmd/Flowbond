"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  timeframe: string
  roi: string
}

export function CaseStudyCard({ title, industry, challenge, solution, results, timeframe, roi }: CaseStudyCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className="p-8 h-full border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{industry}</Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {timeframe}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">{title}</h3>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-foreground mb-3">Challenge:</h4>
          <p className="text-muted-foreground leading-relaxed">{challenge}</p>
        </div>

        {showDetails && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-3">Solution:</h4>
            <p className="text-muted-foreground leading-relaxed">{solution}</p>
          </div>
        )}

        <div className="mb-6 flex-grow">
          <h4 className="text-lg font-semibold text-foreground mb-4">Results:</h4>
          <div className="grid grid-cols-1 gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-secondary/10 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  <div className="text-2xl font-bold text-secondary font-[family-name:var(--font-poppins)]">
                    {result.metric}
                  </div>
                  <div className="text-sm font-medium text-foreground">{result.value}</div>
                </div>
                <div className="text-sm text-muted-foreground">{result.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 bg-primary/10 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            <div>
              <div className="text-lg font-bold text-primary">ROI: {roi}</div>
              <div className="text-sm text-muted-foreground">Return on Investment</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide Details" : "View Solution Details"}
          </Button>
          <Button className="w-full">
            Get Similar Results
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
