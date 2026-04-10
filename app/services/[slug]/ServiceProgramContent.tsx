"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_PAGE_PATH } from '@/lib/contact'
import type { ServiceItem } from '@/lib/services'
import { serviceProgramDetails } from '@/lib/service-program-details'
import ServicePricingPlans from '@/components/services/ServicePricingPlans'
import ProgramContactSection from '@/components/services/ProgramContactSection'
import ServiceProgramFAQ from '@/components/services/ServiceProgramFAQ'

type Props = {
  service: ServiceItem
}

export default function ServiceProgramContent({ service }: Props) {
  const detail = serviceProgramDetails[service.id]
  const landscapeHero = service.heroFrame === 'landscape'
  const thyroidHero = service.id === 'thyroid'

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
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_minmax(320px,560px)] lg:items-center">
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
                  <Link href={CONTACT_PAGE_PATH}>
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
              <div
                className={
                  landscapeHero
                    ? 'relative mx-auto aspect-[3/2] w-full max-w-[min(100%,560px)] shrink-0 overflow-hidden rounded-3xl border border-border bg-background shadow-sm lg:mx-0 lg:ml-auto'
                    : 'relative mx-auto aspect-[4/5] w-full max-w-[min(100%,480px)] shrink-0 overflow-hidden rounded-3xl border border-border bg-background shadow-sm lg:mx-0 lg:ml-auto'
                }
              >
                {thyroidHero ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      key={service.heroImage}
                      src={service.heroImage}
                      alt={`${service.title} — program hero`}
                      width={2000}
                      height={1333}
                      priority
                      sizes={
                        landscapeHero
                          ? '(max-width: 1024px) min(100vw - 2rem, 560px), 560px'
                          : '(max-width: 1024px) min(100vw - 2rem, 480px), 480px'
                      }
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <Image
                    key={service.heroImage}
                    src={service.heroImage}
                    alt={`${service.title} — program hero`}
                    fill
                    priority
                    sizes={
                      landscapeHero
                        ? '(max-width: 1024px) min(100vw - 2rem, 560px), 560px'
                        : '(max-width: 1024px) min(100vw - 2rem, 480px), 480px'
                    }
                    className="object-contain object-center"
                  />
                )}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mx-auto mt-16 max-w-4xl border-t border-border pt-14"
          >
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {detail.keywordSection.heading}
            </h2>
            {detail.keywordSection.paragraphs.map((p, idx) => (
              <p key={idx} className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      <ServicePricingPlans />

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

      <ProgramContactSection serviceTitle={service.title} serviceSlug={service.slug} />

      <ServiceProgramFAQ />
    </>
  )
}
