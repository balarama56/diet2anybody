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

const GREEN_DARK = '#2d5a27'
const CHECK_CIRCLE = '#6b9b5a'

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
            'group relative flex h-full flex-col rounded-2xl bg-white p-8 text-left',
            'shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)]',
            'transition-shadow duration-300 ease-out',
            'hover:shadow-[0_20px_40px_-12px_rgba(45,90,39,0.18)]',
            tier.popular && 'border-2 shadow-[0_8px_28px_-8px_rgba(45,90,39,0.2)]'
          )}
          style={tier.popular ? { borderColor: GREEN_DARK } : undefined}
        >
          {tier.popular && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 6 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 500, damping: 24, delay: 0.2 }}
              className="absolute -top-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm"
              style={{ backgroundColor: GREEN_DARK }}
            >
              <motion.span
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                aria-hidden
              >
                <Star className="h-3.5 w-3.5 fill-white text-white" />
              </motion.span>
              {popularBadgeLabel}
            </motion.div>
          )}

          <div className="mb-1">
            <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-[#2d5a27] md:text-xl">
              {tier.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{tier.subtitle}</p>
          </div>

          <motion.p
            variants={priceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-[2rem]"
          >
            {tier.price}
            {priceSuffix ? (
              <span className="ml-1 text-base font-medium text-muted-foreground">{priceSuffix}</span>
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
              <motion.li key={f} variants={rowVariants} className="flex items-start gap-3 text-sm text-muted-foreground">
                <motion.span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${CHECK_CIRCLE}33` }}
                  whileHover={{ scale: 1.15, backgroundColor: `${CHECK_CIRCLE}55` }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  aria-hidden
                >
                  <Check className="h-3 w-3" strokeWidth={3} style={{ color: CHECK_CIRCLE }} />
                </motion.span>
                <span className="leading-snug">{f}</span>
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
                'transition-[background-color,color,box-shadow,border-color] duration-300 ease-out',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] focus-visible:ring-offset-2',
                tier.popular
                  ? 'bg-[#2d5a27] text-white shadow-md hover:bg-[#1e4219] hover:shadow-lg active:bg-[#183515]'
                  : cn(
                      'border border-[#2d5a27]/20 bg-[#e8f3e6] text-[#2d5a27] shadow-sm',
                      'hover:border-[#2d5a27] hover:bg-[#2d5a27] hover:text-white hover:shadow-md',
                      'active:bg-[#234a20] active:text-white'
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

/** Mint background used by service pricing section */
export const PRICING_SECTION_BG = '#f0f7ef'
