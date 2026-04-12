import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { dietPlansFaqs } from '@/lib/diet-plans-faqs'
import { dietPlansPageGraph } from '@/lib/schema-org'
import DietPlansPageContent from './DietPlansPageContent'

export const metadata: Metadata = {
  title: 'Diet Plans - Personalized Nutrition Programs',
  description: 'Explore our range of personalized diet plans designed for your specific health goals. From basic to premium programs, find the perfect fit for you.',
  openGraph: {
    title: 'Diet Plans | Diet2Anybody',
    description: 'Explore our range of personalized diet plans designed for your specific health goals.',
    url: 'https://www.diet2anybody.com/diet-plans',
  },
}

export default function DietPlansPage() {
  return (
    <>
      {/* Validate FAQ/WebPage rich results after deploy: https://search.google.com/test/rich-results */}
      <JsonLd data={dietPlansPageGraph([...dietPlansFaqs])} />
      <DietPlansPageContent />
    </>
  )
}
