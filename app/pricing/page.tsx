import type { Metadata } from 'next'
import PricingPageContent from './PricingPageContent'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for Diet2Anybody nutrition programs. Basic, Standard, and Premium plans with personalized diet charts and expert support.',
  openGraph: {
    title: 'Pricing | Diet2Anybody',
    description: 'Choose a nutrition plan that fits your goals and budget.',
    url: '/pricing',
  },
}

export default function PricingPage() {
  return <PricingPageContent />
}
