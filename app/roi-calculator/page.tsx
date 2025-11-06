import { Navigation } from "@/components/navigation"
import { ROICalculator } from "@/components/roi-calculator"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ROICalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            ROI Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the financial impact of automation on your business. Adjust the sliders below to see real-time
            calculations based on your specific situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Based on real client data</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Industry-validated assumptions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Conservative estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-background">
        <ROICalculator />
      </section>

      {/* Assumptions Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12 font-[family-name:var(--font-poppins)]">
            Calculator Assumptions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                Automation Efficiency
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 75% of manual tasks can be automated</li>
                <li>• 99.9% accuracy rate for automated processes</li>
                <li>• 24/7 operation capability</li>
                <li>• Minimal maintenance requirements</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                Cost Factors
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Includes development and deployment</li>
                <li>• 6-month support and maintenance</li>
                <li>• Training and documentation</li>
                <li>• Conservative error rate impact</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                Time Savings
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Based on actual client results</li>
                <li>• Accounts for learning curve</li>
                <li>• Includes process optimization</li>
                <li>• Excludes strategic work time</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                Additional Benefits
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Improved accuracy and compliance</li>
                <li>• Enhanced employee satisfaction</li>
                <li>• Scalability without proportional costs</li>
                <li>• Better data insights and reporting</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-poppins)]">
            Ready to Turn Potential into Reality?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            These numbers represent your automation potential. Let's schedule a free consultation to create a detailed
            implementation plan tailored to your specific processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/case-studies">See Real Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
