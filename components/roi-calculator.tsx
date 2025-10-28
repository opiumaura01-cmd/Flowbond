"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calculator, TrendingUp, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

interface CalculatorInputs {
  employees: number
  hoursPerWeek: number
  hourlyWage: number
  errorRate: number
  automationCost: number
}

interface CalculatorResults {
  weeklyTimeSavings: number
  monthlyCostSavings: number
  annualSavings: number
  roi: number
  paybackMonths: number
  hoursReclaimed: number
}

export function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 5,
    hoursPerWeek: 20,
    hourlyWage: 25,
    errorRate: 10,
    automationCost: 15000,
  })

  const [results, setResults] = useState<CalculatorResults>({
    weeklyTimeSavings: 0,
    monthlyCostSavings: 0,
    annualSavings: 0,
    roi: 0,
    paybackMonths: 0,
    hoursReclaimed: 0,
  })

  const [animatedResults, setAnimatedResults] = useState<CalculatorResults>(results)

  useEffect(() => {
    // Calculate results
    const weeklyTimeSavings = inputs.employees * inputs.hoursPerWeek * 0.75 // 75% automation efficiency
    const weeklyCostSavings = weeklyTimeSavings * inputs.hourlyWage
    const weeklyErrorSavings = (inputs.employees * inputs.hoursPerWeek * inputs.hourlyWage * inputs.errorRate) / 100
    const totalWeeklySavings = weeklyCostSavings + weeklyErrorSavings

    const monthlyCostSavings = totalWeeklySavings * 4.33 // Average weeks per month
    const annualSavings = monthlyCostSavings * 12
    const roi = ((annualSavings - inputs.automationCost) / inputs.automationCost) * 100
    const paybackMonths = inputs.automationCost / monthlyCostSavings
    const hoursReclaimed = weeklyTimeSavings * 52 // Annual hours

    const newResults = {
      weeklyTimeSavings,
      monthlyCostSavings,
      annualSavings,
      roi,
      paybackMonths,
      hoursReclaimed,
    }

    setResults(newResults)

    // Animate results
    const animationDuration = 1000
    const steps = 60
    const stepDuration = animationDuration / steps

    let step = 0
    const animate = () => {
      if (step <= steps) {
        const progress = step / steps
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)

        setAnimatedResults({
          weeklyTimeSavings: newResults.weeklyTimeSavings * easeOutQuart,
          monthlyCostSavings: newResults.monthlyCostSavings * easeOutQuart,
          annualSavings: newResults.annualSavings * easeOutQuart,
          roi: newResults.roi * easeOutQuart,
          paybackMonths: newResults.paybackMonths * easeOutQuart,
          hoursReclaimed: newResults.hoursReclaimed * easeOutQuart,
        })

        step++
        setTimeout(animate, stepDuration)
      }
    }

    animate()
  }, [inputs])

  const updateInput = (key: keyof CalculatorInputs, value: number[]) => {
    setInputs((prev) => ({ ...prev, [key]: value[0] }))
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Controls */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-primary font-[family-name:var(--font-poppins)]">
              Calculate Your ROI
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-foreground">Number of Employees</label>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {inputs.employees}
                </Badge>
              </div>
              <Slider
                value={[inputs.employees]}
                onValueChange={(value) => updateInput("employees", value)}
                max={50}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>1</span>
                <span>50</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-foreground">Hours/Week on Manual Tasks</label>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {inputs.hoursPerWeek}h
                </Badge>
              </div>
              <Slider
                value={[inputs.hoursPerWeek]}
                onValueChange={(value) => updateInput("hoursPerWeek", value)}
                max={40}
                min={5}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>5h</span>
                <span>40h</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-foreground">Average Hourly Wage</label>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  ${inputs.hourlyWage}
                </Badge>
              </div>
              <Slider
                value={[inputs.hourlyWage]}
                onValueChange={(value) => updateInput("hourlyWage", value)}
                max={100}
                min={15}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>$15</span>
                <span>$100</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-foreground">Error/Rework Rate</label>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {inputs.errorRate}%
                </Badge>
              </div>
              <Slider
                value={[inputs.errorRate]}
                onValueChange={(value) => updateInput("errorRate", value)}
                max={30}
                min={0}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>0%</span>
                <span>30%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-foreground">Automation Investment</label>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {formatCurrency(inputs.automationCost)}
                </Badge>
              </div>
              <Slider
                value={[inputs.automationCost]}
                onValueChange={(value) => updateInput("automationCost", value)}
                max={50000}
                min={5000}
                step={2500}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>$5K</span>
                <span>$50K</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Results Display */}
        <div className="space-y-6">
          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-8 w-8 text-secondary" />
              <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-poppins)]">
                Your Automation Impact
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">
                  {formatCurrency(animatedResults.monthlyCostSavings)}
                </div>
                <div className="text-muted-foreground">Monthly Savings</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">
                  {formatCurrency(animatedResults.annualSavings)}
                </div>
                <div className="text-muted-foreground">Annual Savings</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-poppins)]">
                  {Math.round(animatedResults.roi)}%
                </div>
                <div className="text-muted-foreground">ROI</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-poppins)]">
                  {Math.round(animatedResults.paybackMonths)}
                </div>
                <div className="text-muted-foreground">Months to Payback</div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">
                {formatNumber(animatedResults.hoursReclaimed)}
              </div>
              <div className="text-muted-foreground">Hours Reclaimed Annually</div>
            </Card>

            <Card className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2 font-[family-name:var(--font-poppins)]">
                {Math.round(animatedResults.weeklyTimeSavings)}h
              </div>
              <div className="text-muted-foreground">Weekly Time Savings</div>
            </Card>
          </div>

          <Card className="p-6 bg-primary text-primary-foreground">
            <h4 className="text-xl font-bold mb-4 font-[family-name:var(--font-poppins)]">Ready to Get Started?</h4>
            <p className="mb-6 opacity-90">
              These calculations are based on industry averages. Let's discuss your specific situation and create a
              custom automation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="flex-1" asChild>
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
