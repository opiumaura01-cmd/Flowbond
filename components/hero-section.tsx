"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Automate to Innovate."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-secondary rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-primary/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-secondary/50 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-4 h-4 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            <span className="inline-block">
              {displayText}
              <span className="animate-pulse text-secondary">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We transform repetitive work into strategic advantage with{" "}
            <span className="text-secondary font-semibold">Robotic Process Automation (RPA)</span>. Free your team to
            focus on growth while we handle the mundane.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow" asChild>
              <Link href="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent" asChild>
              <Link href="/roi-calculator">
                <Play className="mr-2 h-5 w-5" />
                Calculate ROI
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">75%</div>
              <div className="text-muted-foreground">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">380%</div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">200+</div>
              <div className="text-muted-foreground">Hours Reclaimed Monthly</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-card/95 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">Ready to automate?</span>
            <Button size="sm" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
