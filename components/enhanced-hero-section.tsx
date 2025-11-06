"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function EnhancedHeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Automate to Innovate."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowCursor(false), 1000)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5">
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,400 Q250,300 500,400 T1000,400"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float ${i % 2 === 0 ? "bg-primary" : "bg-accent/40"}`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${15 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}

        <div
          className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-primary/20 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-accent/20 rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="fade" delay={0}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
              <span className="text-primary">
                {displayText}
                {showCursor && <span className="animate-pulse text-accent">|</span>}
              </span>
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={800}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We transform repetitive work into strategic advantage with{" "}
            <span className="text-primary font-semibold">Robotic Process Automation (RPA)</span>. Free your team to
            focus on growth while we handle the mundane.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
              asChild
            >
              <Link href="/roi-calculator">
                <Play className="mr-2 h-5 w-5" />
                Calculate ROI
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1600}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={75} suffix="%" />
              </div>
              <div className="text-muted-foreground">Time Savings</div>
            </div>
            <div className="p-6 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={380} suffix="%" />
              </div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            <div className="p-6 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-muted-foreground">Hours Reclaimed Monthly</div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Enhanced Floating CTA Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-card/95 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block animate-pulse">Ready to automate?</span>
            <Button size="sm" className="hover:scale-105 transition-transform" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
