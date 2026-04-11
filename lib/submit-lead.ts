export type LeadPayload = {
  name: string
  email: string
  phone: string
  message?: string
  /** Contact form: selected service id/label */
  service?: string
  source: 'contact' | 'blog' | 'service'
  /** Blog sidebar: article title */
  articleTitle?: string
  /** Service program page */
  serviceSlug?: string
  serviceTitle?: string
}

export type NewsletterPayload = {
  source: 'newsletter'
  email: string
  placement: 'footer' | 'blog'
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  await postLeadApi(payload)
}

export async function submitNewsletter(payload: NewsletterPayload): Promise<void> {
  await postLeadApi(payload)
}

async function postLeadApi(
  payload: LeadPayload | NewsletterPayload
): Promise<void> {
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await res.json().catch(() => ({}))) as { error?: string }

  if (!res.ok) {
    throw new Error(
      typeof data.error === 'string' && data.error.length > 0
        ? data.error
        : 'Could not send your message. Please try again or call us.'
    )
  }
}
