import { Navigation } from "@/components/navigation"
import { CaseStudyCard } from "@/components/case-study-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    title: "Logistics Company Transforms Order Processing",
    industry: "E-commerce & Logistics",
    challenge:
      "Manual order processing created bottlenecks, with 8-hour daily processing times and frequent errors leading to customer complaints and delayed shipments.",
    solution:
      "Implemented automated order validation, inventory checking, and fulfillment workflow that processes orders in real-time with 99.9% accuracy.",
    results: [
      {
        metric: "75%",
        value: "Time Reduction",
        description: "Order processing time reduced from 8 hours to 2 hours daily",
      },
      {
        metric: "200+",
        value: "Hours Saved",
        description: "Monthly hours reclaimed and reinvested in business growth",
      },
      {
        metric: "99.9%",
        value: "Accuracy Rate",
        description: "Virtually eliminated processing errors and customer complaints",
      },
    ],
    timeframe: "6 weeks",
    roi: "340%",
  },
  {
    title: "Marketing Agency Scales Lead Generation",
    industry: "Marketing & Sales",
    challenge:
      "Manual prospect research and outreach limited the agency to 50 qualified leads per week, constraining client growth and revenue potential.",
    solution:
      "Automated lead discovery, data enrichment, and multi-channel outreach sequences with personalized messaging and follow-up tracking.",
    results: [
      {
        metric: "300%",
        value: "Lead Increase",
        description: "Qualified leads increased from 50 to 200+ per week",
      },
      {
        metric: "60%",
        value: "Cost Reduction",
        description: "Lead acquisition costs reduced through automation efficiency",
      },
      {
        metric: "25",
        value: "Hours Saved",
        description: "Weekly hours freed up for strategic client work",
      },
    ],
    timeframe: "4 weeks",
    roi: "280%",
  },
  {
    title: "Accounting Firm Automates Month-End Close",
    industry: "Accounting & Finance",
    challenge:
      "Month-end financial close process took 10 days with multiple manual reconciliations, delaying client reporting and straining team resources.",
    solution:
      "Automated bank reconciliation, journal entry processing, and financial report generation with exception handling and audit trails.",
    results: [
      {
        metric: "90%",
        value: "Time Reduction",
        description: "Month-end close reduced from 10 days to 1 day",
      },
      {
        metric: "50%",
        value: "More Clients",
        description: "Capacity to serve 50% more clients with same team",
      },
      {
        metric: "Zero",
        value: "Manual Errors",
        description: "Eliminated reconciliation errors and improved accuracy",
      },
    ],
    timeframe: "8 weeks",
    roi: "420%",
  },
  {
    title: "Real Estate Brokerage Streamlines Transactions",
    industry: "Real Estate",
    challenge:
      "Document processing and client communication delays extended transaction times to 45+ days, impacting client satisfaction and deal volume.",
    solution:
      "Automated document collection, processing, and client communication workflows with milestone tracking and automated reminders.",
    results: [
      {
        metric: "60%",
        value: "Faster Closings",
        description: "Average transaction time reduced from 45 to 18 days",
      },
      {
        metric: "40%",
        value: "More Deals",
        description: "Increased deal volume capacity without additional staff",
      },
      {
        metric: "95%",
        value: "Client Satisfaction",
        description: "Improved client experience and referral rates",
      },
    ],
    timeframe: "5 weeks",
    roi: "310%",
  },
  {
    title: "Manufacturing Company Optimizes Production",
    industry: "Manufacturing",
    challenge:
      "Manual production scheduling and quality reporting created inefficiencies, with 20% of production time lost to coordination and paperwork.",
    solution:
      "Automated production planning, real-time quality monitoring, and automated compliance reporting with predictive maintenance alerts.",
    results: [
      {
        metric: "40%",
        value: "Efficiency Gain",
        description: "Production efficiency improved through optimized scheduling",
      },
      {
        metric: "30%",
        value: "Quality Improvement",
        description: "Defect rates reduced through automated quality controls",
      },
      {
        metric: "100+",
        value: "Hours Saved",
        description: "Monthly administrative hours redirected to production",
      },
    ],
    timeframe: "10 weeks",
    roi: "380%",
  },
  {
    title: "B2B Software Company Accelerates Sales",
    industry: "B2B Sales",
    challenge:
      "Sales team spent 60% of time on administrative tasks instead of selling, with inconsistent follow-up leading to lost opportunities.",
    solution:
      "Automated lead qualification, CRM updates, proposal generation, and follow-up sequences with personalized touchpoints.",
    results: [
      {
        metric: "250%",
        value: "More Meetings",
        description: "Qualified sales meetings increased from 20 to 70 per month",
      },
      {
        metric: "80%",
        value: "Admin Reduction",
        description: "Administrative tasks reduced, freeing time for selling",
      },
      {
        metric: "45%",
        value: "Revenue Growth",
        description: "Monthly recurring revenue increased within 6 months",
      },
    ],
    timeframe: "7 weeks",
    roi: "520%",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Proven Results Across Industries
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Real businesses achieving extraordinary results through intelligent automation. See how our RPA solutions
            deliver measurable ROI and transform operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow" asChild>
              <Link href="/contact">
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent" asChild>
              <Link href="/roi-calculator">Calculate Your Potential ROI</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.title} {...caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
              Aggregate Impact Across All Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">200+</div>
              <div className="text-muted-foreground">Hours Automating Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">380%</div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">
                6 weeks
              </div>
              <div className="text-muted-foreground">Average Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2 font-[family-name:var(--font-poppins)]">50+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-poppins)]">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every business is unique, but the results speak for themselves. Let's discuss how automation can transform
            your specific challenges into competitive advantages.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
            <Link href="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
