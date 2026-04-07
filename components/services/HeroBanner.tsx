'use client'

import { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_PAGE_PATH } from '@/lib/contact'

const heroEase = [0.16, 1, 0.3, 1] as const

export default function HeroBanner() {
  const rootRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const root = rootRef.current
    const bg = bgRef.current
    if (!root || !bg) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const p = self.progress
          gsap.set(bg, { y: p * 90, scale: 1 + p * 0.06 })
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="hero-banner relative min-h-[min(92vh,880px)] overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/hero-dietitian.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,255,255,0.15),transparent_55%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 9deg, rgba(255,255,255,0.06) 9deg 18deg)`,
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[min(92vh,880px)] items-center">
        <div className="container mx-auto px-4 py-20 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <motion.div
              className="max-w-xl text-primary-foreground"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.06 },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: heroEase } },
                }}
              >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.35rem] lg:leading-[1.1]">
                  Services
                </h1>
              </motion.div>
              <motion.nav
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: heroEase } },
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur-md"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="transition-opacity hover:opacity-80">
                  Home
                </Link>
                <span className="text-primary-foreground/70">&gt;&gt;</span>
                <span className="font-medium">Services</span>
              </motion.nav>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: heroEase } },
                }}
                className="mt-8 text-lg leading-relaxed text-primary-foreground/92"
              >
                Personalized nutrition programs for weight, hormones, pregnancy, and long-term wellness—delivered by
                certified dietitians.
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: heroEase } },
                }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Button asChild size="lg" variant="secondary" className="rounded-full px-8 shadow-lg">
                  <Link href={CONTACT_PAGE_PATH}>Let&apos;s talk</Link>
                </Button>
                <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-1 backdrop-blur-sm">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 hover:bg-white/10"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 hover:bg-white/10"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 hover:bg-white/10"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: heroEase, delay: 0.15 }}
              className="relative mx-auto mt-4 w-full max-w-lg md:mt-0"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border-4 border-white/25 shadow-2xl">
                <Image
                  src="/hero-dietitian.webp"
                  alt="Colorful balanced meal with fresh vegetables and whole foods"
                  fill
                  className="object-cover object-[center_40%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
