'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqs } from '@/lib/data'
import { EASE_OUT, viewportOnce } from './animations'

/** Compact FAQ for service program detail pages — matches contact-style accordion. */
export default function ServiceProgramFAQ() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Common questions about our programs, consultations, and how we personalize your plan.
          </p>
          <Accordion type="single" collapsible className="mt-8 w-full border-t border-border">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`service-faq-${i}`} className="border-border">
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
  )
}
