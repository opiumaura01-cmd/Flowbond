import { Navigation } from "@/components/navigation"
import { IndustryCard } from "@/components/industry-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Megaphone, Home, Calculator, ShoppingBag, Handshake, Factory } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    title: "Content Creators & Marketing Agencies",
    description:
      "Scale your content operations and client management with intelligent automation that handles repetitive marketing tasks.",
    icon: <Megaphone className="h-8 w-8" />,
    automations: ["Social Media Posting", "Lead List Building", "Report Generation", "CRM Updates"],
    caseStudy: {
      metric: "300%",
      result: "increase in qualified leads for marketing agency clients",
    },
    bgGradient: "bg-gradient-to-br from-background to-secondary/5",
  },
  {
    title: "Real Estate",
    description:
      "Streamline property management, client communications, and transaction processing to close more deals faster.",
    icon: <Home className="h-8 w-8" />,
    automations: ["Lead Qualification", "Document Processing", "Client Onboarding", "Market Reports"],
    caseStudy: {
      metric: "60%",
      result: "faster transaction processing for real estate brokerage",
    },
    bgGradient: "bg-gradient-to-br from-background to-primary/5",
  },
  {
    title: "Accounting & Bookkeeping Firms",
    description:
      "Automate financial processes, reconciliations, and reporting to serve more clients with the same team.",
    icon: <Calculator className="h-8 w-8" />,
    automations: ["Invoice Processing", "Bank Reconciliation", "Tax Preparation", "Financial Reports"],
    caseStudy: {
      metric: "90%",
      result: "reduction in month-end closing time for accounting firm",
    },
    bgGradient: "bg-gradient-to-br from-background to-secondary/5",
  },
  {
    title: "E-commerce & Logistics",
    description:
      "Optimize order fulfillment, inventory management, and customer service to scale operations efficiently.",
    icon: <ShoppingBag className="h-8 w-8" />,
    automations: ["Order Processing", "Inventory Updates", "Customer Service", "Shipping Automation"],
    caseStudy: {
      metric: "75%",
      result: "reduction in order processing time, reclaiming 200+ hours monthly",
    },
    bgGradient: "bg-gradient-to-br from-background to-primary/5",
  },
  {
    title: "B2B Sales & Lead Generation",
    description:
      "Accelerate your sales pipeline with automated prospecting, lead qualification, and follow-up sequences.",
    icon: <Handshake className="h-8 w-8" />,
    automations: ["Lead Scraping", "Email Sequences", "CRM Management", "Proposal Generation"],
    caseStudy: {
      metric: "250%",
      result: "increase in qualified sales meetings for B2B software company",
    },
    bgGradient: "bg-gradient-to-br from-background to-secondary/5",
  },
  {
    title: "Manufacturing & Distribution",
    description:
      "Streamline production planning, quality control, and supply chain management for operational excellence.",
    icon: <Factory className="h-8 w-8" />,
    automations: ["Production Scheduling", "Quality Reports", "Supplier Management", "Compliance Tracking"],
    caseStudy: {
      metric: "40%",
      result: "improvement in production efficiency for manufacturing client",
    },
    bgGradient: "bg-gradient-to-br from-background to-primary/5",
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Industry-Specific Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Every industry has unique challenges. Our RPA solutions are tailored to your specific workflows, compliance
            requirements, and business objectives for maximum impact.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow" asChild>
            <Link href="/contact">
              Discuss Your Industry Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We've successfully automated processes across dozens of industries. Let's discuss how RPA can transform your
            specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent" asChild>
              <Link href="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
