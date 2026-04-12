import { NextResponse } from 'next/server'
import { z } from 'zod'
import { getLeadEmailRecipients } from '@/lib/lead-recipients'
import {
  getMissingSmtpEnv,
  sendMailSmtp,
  smtpIsConfigured,
} from '@/lib/send-mail-smtp'

const newsletterSchema = z.object({
  source: z.literal('newsletter'),
  email: z.string().trim().email().max(320),
  placement: z.enum(['footer', 'blog']),
})

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

const inboundSchema = z.union([newsletterSchema, leadSchema])

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildNewsletterEmailHtml(d: z.infer<typeof newsletterSchema>): string {
  const rows: [string, string][] = [
    ['Email', d.email],
    ['Placement', d.placement === 'footer' ? 'Site footer' : 'Blog page'],
    ['Source', 'Newsletter'],
  ]
  const tableRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">${escapeHtml(k)}</td><td style="padding:10px 12px;border:1px solid #e5e7eb">${escapeHtml(v)}</td></tr>`
    )
    .join('')

  return `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;line-height:1.5;color:#111827;">
  <h2 style="margin:0 0 16px;">Newsletter signup — Diet2Anybody</h2>
  <table style="border-collapse:collapse;width:100%;max-width:560px;">${tableRows}</table>
  <p style="margin-top:20px;font-size:13px;color:#6b7280;">Reply to this email to reach ${escapeHtml(d.email)}.</p>
  </body></html>`
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

  const parsed = inboundSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check your details and try again.' }, { status: 400 })
  }

  const data = parsed.data

  if (!smtpIsConfigured()) {
    const missing = getMissingSmtpEnv()
    // Local dev: accept submission and log — no email until SMTP_PASS (etc.) is set
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '\n[api/lead] DEV — SMTP not configured (missing: %s). Submission logged; no email sent. Add SMTP_* to .env.local for real mail.\n',
        missing.join(', ')
      )
      console.warn('[api/lead] Payload:', JSON.stringify(data, null, 2), '\n')
      return NextResponse.json({ ok: true, devMailSkipped: true })
    }

    console.error(
      'SMTP not configured. Missing:',
      missing.join(', ') || '(unknown)'
    )
    return NextResponse.json(
      {
        error: `Set ${missing.join(', ')} in .env.local (Gmail: App Password at google.com/accounts). Restart npm run dev after saving.`,
      },
      { status: 503 }
    )
  }

  const isNewsletter = data.source === 'newsletter'
  const subject = isNewsletter
    ? `Newsletter signup: ${data.email}`
    : `New lead: ${data.name} (${data.source})`
  const html = isNewsletter
    ? buildNewsletterEmailHtml(data)
    : buildLeadEmailHtml(data)
  const replyTo = data.email

  try {
    await sendMailSmtp({
      to: getLeadEmailRecipients(),
      subject,
      html,
      replyTo,
    })
  } catch (e) {
    console.error('SMTP send error:', e)
    return NextResponse.json(
      { error: 'Could not send email. Please try again later or contact us by phone.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
