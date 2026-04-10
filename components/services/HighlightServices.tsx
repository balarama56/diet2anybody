'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CONTACT_PAGE_PATH } from '@/lib/contact'
import { cn } from '@/lib/utils'
import { EASE_OUT, viewportOnce } from './animations'

const cards = [
  {
    title: 'Nutritional Counseling',
    description: 'Deep-dive sessions to map goals, history, and a sustainable eating roadmap.',
    image: '/images/blog/balanced-diet.webp',
    href: CONTACT_PAGE_PATH,
    accent: true,
  },
  {
    title: 'Weight Management',
    description: 'Steady fat loss or gain with Indian meals and portion strategies you can repeat.',
    image: '/images/blog/weight-loss.webp',
    href: '/services/indian-diet-plan-for-weight-loss',
    accent: false,
  },
  {
    title: 'Meal Planning Services',
    description: 'Weekly structure, grocery lists, and swaps around foods you already love.',
    image: '/hero-dietitian.webp',
    href: '/diet-plans',
    accent: false,
  },
  {
    title: 'Nutrition Education',
    description: 'Labels, macros, and habits—so confidence lasts beyond the first consult.',
    image: '/images/blog/pcos-diet.webp',
    href: '/blog',
    accent: false,
  },
]

export default function HighlightServices() {
  return (
    <section className="bg-secondary/35 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Our Services</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            The Best Quality Service
            <br className="hidden sm:block" /> You Can Get
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Premium visuals, clear outcomes, and follow-ups that keep you on track—without fad rules.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, delay: i * 0.06, ease: EASE_OUT }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              </div>
              <div
                className={cn(
                  'flex flex-1 flex-col p-6',
                  card.accent ? 'bg-primary text-primary-foreground' : 'bg-card'
                )}
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p
                  className={cn(
                    'mt-2 flex-1 text-sm leading-relaxed',
                    card.accent ? 'text-primary-foreground/90' : 'text-muted-foreground'
                  )}
                >
                  {card.description}
                </p>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 24 }}>
                  <Link
                    href={card.href}
                    className={cn(
                      'mt-4 inline-flex items-center gap-2 text-sm font-semibold',
                      card.accent ? 'text-primary-foreground' : 'text-primary'
                    )}
                  >
                    View All Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
