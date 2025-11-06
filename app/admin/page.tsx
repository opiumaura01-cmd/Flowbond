"use client"

import useSWR from "swr"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

type Submission = {
  id: string
  name?: string
  email: string
  company?: string
  phone?: string
  employees?: string
  timeline?: string
  challenge?: string
  createdAt: string
  [key: string]: any
}

const ADMIN_PASSWORD = "2025flowbond"

const fetcher = async ([url, password]: [string, string]) => {
  const res = await fetch(url, { headers: { "x-admin-password": password || "" } })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.error || `Request failed: ${res.status}`)
  }
  return res.json()
}

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("admin-pass") : null
    if (saved) {
      setPassword(saved)
      setAuthed(saved === ADMIN_PASSWORD)
    }
  }, [])

  const { data, error, isLoading, mutate } = useSWR<{ submissions: Submission[] }>(
    authed ? ["/api/consultations", password] : null,
    fetcher,
    { revalidateOnFocus: true },
  )

  const handleEnter = () => {
    const ok = password === ADMIN_PASSWORD
    setAuthed(ok)
    if (ok) {
      localStorage.setItem("admin-pass", password)
      mutate()
    }
  }

  const submissions = useMemo(() => data?.submissions ?? [], [data])

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6 text-balance">Admin - Consultation Submissions</h1>

      {!authed ? (
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Enter Admin Password</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleEnter()}
              aria-label="Admin password"
            />
            <Button onClick={handleEnter}>Continue</Button>
          </CardContent>
          {error && <p className="text-sm text-destructive px-6 pb-4">Error: {error.message}</p>}
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {submissions.length} submission{submissions.length === 1 ? "" : "s"}.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="secondary" onClick={() => mutate()}>
                Refresh
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  localStorage.removeItem("admin-pass")
                  setAuthed(false)
                  setPassword("")
                }}
              >
                Sign out
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {submissions.map((s) => (
              <Card key={s.id}>
                <CardHeader className="flex-row items-center justify-between">
                  <CardTitle className="text-base">
                    {s.name || "Unnamed"} <span className="text-muted-foreground font-normal">({s.email})</span>
                  </CardTitle>
                  <Badge variant="outline">{new Date(s.createdAt).toLocaleString()}</Badge>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {s.company && (
                    <p>
                      <span className="text-muted-foreground">Company:</span> {s.company}
                    </p>
                  )}
                  {s.phone && (
                    <p>
                      <span className="text-muted-foreground">Phone:</span> {s.phone}
                    </p>
                  )}
                  {s.employees && (
                    <p>
                      <span className="text-muted-foreground">Company size:</span> {s.employees}
                    </p>
                  )}
                  {s.timeline && (
                    <p>
                      <span className="text-muted-foreground">Timeline:</span> {s.timeline}
                    </p>
                  )}
                  {s.challenge && (
                    <p className="whitespace-pre-wrap">
                      <span className="text-muted-foreground">Challenge:</span> {s.challenge}
                    </p>
                  )}
                  {Object.entries(s)
                    .filter(
                      ([k]) =>
                        ![
                          "id",
                          "name",
                          "email",
                          "company",
                          "phone",
                          "employees",
                          "timeline",
                          "challenge",
                          "createdAt",
                        ].includes(k),
                    )
                    .map(([k, v]) => (
                      <p key={k}>
                        <span className="text-muted-foreground">{k}:</span> {String(v)}
                      </p>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {isLoading && <p className="text-sm text-muted-foreground">Loading…</p>}

          {submissions.length === 0 && !isLoading && (
            <Card>
              <CardContent className="py-6 text-sm text-muted-foreground">
                No submissions yet. When someone submits the “Book Free Consultation” form, it will appear here.
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </main>
  )
}
