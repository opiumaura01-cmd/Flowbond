import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { Clock, Calendar, Shield } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Let's Automate Your Success
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to transform repetitive work into strategic advantage? Schedule your free consultation and discover
            how automation can revolutionize your business operations.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
                  Get In Touch
                </h3>
                <div className="space-y-3 text-base">
                  <p className="text-muted-foreground">
                    📧 Email:{" "}
                    <a href="mailto:contact@flowbondautomation.com" className="underline hover:text-primary">
                      contact@flowbondautomation.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">⏱ Response Time: Within 24 hours (Mon–Fri)</p>
                  <p className="text-muted-foreground">🕒 Business Hours: Monday – Friday, 9:00 AM – 6:00 PM (IST)</p>
                  <p className="text-muted-foreground">📍 Location: Bangalore, India</p>
                </div>
              </Card>

              {/* previously an "Urgent Project?" Card with phone number */}

              <Card className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <div className="font-medium">Free 30-Minute Consultation</div>
                      <div className="text-sm text-muted-foreground">
                        We'll discuss your challenges and identify automation opportunities
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <div className="font-medium">Custom ROI Analysis</div>
                      <div className="text-sm text-muted-foreground">
                        Detailed breakdown of potential savings and implementation timeline
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <div className="font-medium">7-Day Implementation Plan</div>
                      <div className="text-sm text-muted-foreground">
                        If we're a good fit, we'll outline your first automation project
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12 font-[family-name:var(--font-poppins)]">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">How quickly can you deliver results?</h3>
              <p className="text-muted-foreground">
                Most automation projects are live within 7-14 days. Simple workflows can be deployed in 3-5 days, while
                complex integrations may take 2-3 weeks.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">What's the typical ROI?</h3>
              <p className="text-muted-foreground">
                Our clients typically see 300-500% ROI within the first year, with payback periods averaging 3-6 months.
                Use our calculator for your specific estimate.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Do you work with small businesses?</h3>
              <p className="text-muted-foreground">
                We've helped businesses from 5 to 5,000 employees. Our solutions scale to your needs and budget,
                starting from $5,000 projects.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">What if the automation breaks?</h3>
              <p className="text-muted-foreground">
                All projects include 6 months of support and maintenance. We monitor your automations 24/7 and provide
                rapid response for any issues.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
