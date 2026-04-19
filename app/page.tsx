import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import JsonLd from '@/components/JsonLd'
import HeroSection from '@/components/HeroSection'
import { homePageGraph } from '@/lib/schema-org'

const AboutHomeSection = dynamic(() => import('@/components/AboutHomeSection'))
const ServicesSection = dynamic(() => import('@/components/ServicesSection'))
const StatsSection = dynamic(() => import('@/components/StatsSection'))
const ProgramsSection = dynamic(() => import('@/components/ProgramsSection'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const BlogPreview = dynamic(() => import('@/components/BlogPreview'))
const CTASection = dynamic(() => import('@/components/CTASection'))

export const metadata: Metadata = {
  title: 'Home - Personalized Diet Plans for Weight Loss, PCOS, Diabetes & Thyroid',
  description:
    'Diet2Anybody home page: personalized diet plans for weight loss, PCOS, diabetes, thyroid, pregnancy, and overall wellness with expert nutritionist support online and in Hyderabad.',
  openGraph: {
    title:
      'Home | Diet2Anybody - Personalized Diet Plans for Weight Loss, PCOS, Diabetes & Thyroid',
    description:
      'Explore personalized diet plans from Diet2Anybody for weight loss, PCOS, diabetes, thyroid, pregnancy, and healthy lifestyle goals.',
    url: 'https://www.diet2anybody.com/',
  },
}

export default function Home() {
  return (
    <>
      <JsonLd data={homePageGraph()} />
      <HeroSection />
      <AboutHomeSection />
      <ServicesSection />
      <StatsSection />
      <ProgramsSection />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  )
}
