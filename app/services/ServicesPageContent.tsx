"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Scale, 
  Heart, 
  Activity, 
  Sparkles, 
  Baby, 
  Dumbbell,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Heart,
  Activity,
  Sparkles,
  Baby,
  Dumbbell,
}

const features = [
  {
    icon: Users,
    title: 'Personalized Approach',
    description: 'Every diet plan is customized to your unique needs, preferences, and health goals.',
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Our certified nutritionists have years of experience helping clients achieve results.',
  },
  {
    icon: Clock,
    title: 'Ongoing Support',
    description: 'Regular follow-ups and 24/7 support to keep you motivated and on track.',
  },
]

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Nutrition Services for{' '}
              <span className="text-primary">Better Health</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              We offer specialized diet programs tailored to your specific health needs. 
              From weight management to managing chronic conditions, our expert dietitians are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Specialized Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of specialized nutrition programs designed for specific health conditions and goals.
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Heart
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-card rounded-3xl p-8 shadow-sm border border-border`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-primary/10 rounded-3xl flex items-center justify-center">
                      <Icon className="h-16 w-16 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 max-w-2xl">{service.description}</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Personalized Plans
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Expert Support
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Proven Results
                      </div>
                    </div>

                    <Button asChild className="rounded-full">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Book a free consultation with our expert dietitians. We will assess your needs 
              and recommend the best program for your health goals.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
