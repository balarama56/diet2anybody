'use client'

import { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { EASE_OUT, viewportOnce } from './animations'

const images = [
  { src: '/blog/balanced-diet.webp', alt: 'Balanced meals' },
  { src: '/blog/weight-loss.webp', alt: 'Weight journey' },
  { src: '/blog/pcos-diet.webp', alt: 'PCOS nutrition' },
  { src: '/hero-dietitian.webp', alt: 'Consultation' },
  { src: '/about-team.webp', alt: 'Team' },
  { src: '/why-choose-us.webp', alt: 'Wellness' },
]

export default function TransformationGallery() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const el = sectionRef.current
    if (!el) return

    const tiles = el.querySelectorAll('[data-gallery-tile]')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        tiles,
        { y: 56, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Transformations</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Weight loss success gallery</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Real meals, real routines—nutrition that fits Indian kitchens and busy schedules.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              data-gallery-tile
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-sm"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-medium text-foreground shadow sm:text-xs">
                {i + 1} / {images.length}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
