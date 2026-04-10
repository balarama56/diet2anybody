'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export type BlogFaqItem = { q: string; a: string }

export function BlogFAQSection({ items }: { items: BlogFaqItem[] }) {
  if (items.length === 0) return null

  return (
    <div className="not-prose my-10 rounded-2xl border border-border bg-card shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight text-foreground px-5 pt-6 pb-1">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full px-3 pb-2 sm:px-5 sm:pb-4">
        {items.map((item, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`} className="border-border/80">
            <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline py-4">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] max-w-none">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
