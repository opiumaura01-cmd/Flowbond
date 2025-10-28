import { Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-foreground">FlowBond Automation</p>
            <address className="not-italic text-sm text-muted-foreground">Bangalore, India</address>
            <p className="mt-2 text-xs text-muted-foreground">© {year} FlowBond Automation. All rights reserved.</p>
          </div>

          <nav aria-label="Social media" className="flex items-center gap-2">
            {/* Replace href values with your real profiles */}
            <a
              href="#"
              aria-label="Visit our LinkedIn"
              className="group rounded-full p-2 text-muted-foreground transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Linkedin className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              aria-label="Visit our X (Twitter)"
              className="group rounded-full p-2 text-muted-foreground transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Twitter className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a
              href="#"
              aria-label="Visit our YouTube"
              className="group rounded-full p-2 text-muted-foreground transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Youtube className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span className="sr-only">YouTube</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
