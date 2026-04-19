'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { CONTACT_PAGE_PATH } from '@/lib/contact'
import { cn } from '@/lib/utils'
import { EASE_OUT, viewportOnce } from './animations'

export type PricingCardTier = {
  id: string
  title: string
  subtitle: string
  price: string
  popular?: boolean
  features: string[]
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
} as const

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
} as const

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
} as const

const priceVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT, delay: 0.05 },
  },
}

type Props = {
  tiers: PricingCardTier[]
  /** Shown after price (e.g. ` / month`). Empty string hides the suffix. */
  priceSuffix?: string
  /** Label on the popular tier badge */
  popularBadgeLabel?: string
  className?: string
}

export default function PricingCardsGrid({
  tiers,
  priceSuffix = ' / month',
  popularBadgeLabel = 'Most Popular',
  className,
}: Props) {
  return (
    <motion.div
      className={cn('mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-5 lg:gap-8', className)}
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {tiers.map((tier) => (
        <motion.div
          key={tier.id}
          variants={cardVariants}
          whileHover={{
            y: -10,
            scale: 1.02,
            transition: { type: 'spring', stiffness: 420, damping: 22 },
          }}
          className={cn(
            'group relative flex h-full flex-col rounded-2xl border bg-card p-8 text-left text-card-foreground',
            'shadow-md shadow-black/5 ring-1 ring-black/[0.06]',
            'transition-[box-shadow,transform,border-color] duration-300 ease-out',
            'hover:shadow-xl hover:shadow-black/10 hover:ring-black/[0.08]',
            'dark:shadow-black/40 dark:ring-white/[0.08] dark:hover:shadow-black/50 dark:hover:ring-white/[0.12]',
            tier.popular
              ? cn(
                  'border-primary border-2 shadow-lg shadow-primary/15 ring-primary/25',
                  'bg-gradient-to-b from-primary/[0.12] via-card to-card dark:from-primary/[0.18]'
                )
              : 'border-border'
          )}
        >
          {tier.popular && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 6 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 500, damping: 24, delay: 0.2 }}
              className="absolute -top-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-md"
            >
              <motion.span
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                aria-hidden
              >
                <Star className="h-3.5 w-3.5 fill-primary-foreground text-primary-foreground" />
              </motion.span>
              {popularBadgeLabel}
            </motion.div>
          )}

          <div className="mb-1">
            <h3 className="text-xl font-extrabold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-primary md:text-2xl dark:text-neutral-50">
              {tier.title}
            </h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              {tier.subtitle}
            </p>
          </div>

          <motion.p
            variants={priceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1"
          >
            <span className="text-4xl font-extrabold tabular-nums tracking-tight text-neutral-900 dark:text-neutral-50 md:text-[2.5rem]">
              {tier.price}
            </span>
            {priceSuffix ? (
              <span className="text-base font-semibold text-neutral-600 dark:text-neutral-400">{priceSuffix}</span>
            ) : null}
          </motion.p>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="mt-8 flex flex-1 flex-col gap-3"
          >
            {tier.features.map((f) => (
              <motion.li
                key={f}
                variants={rowVariants}
                className="flex items-start gap-3 text-[0.9375rem] leading-snug text-neutral-700 dark:text-neutral-300"
              >
                <motion.span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary dark:bg-primary/25"
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  aria-hidden
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </motion.span>
                <span>{f}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          >
            <Link
              href={CONTACT_PAGE_PATH}
              className={cn(
                'relative block w-full rounded-full py-3.5 text-center text-sm font-semibold',
                'transition-[background-color,color,box-shadow,border-color,transform] duration-300 ease-out',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                tier.popular
                  ? 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg active:bg-primary/85'
                  : cn(
                      'border-2 border-primary/35 bg-background text-primary shadow-sm',
                      'hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md',
                      'active:bg-primary/90 active:text-primary-foreground'
                    )
              )}
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

/** Mint band behind pricing cards — includes dark surface */
export const PRICING_SECTION_SURFACE_CLASS =
  'bg-[#eef6ec] dark:bg-gradient-to-b dark:from-muted/50 dark:to-background'
