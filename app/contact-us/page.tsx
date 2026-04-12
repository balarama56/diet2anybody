import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { CONTACT_PAGE_PATH } from '@/lib/contact'
import { contactPageGraph } from '@/lib/schema-org'
import { SITE_ORIGIN } from '@/lib/services'
import ContactPageContent from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Diet2Anybody. Book a free consultation with our expert dietitians and start your health transformation journey today.',
  openGraph: {
    title: 'Contact Us | Diet2Anybody',
    description: 'Get in touch with Diet2Anybody. Book a free consultation with our expert dietitians.',
    url: `${SITE_ORIGIN}${CONTACT_PAGE_PATH}`,
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageGraph()} />
      <ContactPageContent />
    </>
  )
}
