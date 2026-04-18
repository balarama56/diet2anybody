import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import HeroSection from '@/components/HeroSection'
import AboutHomeSection from '@/components/AboutHomeSection'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import ProgramsSection from '@/components/ProgramsSection'
import Testimonials from '@/components/Testimonials'
import BlogPreview from '@/components/BlogPreview'
import CTASection from '@/components/CTASection'
import { homePageGraph } from '@/lib/schema-org'

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
