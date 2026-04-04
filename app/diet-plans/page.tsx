import type { Metadata } from 'next'
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
  return <DietPlansPageContent />
}
