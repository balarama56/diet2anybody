"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Weight,
  Venus,
  Droplet,
  ThermometerSun,
  Dumbbell,
  Milk,
  ArrowRight,
} from 'lucide-react'
import HairGrowthIcon from '@/components/icons/HairGrowthIcon'
import PregnantWomanIcon from '@/components/icons/PregnantWomanIcon'
import { services } from '@/lib/data'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Weight,
  Venus,
  Droplet,
  ThermometerSun,
  PregnantWoman: PregnantWomanIcon,
  Dumbbell,
  HairGrowth: HairGrowthIcon,
  Milk,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Specialized Diet Programs for{' '}
            <span className="text-primary">Every Need</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We offer comprehensive nutrition services tailored to your specific health goals and conditions.
            Our expert dietitians create personalized plans that work for your lifestyle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Weight

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                      <Icon
                        className={cn(
                          'text-primary transition-colors group-hover:text-primary-foreground',
                          service.id === 'pregnant' ? 'h-9 w-9' : 'h-8 w-8'
                        )}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
