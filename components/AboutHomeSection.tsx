'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ABOUT_PAGE_PATH, CONTACT_PAGE_PATH } from '@/lib/contact'

const highlights = [
  'Personalized diet plans based on lifestyle, health goals & medical needs.',
  'Science-backed guidance for weight loss, gut health & holistic wellness.',
  'Constant support, progress tracking & mindset coaching.',
]

export default function AboutHomeSection() {
  return (
    <section className="bg-secondary/35 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative mx-auto max-w-md lg:order-2 lg:mx-0"
          >
            <div
              className="absolute -bottom-3 -left-3 -z-0 h-[78%] w-[88%] rounded-2xl rounded-br-[2.75rem] bg-primary/25"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/60">
              <Image
                src="/team/alekya.webp"
                alt="Dt. Alekya — Nutritionist, Health Coach, and Gut Health Consultant at Diet2Anybody"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:order-1"
          >
            <span className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              About Us
            </span>

            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Your Trusted Partner in <span className="text-primary">Health & Nutrition</span>
            </h2>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Diet2Anybody was founded to make expert nutrition advice accessible to everyone. Good health starts with
              good food—and the right guidance can transform lives.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I&apos;m Alekya, a certified{' '}
              <strong className="font-semibold text-foreground">Nutritionist, Health Coach, and Gut Health Consultant</strong>{' '}
              with 8+ years of experience. My belief is simple:{' '}
              <strong className="font-semibold text-foreground">Food is the first medicine.</strong> We help your mind,
              body, and habits stay in harmony—one meal at a time.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span className="leading-snug">{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="rounded-full">
                <Link href={ABOUT_PAGE_PATH}>
                  Learn more about us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href={CONTACT_PAGE_PATH}>Get in touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
