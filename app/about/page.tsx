import { Navigation } from "@/components/navigation"
import { WorldMap } from "@/components/world-map"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Target, Users, Zap, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            About FlowBond Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            We founded FlowBond to remove the barriers of repetitive work. Our global team builds scalable automation
            solutions that free businesses to focus on growth, innovation, and what matters most.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every business has unique potential that gets buried under repetitive tasks. We believe automation
                should be accessible, reliable, and transformative - not just a luxury for enterprise giants.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Since 2020, we've helped over 200 businesses reclaim thousands of hours monthly, allowing teams to focus
                on strategy, creativity, and growth instead of mundane manual work.
              </p>
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/contact">
                  Start Your Automation Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <WorldMap />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every automation solution we build and every client relationship we nurture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center h-full">
              <Target className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                Results-Driven
              </h3>
              <p className="text-muted-foreground">
                Every automation must deliver measurable ROI. We track success through time saved, costs reduced, and
                errors eliminated.
              </p>
            </Card>

            <Card className="p-8 text-center h-full">
              <Users className="h-12 w-12 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                Human-Centered
              </h3>
              <p className="text-muted-foreground">
                Automation should enhance human potential, not replace it. We design solutions that empower teams to do
                their best work.
              </p>
            </Card>

            <Card className="p-8 text-center h-full">
              <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                Speed & Quality
              </h3>
              <p className="text-muted-foreground">
                Fast delivery without compromising quality. Most automations are live within 7 days, thoroughly tested
                and documented.
              </p>
            </Card>

            <Card className="p-8 text-center h-full">
              <Award className="h-12 w-12 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                Continuous Excellence
              </h3>
              <p className="text-muted-foreground">
                We don't just build and leave. Ongoing optimization, support, and evolution ensure lasting success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-poppins)]">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses that have already automated their way to greater efficiency and growth. Let's
            discuss your automation opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
