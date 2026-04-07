'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT } from '@/lib/contact'

const CATEGORIES = ['Nutrition', 'Weight Loss', 'PCOS', 'Diabetes', 'Recipes'] as const

interface BlogPostSidebarProps {
  /** Current article title — included in the lead for context */
  articleTitle: string
}

export default function BlogPostSidebar({ articleTitle }: BlogPostSidebarProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="sticky top-32 space-y-6">
      {/* CTA + lead form — dark green card, mint button */}
      <div className="rounded-2xl bg-[#2d5c2e] p-5 text-white shadow-lg ring-1 ring-white/10 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug text-white">
          Need Personalized Advice?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-emerald-100/90">
          Get a customized diet plan from our expert nutritionists.
        </p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 rounded-xl border border-white/15 bg-white/5 p-4 text-center"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20">
              <CheckCircle className="h-6 w-6 text-emerald-200" />
            </div>
            <p className="text-sm font-medium text-white">Thanks — we&apos;ll be in touch soon.</p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-3 text-xs text-emerald-200/90 underline underline-offset-2 hover:text-white"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-5 space-y-3"
            aria-label={`Book consultation — ${articleTitle}`}
          >
            <div>
              <label htmlFor="blog-sidebar-name" className="mb-1 block text-xs font-medium text-emerald-100/95">
                Name
              </label>
              <input
                id="blog-sidebar-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
              />
            </div>
            <div>
              <label htmlFor="blog-sidebar-email" className="mb-1 block text-xs font-medium text-emerald-100/95">
                Email
              </label>
              <input
                id="blog-sidebar-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={CONTACT.email}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
              />
            </div>
            <div>
              <label htmlFor="blog-sidebar-phone" className="mb-1 block text-xs font-medium text-emerald-100/95">
                Phone
              </label>
              <input
                id="blog-sidebar-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={CONTACT.phoneDisplay}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
              />
            </div>
            <div>
              <label htmlFor="blog-sidebar-message" className="mb-1 block text-xs font-medium text-emerald-100/95">
                Message <span className="font-normal text-white/50">(optional)</span>
              </label>
              <textarea
                id="blog-sidebar-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Goals or questions..."
                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 w-full rounded-full border-0 bg-emerald-100 font-semibold text-emerald-950 shadow-sm hover:bg-emerald-50 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Send className="h-4 w-4" />
                  </motion.span>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Book Consultation
                </span>
              )}
            </Button>
          </form>
        )}
      </div>

      {/* Categories */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 font-semibold text-foreground">Categories</h3>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className="block text-muted-foreground transition-colors hover:text-primary"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
