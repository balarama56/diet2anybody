import HeroSection from '@/components/HeroSection'
import AboutHomeSection from '@/components/AboutHomeSection'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import ProgramsSection from '@/components/ProgramsSection'
import Testimonials from '@/components/Testimonials'
import BlogPreview from '@/components/BlogPreview'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
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
