"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_PAGE_PATH } from '@/lib/contact'

const highlights = [
  'Personalized Diet Plans',
  'Expert Nutritionists',
  'Proven Results',
]

/** Responsive sources — built by `scripts/hero-variants.mjs` when `public/hero-dietitian.webp` exists (static export has no Image optimizer). */
function HeroPicture() {
  return (
    <picture className="absolute inset-0 block">
      <source media="(max-width: 767px)" srcSet="/hero-dietitian-640.webp" type="image/webp" />
      <source media="(max-width: 1279px)" srcSet="/hero-dietitian-1024.webp" type="image/webp" />
      <source media="(min-width: 1280px)" srcSet="/hero-dietitian-1440.webp" type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element -- explicit <picture> sources for responsive LCP with output: export */}
      <img
        src="/hero-dietitian.webp"
        alt="Expert Dietitian"
        width={960}
        height={960}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </picture>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-secondary via-background to-accent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Welcome to Diet2Anybody
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Transform Your Health with{' '}
              <span className="text-primary">Expert Nutrition</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground lg:mx-0"
            >
              Get personalized diet plans from certified nutritionists.
              Whether you want to lose weight, manage PCOS, diabetes, or simply eat healthier,
              we are here to guide you every step of the way.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-full px-8 text-base">
                <Link href={CONTACT_PAGE_PATH}>
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
                <Link href="/services" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Our Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image — no scroll-linked transforms (reduces main-thread work / forced layouts) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="relative mx-auto aspect-square max-w-lg">
                {/* Decorative circles */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/20" />
                <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30" />

                {/* Main image */}
                <div className="absolute inset-[10%] overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-2xl">
                  <HeroPicture />
                </div>

                {/* Floating cards */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  className="absolute -left-4 top-1/4 rounded-2xl bg-card p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-2xl">🥗</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">300+</p>
                      <p className="text-sm text-muted-foreground">Happy Clients</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.45 }}
                  className="absolute -right-4 bottom-1/4 rounded-2xl bg-card p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">98%</p>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
