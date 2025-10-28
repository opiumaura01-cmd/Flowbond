"use client"

import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-primary/20 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          {/* Left: Brand and logo */}
          <div className="flex items-center gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">FlowBond Automation</p>
              <p className="text-xs text-muted-foreground">RPA Solutions Partner</p>
            </div>
          </div>

          {/* Center: Contact info */}
          <div className="space-y-2 text-center md:text-left">
            <p className="text-sm text-muted-foreground font-[family-name:var(--font-manrope)]">Bangalore, India</p>
            <Link
              href="mailto:contact@flowbondautomation.com"
              className="block text-sm text-primary hover:text-accent transition-colors font-semibold"
            >
              contact@flowbondautomation.com
            </Link>
          </div>

          {/* Right: Social icons with glow */}
          <div className="flex items-center gap-6" aria-label="Social links">
            <Link
              href="https://www.linkedin.com/company/flowbond-automation/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="group relative text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg p-2"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin
                className="h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(0, 174, 239, 0))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(0, 174, 239, 0.6))"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(0, 174, 239, 0))"
                }}
                aria-hidden="true"
              />
            </Link>
            <Link
              href="https://x.com/flowbonda?s=21"
              aria-label="Twitter/X"
              target="_blank"
              rel="noreferrer"
              className="group relative text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg p-2"
            >
              <span className="sr-only">Twitter/X</span>
              <Twitter
                className="h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(0, 174, 239, 0))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(0, 174, 239, 0.6))"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(0, 174, 239, 0))"
                }}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-primary/10 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} FlowBond Automation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
