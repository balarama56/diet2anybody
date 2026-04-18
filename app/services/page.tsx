import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { servicesIndexGraph } from '@/lib/schema-org'
import ServicesPageContent from './ServicesPageContent'

export const metadata: Metadata = {
  title: 'Services - Weight Loss, PCOS, Diabetes, Thyroid & Specialized Diet Plans',
  description:
    'Services page: explore Diet2Anybody dietitian services including weight loss diet plans, PCOS diet plans, diabetes diet plans, thyroid nutrition, pregnancy, post-pregnancy, and hair growth support.',
  openGraph: {
    title:
      'Services | Diet2Anybody - Weight Loss, PCOS, Diabetes, Thyroid & Specialized Diet Plans',
    description:
      'Browse Diet2Anybody services for personalized nutrition: weight loss, PCOS, diabetes, thyroid, pregnancy, post-pregnancy, and more.',
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
