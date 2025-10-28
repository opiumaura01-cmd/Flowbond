export type ConsultationSubmission = {
  id: string
  name?: string
  email: string
  company?: string
  phone?: string
  employees?: string
  timeline?: string
  challenge?: string
  createdAt: string
  // allow extra fields safely
  [key: string]: unknown
}

// Use a global singleton so the store survives HMR in dev
const g = globalThis as unknown as { __CONSULTATIONS__?: ConsultationSubmission[] }
if (!g.__CONSULTATIONS__) g.__CONSULTATIONS__ = []
const submissions = g.__CONSULTATIONS__!

export function addSubmission(data: Omit<ConsultationSubmission, "id" | "createdAt">) {
  const item: ConsultationSubmission = {
    id: globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
    ...data,
  }
  submissions.unshift(item)
  return item
}

export function listSubmissions() {
  return submissions
}
