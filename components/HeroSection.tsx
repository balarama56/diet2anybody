"use client"

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_PAGE_PATH } from '@/lib/contact'

const highlights = [
  'Personalized Diet Plans',
  'Expert Nutritionists',
  'Proven Results',
]

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-secondary via-background to-accent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            style={{ opacity }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Welcome to Diet2Anybody
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
            >
              Transform Your Health with{' '}
              <span className="text-primary">Expert Nutrition</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              Get personalized diet plans from certified nutritionists. 
              Whether you want to lose weight, manage PCOS, diabetes, or simply eat healthier, 
              we are here to guide you every step of the way.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
            >
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-full px-8 text-base">
                <Link href={CONTACT_PAGE_PATH}>
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 text-base"
              >
                <Link href="/services" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Our Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-primary/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-2 border-primary/30 rounded-full" />
                
                {/* Main image */}
                <div className="absolute inset-[10%] bg-gradient-to-br from-primary to-primary/80 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/hero-dietitian.webp"
                    alt="Expert Dietitian"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating cards */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -left-4 top-1/4 bg-card rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🥗</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">5000+</p>
                      <p className="text-sm text-muted-foreground">Happy Clients</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -right-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">98%</p>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
