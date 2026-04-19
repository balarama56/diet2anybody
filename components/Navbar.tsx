"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import { CONTACT, CONTACT_PAGE_PATH } from '@/lib/contact'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { Button } from '@/components/ui/button'
import BrandLogo from '@/components/BrandLogo'
import { ThemeToggle } from '@/components/theme-toggle'
import { services } from '@/lib/services'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  {
    href: '/services',
    label: 'Services',
    children: services.map((s) => ({
      href: s.href,
      label: s.title,
    })),
  },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: CONTACT_PAGE_PATH, label: 'Contact Us' },
] as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href={CONTACT.phoneTel} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4 shrink-0" />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1 text-xs font-semibold text-white hover:opacity-90"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
              WhatsApp
            </a>
            <a href={CONTACT.mailto} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4 shrink-0" />
              <span>{CONTACT.email}</span>
            </a>
          </div>
          <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
        </div>
      </div>

      <motion.header
        initial={false}
        animate={{ y: 0 }}
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-card'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between min-h-[5.75rem] py-2 md:min-h-[6rem] lg:min-h-[6.25rem]">
            <BrandLogo priority />

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => 'children' in link && link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'relative flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary transition-colors font-medium',
                      'children' in link && link.children && activeDropdown === link.label && 'text-primary'
                    )}
                  >
                    {'children' in link && link.children && activeDropdown === link.label && (
                      <span className="absolute top-0 left-2 right-2 h-0.5 rounded-full bg-primary" aria-hidden />
                    )}
                    {link.label}
                    {'children' in link && link.children && (
                      <ChevronDown className="h-4 w-4 shrink-0 opacity-70" />
                    )}
                  </Link>

                  {'children' in link && link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 z-50 min-w-[20rem] max-w-[min(100vw-2rem,22rem)] overflow-hidden rounded-md border border-border bg-card shadow-xl"
                        >
                          <div className="h-1 w-full bg-primary" aria-hidden />
                          <div className="divide-y divide-border">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-4 py-3 text-sm leading-snug text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-1">
              <ThemeToggle />
              <Button asChild className="rounded-full px-6">
                <Link href={CONTACT_PAGE_PATH}>Book Consultation</Link>
              </Button>
            </div>

            <div className="flex items-center gap-1 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-4 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                    {'children' in link && link.children && (
                      <div className="ml-4 border-l-2 border-primary/30 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="mt-4 rounded-full">
                  <Link href={CONTACT_PAGE_PATH} onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
