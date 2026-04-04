"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Weight,
  Venus,
  Droplet,
  ThermometerSun,
  Dumbbell,
  Milk,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import HairGrowthIcon from '@/components/icons/HairGrowthIcon'
import PregnantWomanIcon from '@/components/icons/PregnantWomanIcon'
import type { ServiceItem } from '@/lib/services'
import { serviceProgramDetails } from '@/lib/service-program-details'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Weight,
  Venus,
  Droplet,
  ThermometerSun,
  PregnantWoman: PregnantWomanIcon,
  Dumbbell,
  HairGrowth: HairGrowthIcon,
  Milk,
}

type Props = {
  service: ServiceItem
}

export default function ServiceProgramContent({ service }: Props) {
  const detail = serviceProgramDetails[service.id]
  const Icon = iconMap[service.icon] || Weight

  if (!detail) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <p className="text-muted-foreground mb-6">This program page is not available.</p>
        <Button asChild>
          <Link href="/services">All services</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-accent py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_280px] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Specialized program
              </span>
              <h1 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 text-lg font-medium text-primary">{detail.tagline}</p>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">{detail.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="rounded-full px-8">
                  <Link href="/contact">
                    Book consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8">
                  <Link href="/services">All programs</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-primary/10 md:h-40 md:w-40">
                <Icon
                  className={cn(
                    'text-primary',
                    service.id === 'pregnant' ? 'h-[4.5rem] w-[4.5rem]' : 'h-16 w-16 md:h-20 md:w-20'
                  )}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Why this program works</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Evidence-informed nutrition tailored to your body—not a one-size-fits-all PDF.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {detail.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <Sparkles className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="text-muted-foreground">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">What&apos;s included</h2>
              <ul className="space-y-4">
                {detail.included.map((line) => (
                  <li key={line} className="flex gap-3 text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">Ideal for</h2>
              <ul className="space-y-4">
                {detail.idealFor.map((line) => (
                  <li key={line} className="flex gap-3 text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">How it works</h2>
          </motion.div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {detail.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">Ready to start?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/85">
              Tell us your goals—we&apos;ll match you with the right plan and follow-up cadence.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-10">
              <Link href="/contact">Book a consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
