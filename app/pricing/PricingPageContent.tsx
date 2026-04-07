"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import PricingCardsGrid, { PRICING_SECTION_BG } from '@/components/services/PricingCardsGrid'
import { faqs } from '@/lib/data'
import { servicePricingTiers } from '@/lib/pricing-plans'

export default function PricingPageContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-accent py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Pricing
            </span>
            <h1 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
              Plans that fit your <span className="text-primary">goals and budget</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Monthly plans with clear inclusions—same options as on our home page. Upgrade anytime as your goals evolve.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-foreground">
              <span className="inline-flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                5000+ clients
              </span>
              <span className="inline-flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                98% satisfaction
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: PRICING_SECTION_BG }}>
        <div className="container mx-auto px-4">
          <PricingCardsGrid tiers={servicePricingTiers} priceSuffix=" / month" />
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
            Need help choosing? Book a free consultation—we&apos;ll recommend the best plan after understanding your
            health history and goals.
          </p>

          <div className="mb-12 flex justify-center">
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="/diet-plans">
                Compare with full diet plan details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              Common questions about plans, customization, and support—so you can choose with confidence.
            </p>
            <Accordion type="single" collapsible className="mt-8 w-full border-t border-border">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`pricing-faq-${i}`} className="border-border">
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline [&[data-state=open]]:text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  )
}
