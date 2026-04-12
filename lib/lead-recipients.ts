/** Default inbox for form notifications (override with MAIL_TO in .env). */
const DEFAULT_RECIPIENTS = ['ram.56.v@gmail.com'] as const

/** Comma-separated in MAIL_TO, e.g. a@x.com,b@y.com */
export function getLeadEmailRecipients(): string[] {
  const raw = process.env.MAIL_TO?.trim()
  if (!raw) return [...DEFAULT_RECIPIENTS]
  const list = raw
    .split(',')
    .map((e) => e.trim())
    .filter((e) => e.length > 0)
  return list.length > 0 ? list : [...DEFAULT_RECIPIENTS]
}
