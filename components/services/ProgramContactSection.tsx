'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/contact'
import { submitLead } from '@/lib/submit-lead'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { toast } from 'sonner'
import { EASE_OUT, viewportOnce } from './animations'

type ProgramContactSectionProps = {
  serviceTitle?: string
  serviceSlug?: string
}

const rows = [
  {
    icon: Phone,
    label: 'Call for active now',
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneTel,
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: 'Message us',
    href: CONTACT.whatsappUrl,
  },
  {
    icon: Mail,
    label: 'Send us a mail',
    value: CONTACT.email,
    href: CONTACT.mailto,
  },
  {
    icon: MapPin,
    label: 'Our location',
    value: 'Miyapur, Hyderabad, India',
    href: 'https://www.google.com/maps/search/?api=1&query=Miyapur%2C+Hyderabad%2C+India',
  },
] as const

export default function ProgramContactSection({
  serviceTitle,
  serviceSlug,
}: ProgramContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        source: 'service',
        serviceTitle: serviceTitle || undefined,
        serviceSlug: serviceSlug || undefined,
      })
      setIsSent(true)
      setFormData({ name: '', email: '', phone: '' })
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Could not send. Please try again or call us.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-[#f0f6f1] py-16 dark:bg-muted/15 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            className="rounded-[2rem] bg-card p-8 shadow-[0_4px_32px_-12px_rgba(0,0,0,0.08)] md:p-10"
          >
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">Get Your Plan Today</h2>
            {isSent ? (
              <p className="mt-8 text-muted-foreground">
                Thanks—we&apos;ll get back to you soon with more information.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-xl border-0 bg-muted/60 px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                />
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className="w-full rounded-xl border-0 bg-muted/60 px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full rounded-xl border-0 bg-muted/60 px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-xl bg-[#EF5350] py-3.5 text-sm font-semibold text-white transition hover:bg-[#E53935] disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending…' : 'Get Information Soon'}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.06 }}
            className="lg:pt-2"
          >
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 shrink-0 rounded-full bg-orange-500" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                Get in touch
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Make An Appointment
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              Ready to begin your journey towards a healthier you? Book a consultation with our expert dietitian for a
              personalized Indian diet plan for weight loss.
            </p>

            <ul className="mt-10 space-y-8">
              {rows.map((row) => {
                const isWa = row.href === CONTACT.whatsappUrl
                const openInNewTab = !isWa && row.href.startsWith('http')
                return (
                  <li key={row.label} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-[#4F8A3A] dark:bg-primary/15 dark:text-primary">
                      {isWa ? (
                        <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
                      ) : (
                        <row.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      )}
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-sm font-medium text-muted-foreground">{row.label}</p>
                      {isWa ? (
                        <a
                          href={row.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                          <WhatsAppIcon className="h-4 w-4 text-white" />
                          WhatsApp
                        </a>
                      ) : (
                        <a
                          href={row.href}
                          target={openInNewTab ? '_blank' : undefined}
                          rel={openInNewTab ? 'noopener noreferrer' : undefined}
                          className="mt-0.5 block break-words text-base font-semibold text-foreground underline-offset-4 hover:underline"
                        >
                          {row.value}
                        </a>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
