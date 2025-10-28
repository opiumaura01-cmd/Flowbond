import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Complete RPA Service Catalog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            From invoice processing to data migration, we automate the repetitive tasks that slow your business down.
            Every solution is built to your specifications and delivers measurable results.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow" asChild>
            <Link href="/contact">
              Start Your Automation Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesSection />

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From audit to deployment, we ensure your automation delivers maximum value with minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 font-[family-name:var(--font-poppins)]">Audit</h3>
              <p className="text-muted-foreground">
                We analyze your current processes to identify the highest-impact automation opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 font-[family-name:var(--font-poppins)]">
                Prototype
              </h3>
              <p className="text-muted-foreground">
                We build a working prototype to validate the solution and demonstrate ROI potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 font-[family-name:var(--font-poppins)]">Scale</h3>
              <p className="text-muted-foreground">
                We deploy the full solution with comprehensive testing and team training.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">4</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 font-[family-name:var(--font-poppins)]">
                Support
              </h3>
              <p className="text-muted-foreground">
                We provide ongoing monitoring, optimization, and support to maximize your ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-poppins)]">
            Ready to Automate Your First Process?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free consultation and we'll show you exactly how automation can transform your business in just 7
            days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/roi-calculator">Calculate Your ROI</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
