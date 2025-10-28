"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              FlowBond
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/industries" className="text-foreground hover:text-primary transition-colors">
                Industries
              </Link>
              <Link href="/case-studies" className="text-foreground hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/roi-calculator">Calculate ROI</Link>
            </Button>
            <Button asChild className="animate-pulse-glow">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-foreground hover:text-primary">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-foreground hover:text-primary">
                Services
              </Link>
              <Link href="/industries" className="block px-3 py-2 text-foreground hover:text-primary">
                Industries
              </Link>
              <Link href="/case-studies" className="block px-3 py-2 text-foreground hover:text-primary">
                Case Studies
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/roi-calculator">Calculate ROI</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
