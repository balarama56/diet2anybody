import nodemailer from 'nodemailer'

export type SendSmtpMailOptions = {
  to: string[]
  subject: string
  html: string
  replyTo?: string
}

/** Required for sending: host, mailbox login, password. MAIL_FROM is optional (defaults to sender based on SMTP_USER). */
export function getMissingSmtpEnv(): string[] {
  const missing: string[] = []
  if (!process.env.SMTP_HOST?.trim()) missing.push('SMTP_HOST')
  if (!process.env.SMTP_USER?.trim()) missing.push('SMTP_USER')
  if (!process.env.SMTP_PASS?.trim()) missing.push('SMTP_PASS')
  return missing
}

export function smtpIsConfigured(): boolean {
  return getMissingSmtpEnv().length === 0
}

/**
 * Sends mail via your own SMTP server (Hostinger, Gmail SMTP, etc.).
 * Configure SMTP_HOST, SMTP_USER, SMTP_PASS. Optionally MAIL_FROM.
 */
export async function sendMailSmtp(opts: SendSmtpMailOptions): Promise<void> {
  if (!smtpIsConfigured()) {
    throw new Error('SMTP is not configured')
  }

  const host = process.env.SMTP_HOST!.trim()
  const port = Number.parseInt(process.env.SMTP_PORT || '465', 10)
  const secure =
    process.env.SMTP_SECURE === undefined
      ? port === 465
      : process.env.SMTP_SECURE === 'true'
  const user = process.env.SMTP_USER!.trim()
  const pass = process.env.SMTP_PASS!.trim()
  const from =
    process.env.MAIL_FROM?.trim() || `Diet2Anybody <${user}>`

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure,
    auth: { user, pass },
  })

  await transporter.sendMail({
    from,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
    replyTo: opts.replyTo,
  })
}
