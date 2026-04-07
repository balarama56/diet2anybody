import type { Metadata } from 'next'
import PricingPageContent from './PricingPageContent'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent monthly pricing for Diet2Anybody: Basic, Standard, and Platinum plans with personalized meal support, consultations, and WhatsApp help.',
  openGraph: {
    title: 'Pricing | Diet2Anybody',
    description: 'Choose a nutrition plan that fits your goals and budget.',
    url: '/pricing',
  },
}

export default function PricingPage() {
  return <PricingPageContent />
}
