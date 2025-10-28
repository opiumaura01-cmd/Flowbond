"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Send, MessageCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    challenge: "",
    timeline: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          employees: formData.employees,
          timeline: formData.timeline,
          challenge: formData.challenge,
          source: "contact-page",
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to submit")
      }
      setIsSubmitted(true)
    } catch (err: any) {
      setSubmitError(err?.message || "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
        <div className="animate-bounce mb-6">
          <CheckCircle className="h-16 w-16 text-secondary mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-poppins)]">
          Thank You for Your Interest!
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We've received your consultation request and will contact you within 24 hours to discuss your automation
          opportunities. In the meantime, feel free to explore our case studies or calculate your potential ROI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>
            Submit Another Request
          </Button>
          <Button asChild>
            <a href="/case-studies">View Success Stories</a>
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-8">
      <div className="flex items-center gap-3 mb-8">
        <Send className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold text-primary font-[family-name:var(--font-poppins)]">
          Let's Build Your First Automation in 7 Days
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className={`transition-all duration-300 ${
                focusedField === "name" ? "border-primary ring-2 ring-primary/20" : ""
              }`}
              placeholder="John Smith"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={`transition-all duration-300 ${
                focusedField === "email" ? "border-primary ring-2 ring-primary/20" : ""
              }`}
              placeholder="john@company.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium">
              Company Name *
            </Label>
            <Input
              id="company"
              type="text"
              required
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
              className={`transition-all duration-300 ${
                focusedField === "company" ? "border-primary ring-2 ring-primary/20" : ""
              }`}
              placeholder="Your Company Inc."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className={`transition-all duration-300 ${
                focusedField === "phone" ? "border-primary ring-2 ring-primary/20" : ""
              }`}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employees" className="text-sm font-medium">
              Company Size
            </Label>
            <select
              id="employees"
              value={formData.employees}
              onChange={(e) => handleInputChange("employees", e.target.value)}
              onFocus={() => setFocusedField("employees")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-3 py-2 border border-input bg-background rounded-md text-sm transition-all duration-300 ${
                focusedField === "employees" ? "border-primary ring-2 ring-primary/20" : ""
              }`}
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-1000">201-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline" className="text-sm font-medium">
              Desired Timeline
            </Label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => handleInputChange("timeline", e.target.value)}
              onFocus={() => setFocusedField("timeline")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-3 py-2 border border-input bg-background rounded-md text-sm transition-all duration-300 ${
                focusedField === "timeline" ? "border-primary ring-2 ring-primary/20" : ""
              }`}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP (within 2 weeks)</option>
              <option value="1-month">Within 1 month</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="exploring">Just exploring options</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="challenge" className="text-sm font-medium">
            Describe Your Biggest Manual Process Challenge *
          </Label>
          <Textarea
            id="challenge"
            required
            rows={4}
            value={formData.challenge}
            onChange={(e) => handleInputChange("challenge", e.target.value)}
            onFocus={() => setFocusedField("challenge")}
            onBlur={() => setFocusedField(null)}
            className={`transition-all duration-300 ${
              focusedField === "challenge" ? "border-primary ring-2 ring-primary/20" : ""
            }`}
            placeholder="Tell us about the repetitive tasks that are slowing your team down. For example: 'We spend 20 hours weekly processing invoices manually, leading to delays and errors...'"
          />
        </div>

        <Button type="submit" size="lg" className="w-full text-lg py-4 animate-pulse-glow" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Book Free Consultation"}
          <Send className="ml-2 h-5 w-5" />
        </Button>

        {submitError && <p className="text-sm text-destructive text-center">{submitError}</p>}
        <p className="text-sm text-muted-foreground text-center">
          We'll contact you within 24 hours to schedule your free consultation. No spam, ever.
        </p>
      </form>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg animate-bounce"
          asChild
        >
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </Card>
  )
}
