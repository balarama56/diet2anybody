'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Reference lime (hover fill, CTA, footer dot) — keep in sync with `ServiceGrid` mint `#f0f6f1` for notch */
const LIME = '#81b441'

/** Quarter-circle notch: circle centered on the card’s bottom-right corner (sharp tangent joins). */
const NOTCH_R = '5.75rem'

export type ServiceCardProps = {
  title: string
  description: string
  badge?: string
  icon: React.ReactNode
  href: string
  className?: string
}

export default function ServiceCard({
  title,
  description,
  badge = '25+ Doctor',
  icon,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group block h-full min-h-[300px] outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        className
      )}
      style={{ ['--tw-ring-color' as string]: LIME }}
    >
      <div
        className={cn(
          'relative flex h-full min-h-[300px] flex-col overflow-hidden border border-border/50 bg-card p-8 pb-28',
          /* Rounded on three corners only — BR is a circular cut, not a second large radius (avoids a soft double curve). */
          'rounded-tl-[2.75rem] rounded-tr-[2.75rem] rounded-bl-[2.75rem] rounded-br-none',
          'transition-[border-color] duration-300 ease-out',
          'group-hover:border-transparent'
        )}
      >
        {/* Hover fill — lime wellness */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: LIME }}
          aria-hidden
        />

        {/* Watermark — faint grey on white; soft white on lime */}
        <div
          className="pointer-events-none absolute right-2 top-4 z-[2] flex h-36 w-36 items-center justify-center text-neutral-400 opacity-[0.09] transition-[color,opacity] duration-300 group-hover:text-white group-hover:opacity-[0.14]"
          aria-hidden
        >
          <span className="flex scale-[2.8] [&_svg]:h-8 [&_svg]:w-8">{icon}</span>
        </div>

        <div className="relative z-[3] flex flex-1 flex-col">
          <div
            className={cn(
              'relative mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300',
              'bg-neutral-100 text-foreground dark:bg-white/10',
              'group-hover:bg-white/20 group-hover:text-white'
            )}
          >
            <span className="[&_svg]:h-7 [&_svg]:w-7">{icon}</span>
          </div>

          <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/92">
            {description}
          </p>

          <div
            className="mt-8 border-t border-dashed border-border transition-colors duration-300 group-hover:border-white/40"
            aria-hidden
          />

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-white">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#81b441] transition-colors duration-300 group-hover:bg-black dark:bg-primary dark:group-hover:bg-black"
              aria-hidden
            />
            <span>{badge}</span>
          </div>
        </div>

        {/* Scooped corner: full circle centered on BR corner; parent overflow clips to a perfect quarter arc */}
        <div
          className="pointer-events-none absolute z-[4] rounded-full bg-[#f0f6f1] dark:bg-background"
          style={{
            width: `calc(${NOTCH_R} * 2)`,
            height: `calc(${NOTCH_R} * 2)`,
            bottom: `calc(-1 * ${NOTCH_R})`,
            right: `calc(-1 * ${NOTCH_R})`,
          }}
          aria-hidden
        />

        {/* CTA inset so cream shows between arc and circle (flat — no shadow) */}
        <span
          className="absolute bottom-3 right-3 z-[5] flex h-14 w-14 items-center justify-center rounded-full text-white transition-colors duration-300"
          style={{ backgroundColor: LIME }}
          aria-hidden
        >
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  )
}
