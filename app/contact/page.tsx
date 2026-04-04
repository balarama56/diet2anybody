import type { Metadata } from 'next'
import ContactPageContent from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Diet2Anybody. Book a free consultation with our expert dietitians and start your health transformation journey today.',
  openGraph: {
    title: 'Contact Us | Diet2Anybody',
    description: 'Get in touch with Diet2Anybody. Book a free consultation with our expert dietitians.',
    url: 'https://www.diet2anybody.com/contact',
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
