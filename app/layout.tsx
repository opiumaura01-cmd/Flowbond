import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Manrope } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import SiteFooter from "@/components/site-footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "FlowBond Automation - RPA Solutions Partner",
  description:
    "Transform repetitive work into strategic advantage with Robotic Process Automation (RPA). FlowBond helps businesses eliminate manual tasks and unlock efficiency.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable} ${poppins.variable} ${manrope.variable} antialiased`}>
        <Navigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
