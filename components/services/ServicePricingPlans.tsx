'use client'

import { motion } from 'framer-motion'
import PricingCardsGrid, { PRICING_SECTION_SURFACE_CLASS } from '@/components/services/PricingCardsGrid'
import { servicePricingTiers } from '@/lib/pricing-plans'
import { EASE_OUT, viewportOnce } from './animations'

export default function ServicePricingPlans() {
  return (
    <section className={`py-16 md:py-20 ${PRICING_SECTION_SURFACE_CLASS}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Choose your plan</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Monthly plans with clear inclusions—upgrade anytime as your goals evolve.
          </p>
        </motion.div>

        <PricingCardsGrid tiers={servicePricingTiers} priceSuffix=" / month" />
      </div>
    </section>
  )
}
