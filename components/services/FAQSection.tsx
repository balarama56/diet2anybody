'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/lib/data'
import { EASE_OUT, viewportOnce } from './animations'

export default function FAQSection() {
  return (
    <section className="bg-secondary/35 py-16 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mb-10 text-center lg:mb-14 lg:text-left"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground lg:mx-0">
            Everything you need to know about consultations, customization, and ongoing support.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border shadow-2xl lg:aspect-[4/5]">
              <Image
                src="/about-team.webp"
                alt="Our team"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline data-[state=open]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
