"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CONTACT } from '@/lib/contact'
import { submitLead } from '@/lib/submit-lead'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { toast } from 'sonner'

const contactFaqs = [
  {
    question: 'How do consultations work?',
    answer:
      'We offer both online and in-person consultations. Book a slot and our dietitian will review your health history, goals, and lifestyle—then create a personalized plan you can follow with confidence.',
  },
  {
    question: 'Is the first consultation free?',
    answer:
      'Yes. Your first consultation is free and without obligation. We use it to understand your needs and recommend the best program for you.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Use the contact form on this page, call or WhatsApp us, or email—we will confirm a time that works for you and send any prep steps before the session.',
  },
  {
    question: 'Can I cancel or reschedule my appointment?',
    answer:
      'Yes. Please give us at least 24 hours notice when possible so we can offer the slot to someone else. Contact us by phone or WhatsApp to reschedule.',
  },
] as const

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: [CONTACT.phoneDisplay],
    link: CONTACT.phoneTel,
  },
  {
    icon: Mail,
    title: 'Email',
    details: [CONTACT.email],
    link: CONTACT.mailto,
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['Miyapur, Hyderabad, India'],
    link: 'https://www.google.com/maps/search/?api=1&query=Miyapur%2C+Hyderabad%2C+India',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Saturday', '9:00 AM - 7:00 PM'],
    link: null,
  },
]

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: formData.service,
        source: 'contact',
      })
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Could not send. Please try again or call us.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Let&apos;s Start Your{' '}
              <span className="text-primary">Health Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Have questions about our services? Want to book a consultation? 
              We&apos;re here to help you take the first step towards a healthier life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  info.link ? (
                    <a 
                      key={idx}
                      href={info.link}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="text-muted-foreground">{detail}</p>
                  )
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex min-h-0 flex-col lg:h-full"
            >
              <div className="flex h-full min-h-0 flex-col rounded-3xl border border-border bg-card p-8 shadow-lg md:p-10">
                <h2 className="mb-2 shrink-0 text-2xl font-bold text-foreground md:text-3xl">
                  Book a Free Consultation
                </h2>
                <p className="mb-8 shrink-0 text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-1 flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We have received your message and will contact you shortly.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder={CONTACT.email}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder={CONTACT.phoneDisplay}
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Interested Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="weight-loss">Weight Loss Diet</option>
                          <option value="pcos">PCOS Diet</option>
                          <option value="diabetes">Diabetes Diet</option>
                          <option value="thyroid">Thyroid Diet</option>
                          <option value="kids">Kids Nutrition</option>
                          <option value="sports">Sports Nutrition</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col">
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="min-h-[7rem] w-full flex-1 resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us about your health goals..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="mt-auto w-full shrink-0 rounded-full py-6 text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Send className="h-5 w-5" />
                          </motion.span>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & WhatsApp — stretches to match form column height */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex min-h-0 flex-col gap-8 lg:h-full"
            >
              <div className="relative flex min-h-[16rem] flex-1 flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=Miyapur%2C+Hyderabad%2C+India&output=embed&z=13"
                  className="h-full min-h-[16rem] w-full border-0"
                  title="Our Location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* WhatsApp CTA */}
              <div className="shrink-0 rounded-3xl bg-primary p-8 text-primary-foreground">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/20">
                    <WhatsAppIcon className="h-8 w-8 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Connect via WhatsApp</h3>
                    <p className="text-primary-foreground/80 mb-4">
                      For quick queries and instant support, connect with us on WhatsApp. 
                      Our team responds within minutes!
                    </p>
                    <Button 
                      asChild 
                      variant="secondary"
                      className="rounded-full"
                    >
                      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ — full width below form + map/WhatsApp (accordion, minimal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-12 lg:mt-16"
          >
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Quick answers about booking, consultations, and how we support you—reach out anytime if you need more
                detail.
              </p>
              <Accordion type="single" collapsible className="mt-8 w-full border-t border-border">
                {contactFaqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`contact-faq-${i}`} className="border-border">
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline [&[data-state=open]]:text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
