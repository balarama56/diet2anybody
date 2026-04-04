'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { EASE_OUT, viewportOnce } from './animations'

type Props = {
  variant?: 'strip' | 'fullbleed'
}

export default function AppointmentCTA({ variant = 'strip' }: Props) {
  if (variant === 'fullbleed') {
    return (
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/hero-dietitian.webp"
            alt=""
            fill
            loading="lazy"
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/88" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: EASE_OUT }}
          >
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Want to schedule an appointment?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/88">
              Book a session to review goals, labs, and the best program—online or in person.
            </p>
            <motion.div
              className="mt-10 inline-block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-12 py-6 text-base shadow-[0_0_40px_-8px_rgba(255,255,255,0.55)] transition-shadow hover:shadow-[0_0_56px_-6px_rgba(255,255,255,0.7)]"
              >
                <Link href="/contact">Read More</Link>
              </Button>
            </motion.div>
          </motion.div>
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
            <Button asChild size="lg" className="rounded-full px-10 shadow-lg">
              <Link href="/contact">Read More</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
