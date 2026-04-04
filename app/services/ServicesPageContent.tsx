'use client'

import { motion } from 'framer-motion'
import HeroBanner from '@/components/services/HeroBanner'
import ServiceGrid from '@/components/services/ServiceGrid'
import HighlightServices from '@/components/services/HighlightServices'
import TransformationGallery from '@/components/services/TransformationGallery'
import FAQSection from '@/components/services/FAQSection'
import AppointmentCTA from '@/components/services/AppointmentCTA'

export default function ServicesPageContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen overflow-x-hidden"
    >
      <HeroBanner />
      <ServiceGrid />
      <HighlightServices />
      <TransformationGallery />
      <FAQSection />
      <AppointmentCTA variant="fullbleed" />
    </motion.div>
  )
}
