import { Navigation } from "@/components/navigation"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { EnhancedServicesSection } from "@/components/enhanced-services-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EnhancedHeroSection />
      <EnhancedServicesSection />
    </main>
  )
}
