import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { aboutPageGraph } from '@/lib/schema-org'
import AboutPageContent from './AboutPageContent'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Diet2Anybody - your trusted partner for personalized nutrition and diet plans. Meet our expert team of certified nutritionists.',
  openGraph: {
    title: 'About Us | Diet2Anybody',
    description: 'Learn about Diet2Anybody - your trusted partner for personalized nutrition and diet plans.',
    url: 'https://www.diet2anybody.com/about-us',
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageGraph()} />
      <AboutPageContent />
    </>
  )
}
