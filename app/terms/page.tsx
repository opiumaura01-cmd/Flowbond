"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export default function TermsPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[300px] w-full bg-gradient-to-b from-primary/10 to-background py-20 flex items-center justify-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-lg text-muted-foreground">Please read these terms carefully before using our services</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="prose prose-invert max-w-none space-y-8">
              {/* Last Updated */}
              <div className="mb-8 pb-8 border-b border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Effective Date:</strong> November 2025
                </p>
              </div>

              {/* Intro */}
              <div>
                <p className="text-foreground leading-relaxed">
                  Welcome to FlowBond Automation. By accessing or using our website and services, you agree to the
                  following terms and conditions.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  FlowBond Automation provides business process automation consulting, implementation, and support
                  services. These terms govern your use of our website, content, and any services provided through it.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Website</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>You may use this website for lawful purposes only.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      You agree not to copy, modify, or distribute any part of the website or its content without
                      written permission.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Unauthorized use of this website may result in legal action.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, graphics, design, and code are the property of FlowBond Automation unless stated
                  otherwise. You may not reproduce or reuse them for commercial purposes without explicit permission.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Service Engagement</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you engage FlowBond Automation for services:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>A separate proposal or agreement will outline project scope, timelines, and fees.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Work will begin only after mutual acceptance and confirmation.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Payment terms will be specified in each individual agreement.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">FlowBond Automation is not liable for:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Any indirect, incidental, or consequential damages resulting from website use or service
                      engagement.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Temporary unavailability of the website due to maintenance or updates.</span>
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. External Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may include links to third-party sites. We are not responsible for their content, privacy
                  practices, or reliability.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to restrict or terminate website access for users violating these terms.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and interpreted according to the laws of India. Any disputes will be
                  resolved under the jurisdiction of courts in Bangalore, Karnataka.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">For legal or general inquiries:</p>
                <div className="space-y-2">
                  <p className="text-foreground flex items-center gap-2">
                    <span>📧</span>
                    <a
                      href="mailto:contact@flowbondautomation.com"
                      className="text-primary hover:text-accent transition-colors font-semibold"
                    >
                      contact@flowbondautomation.com
                    </a>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center pt-8 border-t border-primary/20">
                <p className="text-muted-foreground mb-6">Have questions about these terms?</p>
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
