import type { Metadata } from 'next'
import WeightLossPageContent from './WeightLossPageContent'

export const metadata: Metadata = {
  title: 'Weight Loss Diet Programs',
  description: 'Achieve sustainable weight loss with our personalized diet programs. Expert guidance from certified nutritionists for healthy, lasting results.',
  openGraph: {
    title: 'Weight Loss Diet Programs | Diet2Anybody',
    description: 'Achieve sustainable weight loss with our personalized diet programs.',
    url: 'https://www.diet2anybody.com/weight-loss',
  },
}

export default function WeightLossPage() {
  return <WeightLossPageContent />
}
