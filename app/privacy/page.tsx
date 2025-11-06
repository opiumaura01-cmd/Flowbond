import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-poppins)]">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your privacy is important to us. Learn how we protect and handle your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card className="p-8">
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                At FlowBond Automation, we respect your privacy and are committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit
                our website or engage with our services.
              </p>

              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="list-disc">
                    <strong>Personal Information:</strong> Name, email address, company name, and communication details
                    provided through contact forms or email inquiries.
                  </li>
                  <li className="list-disc">
                    <strong>Technical Information:</strong> IP address, browser type, device information, and website
                    usage data through cookies and analytics tools.
                  </li>
                  <li className="list-disc">
                    <strong>Business Information:</strong> Details about your company processes or automation
                    requirements shared voluntarily for service proposals or consultations.
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">We use your information to:</p>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="list-disc">Respond to your inquiries and provide requested services.</li>
                  <li className="list-disc">Personalize communication and send updates about our offerings.</li>
                  <li className="list-disc">Improve our website, tools, and user experience.</li>
                  <li className="list-disc">Comply with legal and regulatory obligations.</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do not sell or trade your data to third parties. We may share it only with trusted service
                  providers or partners working directly with us under confidentiality agreements.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                  3. Cookies & Tracking
                </h2>
                <p className="text-muted-foreground">
                  We use cookies to improve browsing experience and analyze site traffic. You can disable cookies
                  through your browser settings, though some features may not function as intended.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground">
                  We adopt appropriate technical and organizational measures to secure your data against unauthorized
                  access, alteration, or disclosure.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                  5. Data Retention
                </h2>
                <p className="text-muted-foreground">
                  We retain personal data only for as long as needed to fulfill the purposes described above or as
                  required by law.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground mb-4">You may request to:</p>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="list-disc">Access or correct your personal data.</li>
                  <li className="list-disc">Withdraw consent or request deletion.</li>
                  <li className="list-disc">Opt-out of non-essential communications.</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To do so, contact us at{" "}
                  <a
                    href="mailto:contact@flowbondautomation.com"
                    className="text-secondary underline hover:text-primary"
                  >
                    contact@flowbondautomation.com
                  </a>
                  .
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                  7. Updates to This Policy
                </h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically. The latest version will always be available on our
                  website.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
                  8. Contact Us
                </h2>
                <p className="text-muted-foreground">
                  For questions about this policy or your personal data, please contact:
                </p>
                <p className="text-muted-foreground mt-3">
                  📧{" "}
                  <a
                    href="mailto:contact@flowbondautomation.com"
                    className="text-secondary underline hover:text-primary"
                  >
                    contact@flowbondautomation.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
