'use client'

import { motion } from 'framer-motion'
import {
  Weight,
  Venus,
  Droplet,
  ThermometerSun,
  Dumbbell,
  Milk,
} from 'lucide-react'
import ServiceCard from './ServiceCard'
import HairGrowthIcon from '@/components/icons/HairGrowthIcon'
import PregnantWomanIcon from '@/components/icons/PregnantWomanIcon'
import { services } from '@/lib/services'
import { cn } from '@/lib/utils'
import { EASE_OUT, viewportOnce } from './animations'

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

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

const itemVar = {
  hidden: { opacity: 1, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

export default function ServiceGrid() {
  return (
    <section className="relative z-10 -mt-12 bg-[#f0f6f1] pb-14 pt-4 dark:bg-background md:-mt-14 md:pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mb-10 text-center md:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Programs</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">How we can help you</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Explore every specialized program—each card links to its full service page.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ ...viewportOnce, amount: 0.05 }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Weight
            return (
              <motion.div key={service.id} variants={itemVar} className="h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  icon={
                    <Icon
                      className={cn(
                        service.id === 'pregnant' ? 'h-8 w-8' : 'h-7 w-7'
                      )}
                    />
                  }
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
