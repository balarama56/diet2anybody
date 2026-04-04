"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star, ArrowRight, Heart, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { programs } from '@/lib/data'

export default function PricingPageContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-accent py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Pricing
            </span>
            <h1 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
              Plans that fit your <span className="text-primary">goals and budget</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Every plan includes personalized consultation and support from our nutrition team. Choose a duration
              that works for you—upgrade or extend anytime.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-foreground">
              <span className="inline-flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                5000+ clients
              </span>
              <span className="inline-flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                98% satisfaction
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative"
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <div className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                      <Star className="h-4 w-4 fill-current" />
                      Popular
                    </div>
                  </div>
                )}
                <div
                  className={`flex h-full flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all ${
                    program.popular ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'border-border hover:border-primary/30'
                  }`}
                >
                  <div className="mb-6 text-center">
                    <h2 className="text-xl font-semibold text-foreground">{program.title}</h2>
                    <p className="text-sm text-muted-foreground">{program.duration}</p>
                  </div>
                  <div className="mb-8 text-center">
                    <span className="text-4xl font-bold text-foreground">{program.price}</span>
                  </div>
                  <ul className="mb-8 flex-grow space-y-3">
                    {program.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full rounded-full">
                    <Link href="/contact">Get started</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Need help choosing? Book a free consultation—we&apos;ll recommend the best plan after understanding your
            health history and goals.
          </p>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link href="/diet-plans">
              Compare with full diet plan details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
