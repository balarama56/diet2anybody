import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { LEAD_EMAIL_RECIPIENTS } from '@/lib/lead-recipients'

const leadSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(5).max(40),
  message: z.string().max(8000).optional(),
  service: z.string().max(200).optional(),
  source: z.enum(['contact', 'blog', 'service']),
  articleTitle: z.string().max(500).optional(),
  serviceSlug: z.string().max(200).optional(),
  serviceTitle: z.string().max(300).optional(),
})

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildLeadEmailHtml(d: z.infer<typeof leadSchema>): string {
  const rows: [string, string][] = [
    ['Name', d.name],
    ['Email', d.email],
    ['Phone', d.phone],
    ['Source', d.source],
  ]
  if (d.service?.trim()) rows.push(['Interested service', d.service])
  if (d.articleTitle?.trim()) rows.push(['Blog article', d.articleTitle])
  if (d.serviceTitle?.trim()) rows.push(['Service page', d.serviceTitle])
  if (d.serviceSlug?.trim()) rows.push(['Service slug', d.serviceSlug])
  if (d.message?.trim()) rows.push(['Message', d.message])

  const tableRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">${escapeHtml(k)}</td><td style="padding:10px 12px;border:1px solid #e5e7eb">${escapeHtml(v)}</td></tr>`
    )
    .join('')

  return `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;line-height:1.5;color:#111827;">
  <h2 style="margin:0 0 16px;">New lead — Diet2Anybody</h2>
  <table style="border-collapse:collapse;width:100%;max-width:560px;">${tableRows}</table>
  <p style="margin-top:20px;font-size:13px;color:#6b7280;">Reply to this email to reach ${escapeHtml(d.email)}.</p>
  </body></html>`
}

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check your details and try again.' }, { status: 400 })
  }

  const data = parsed.data
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey?.trim()) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'Email is not configured on the server. Please contact us by phone.' },
      { status: 503 }
    )
  }

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    'Diet2Anybody <onboarding@resend.dev>'

  const resend = new Resend(apiKey)
  const subject = `New lead: ${data.name} (${data.source})`

  const { error } = await resend.emails.send({
    from,
    to: [...LEAD_EMAIL_RECIPIENTS],
    replyTo: data.email,
    subject,
    html: buildLeadEmailHtml(data),
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Could not send email. Please try again later.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
