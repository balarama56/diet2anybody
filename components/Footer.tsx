"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from 'lucide-react'
import { CONTACT, CONTACT_PAGE_PATH } from '@/lib/contact'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { Button } from '@/components/ui/button'
import BrandLogo from '@/components/BrandLogo'
import { services } from '@/lib/services'
import { useState } from 'react'
import { toast } from 'sonner'
import { submitNewsletter } from '@/lib/submit-lead'

const footerLinks = {
  quickLinks: [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: CONTACT_PAGE_PATH, label: 'Contact Us' },
  ],
  services: services.map((s) => ({ href: s.href, label: s.title })),
}

const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const email = newsletterEmail.trim()
    if (!email) {
      toast.error('Please enter your email address.')
      return
    }
    setIsNewsletterSubmitting(true)
    try {
      await submitNewsletter({
        source: 'newsletter',
        email,
        placement: 'footer',
      })
      setNewsletterEmail('')
      toast.success("Thanks — you're subscribed.")
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : 'Could not subscribe. Please try again.'
      )
    } finally {
      setIsNewsletterSubmitting(false)
    }
  }

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-primary-foreground/80 mt-1">
                Get the latest health tips and diet advice delivered to your inbox
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
            >
              <input
                type="email"
                name="newsletter-email"
                autoComplete="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 w-full sm:w-80"
              />
              <Button
                type="submit"
                variant="secondary"
                disabled={isNewsletterSubmitting}
                className="rounded-full px-8 whitespace-nowrap"
              >
                {isNewsletterSubmitting ? 'Sending…' : 'Subscribe'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-6">
                <BrandLogo variant="footer" />
              </div>
              <p className="text-background/70 leading-relaxed mb-6">
                Your trusted partner for personalized nutrition and diet plans. 
                We help you achieve your health goals with expert guidance and support.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-background/70">
                    Miyapur, Hyderabad, India
                  </span>
                </li>
                <li>
                  <a
                    href={CONTACT.phoneTel}
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-white" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.mailto}
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-background/70">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} Diet2Anybody. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
