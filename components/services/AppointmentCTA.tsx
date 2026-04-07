'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Apple, ArrowRight, Banana, Cherry } from 'lucide-react'
import { CONTACT_PAGE_PATH } from '@/lib/contact'
import { EASE_OUT, viewportOnce } from './animations'

type Props = {
  variant?: 'strip' | 'fullbleed'
}

/** Diet2Anybody logo palette (globals.css): forest #2D5A27, sage #92B982, leaf #4F8A3A, cream #FDFDE0 */
const ctaBgClass =
  'bg-[linear-gradient(145deg,#92B982_0%,#4F8A3A_42%,#2D5A27_100%)]'

export default function AppointmentCTA({ variant = 'strip' }: Props) {
  if (variant === 'fullbleed') {
    return (
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Brand greens + sunburst (reference: rays from bottom center) */}
        <div className={`absolute inset-0 ${ctaBgClass}`} aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_50%_115%,rgba(253,253,224,0.18),transparent_52%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `repeating-conic-gradient(from 0deg at 50% 100%, transparent 0deg 11deg, rgba(255,255,255,0.07) 11deg 22deg)`,
          }}
          aria-hidden
        />

        {/* Decorative line-art food icons (reference) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <Apple
            className="absolute left-[6%] top-[14%] h-11 w-11 text-white/35 md:h-14 md:w-14"
            strokeWidth={1.15}
          />
          <Banana
            className="absolute right-[8%] top-[12%] h-12 w-12 text-white/30 md:h-16 md:w-16"
            strokeWidth={1.15}
          />
          <Cherry
            className="absolute bottom-[18%] right-[10%] h-11 w-11 text-white/32 md:h-14 md:w-14"
            strokeWidth={1.15}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-10 lg:gap-14">
            {/* Left: lifestyle / diet imagery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, ease: EASE_OUT }}
              className="md:col-span-5"
            >
              <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[1.75rem] border-4 border-white/25 shadow-none md:mx-0">
                <Image
                  src="/appointment-cta.webp"
                  alt="Healthy cooking and fresh ingredients for your nutrition plan"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right: headline + split CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, ease: EASE_OUT, delay: 0.06 }}
              className="text-center md:col-span-7 md:text-left"
            >
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                Want to schedule an appointment?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/90 md:mx-0">
                Book a session to review goals, labs, and the best program—online or in person.
              </p>
              <div className="mt-9 flex justify-center md:justify-start">
                <Link
                  href={CONTACT_PAGE_PATH}
                  className="group inline-flex items-stretch overflow-hidden rounded-2xl bg-[#FDFDE0] text-foreground shadow-none ring-1 ring-white/25 transition hover:bg-white"
                >
                  <span className="flex items-center px-8 py-4 text-base font-semibold">
                    Read More
                  </span>
                  <span className="flex min-h-[3.25rem] min-w-[3.25rem] items-center justify-center bg-neutral-800 text-white transition group-hover:bg-neutral-900">
                    <ArrowRight className="h-5 w-5" aria-hidden />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="border-y border-border bg-card py-14 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
        >
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Want to schedule an appointment?</h2>
            <p className="mt-2 text-muted-foreground">
              We&apos;ll match you with the right specialist and follow-up cadence for your goals.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={CONTACT_PAGE_PATH}
              className="group inline-flex items-stretch overflow-hidden rounded-2xl bg-primary text-primary-foreground"
            >
              <span className="flex items-center px-8 py-3 text-base font-semibold">Read More</span>
              <span className="flex min-h-[3rem] min-w-[3rem] items-center justify-center bg-black/20">
                <ArrowRight className="h-5 w-5" aria-hidden />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
