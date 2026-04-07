"use client"

import { motion } from 'framer-motion'
import PricingCardsGrid, { PRICING_SECTION_BG } from '@/components/services/PricingCardsGrid'
import { servicePricingTiers } from '@/lib/pricing-plans'

export default function ProgramsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: PRICING_SECTION_BG }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Our Programs
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Choose Your Perfect{' '}
            <span className="text-primary">Diet Plan</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Same monthly plans as on our programs—clear inclusions, upgrade anytime as your goals evolve.
          </p>
        </motion.div>

        <PricingCardsGrid tiers={servicePricingTiers} priceSuffix=" / month" />
      </div>
    </section>
  )
}
