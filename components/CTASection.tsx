"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Calendar } from 'lucide-react'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { Button } from '@/components/ui/button'
import { CONTACT, CONTACT_PAGE_PATH } from '@/lib/contact'

export default function CTASection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg text-pretty">
              Book a free consultation today and take the first step towards a healthier, 
              happier you. Our expert dietitians are here to guide you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-8 text-base"
              >
                <Link href={CONTACT_PAGE_PATH} className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href={CONTACT.phoneTel} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call {CONTACT.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-full border-0 bg-[#25D366] px-8 text-base text-white hover:bg-[#20BD5A]"
              >
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
