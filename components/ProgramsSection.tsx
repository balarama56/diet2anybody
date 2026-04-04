"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { programs } from '@/lib/data'

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Choose Your Perfect{' '}
            <span className="text-primary">Diet Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Select a program that fits your goals and budget. All plans include personalized 
            guidance from our certified nutritionists.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div 
                className={`bg-card rounded-2xl p-8 shadow-sm border h-full flex flex-col ${
                  program.popular 
                    ? 'border-primary shadow-xl ring-2 ring-primary/20' 
                    : 'border-border hover:border-primary/20'
                } transition-all duration-300`}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{program.duration}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-foreground">{program.price}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  asChild 
                  className={`w-full rounded-full ${
                    program.popular ? '' : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
