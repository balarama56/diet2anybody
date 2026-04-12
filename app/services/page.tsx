import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { servicesIndexGraph } from '@/lib/schema-org'
import ServicesPageContent from './ServicesPageContent'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive nutrition and diet services including weight loss, PCOS management, diabetes diet, thyroid diet, and kids nutrition programs.',
  openGraph: {
    title: 'Our Services | Diet2Anybody',
    description: 'Explore our comprehensive nutrition and diet services including weight loss, PCOS management, diabetes diet, thyroid diet, and kids nutrition programs.',
    url: 'https://www.diet2anybody.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesIndexGraph()} />
      <ServicesPageContent />
    </>
  )
}
