import { ServiceFlipCard } from "@/components/service-flip-card"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProcessTimeline } from "@/components/process-timeline"
import {
  FileText,
  CreditCard,
  Users,
  Share2,
  Search,
  Database,
  ShoppingCart,
  BarChart3,
  ArrowRightLeft,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Invoice Processing",
    problem: "Manual invoice entry wastes hours and leads to costly errors.",
    solution:
      "Automated invoice processing extracts data, validates information, and updates your accounting system instantly.",
    value: "Save $1,500+/month while accelerating cash flow",
    industries: ["Finance", "E-commerce", "Real Estate", "Manufacturing"],
    buildTime: "5-7 days",
    savings: "$1,500/mo",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: "Bank Reconciliation",
    problem: "Monthly reconciliation takes days and delays financial reporting.",
    solution:
      "Automated bank reconciliation matches transactions, identifies discrepancies, and generates reports in minutes.",
    value: "Reduce reconciliation time by 90%",
    industries: ["Accounting", "Finance", "Real Estate"],
    buildTime: "7-10 days",
    savings: "$2,000/mo",
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    title: "Employee Onboarding",
    problem: "New hire paperwork and system setup creates administrative bottlenecks.",
    solution: "Streamlined onboarding creates accounts, sends documents, and tracks completion automatically.",
    value: "Onboard new hires 75% faster",
    industries: ["HR", "Manufacturing", "Logistics"],
    buildTime: "10-14 days",
    savings: "$800/mo",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Social Media Posting",
    problem: "Consistent social media presence requires constant manual effort.",
    solution: "Automated posting schedules content across platforms with optimal timing and engagement tracking.",
    value: "Save 20+ hours weekly on social media",
    industries: ["Marketing", "E-commerce", "Real Estate"],
    buildTime: "3-5 days",
    savings: "$1,200/mo",
    icon: <Share2 className="h-6 w-6" />,
  },
  {
    title: "Lead List Building",
    problem: "Manual prospect research and data entry slows sales pipeline growth.",
    solution: "Automated lead generation finds qualified prospects, enriches contact data, and populates your CRM.",
    value: "Generate 300% more qualified leads",
    industries: ["Sales", "Marketing", "B2B"],
    buildTime: "7-10 days",
    savings: "$2,500/mo",
    icon: <Search className="h-6 w-6" />,
  },
  {
    title: "CRM Data Entry",
    problem: "Sales teams spend hours updating customer records instead of selling.",
    solution: "Automated CRM updates capture interactions, sync data, and maintain accurate customer profiles.",
    value: "Reclaim 15+ hours weekly for selling",
    industries: ["Sales", "B2B", "Real Estate"],
    buildTime: "5-8 days",
    savings: "$1,800/mo",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Sales Order Processing",
    problem: "Manual order entry creates delays and fulfillment errors.",
    solution: "Automated order processing validates orders, updates inventory, and triggers fulfillment workflows.",
    value: "Process orders 80% faster with 99% accuracy",
    industries: ["E-commerce", "Manufacturing", "Distribution"],
    buildTime: "8-12 days",
    savings: "$3,000/mo",
    icon: <ShoppingCart className="h-6 w-6" />,
  },
  {
    title: "Report Generation",
    problem: "Creating regular reports consumes valuable analyst time.",
    solution: "Automated reporting pulls data from multiple sources and generates formatted reports on schedule.",
    value: "Eliminate 40+ hours of manual reporting",
    industries: ["Finance", "Operations", "Marketing"],
    buildTime: "6-9 days",
    savings: "$2,200/mo",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Data Migration",
    problem: "System migrations risk data loss and require extensive manual verification.",
    solution: "Automated data migration ensures accurate transfer with validation and rollback capabilities.",
    value: "Migrate data 95% faster with zero loss",
    industries: ["IT", "Finance", "Healthcare"],
    buildTime: "10-15 days",
    savings: "$5,000/project",
    icon: <ArrowRightLeft className="h-6 w-6" />,
  },
]

export function EnhancedServicesSection() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 font-[family-name:var(--font-poppins)] tracking-wide">
                RPA Solutions That Drive Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-manrope)]">
                Transform your most time-consuming processes into automated workflows. Each solution is custom-built for
                your business needs and delivers measurable ROI within weeks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} direction="up" delay={index * 100}>
                <ServiceFlipCard {...service} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="text-center">
              <Button
                size="lg"
                className="text-lg px-8 py-4 gradient-primary text-white hover:scale-105 transition-all duration-300 glow-primary rounded-lg font-semibold"
                asChild
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-6 font-[family-name:var(--font-poppins)] tracking-wide">
                Our Proven Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-manrope)]">
                From audit to deployment, we ensure your automation delivers maximum value with minimal disruption.
              </p>
            </div>
          </ScrollReveal>

          <ProcessTimeline />
        </div>
      </section>
    </>
  )
}
