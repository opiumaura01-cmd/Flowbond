import { NextResponse, type NextRequest } from "next/server"
import { addSubmission, listSubmissions } from "@/lib/consultations-store"

const ADMIN_PASSWORD = "2025flowbond"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    if (!body?.email || typeof body.email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const stored = addSubmission({
      name: typeof body.name === "string" ? body.name : undefined,
      email: body.email,
      company: typeof body.company === "string" ? body.company : undefined,
      phone: typeof body.phone === "string" ? body.phone : undefined,
      employees: typeof body.employees === "string" ? body.employees : undefined,
      timeline: typeof body.timeline === "string" ? body.timeline : undefined,
      challenge: typeof body.challenge === "string" ? body.challenge : undefined,
      ...body,
    })

    return NextResponse.json({ ok: true, submission: stored }, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const pass = req.headers.get("x-admin-password") || ""
  if (pass !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  return NextResponse.json({ submissions: listSubmissions() }, { status: 200 })
}
