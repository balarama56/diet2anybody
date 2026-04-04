"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Scale, 
  CheckCircle, 
  ArrowRight,
  Utensils,
  Activity,
  Heart,
  Clock,
  Users,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { programs } from '@/lib/data'

const benefits = [
  {
    icon: Scale,
    title: 'Sustainable Weight Loss',
    description: 'No crash diets or extreme restrictions. Our approach focuses on healthy, lasting weight management.',
  },
  {
    icon: Utensils,
    title: 'Delicious Meal Plans',
    description: 'Enjoy tasty, satisfying meals while losing weight. No bland or boring food here!',
  },
  {
    icon: Activity,
    title: 'Boosted Metabolism',
    description: 'Learn eating patterns that naturally boost your metabolism for efficient fat burning.',
  },
  {
    icon: Heart,
    title: 'Improved Health',
    description: 'Beyond weight loss, experience better energy, sleep, and overall well-being.',
  },
]

const process = [
  {
    step: 1,
    title: 'Initial Assessment',
    description: 'We analyze your current health status, lifestyle, eating habits, and weight loss goals.',
  },
  {
    step: 2,
    title: 'Personalized Plan',
    description: 'Receive a custom diet plan designed specifically for your body and preferences.',
  },
  {
    step: 3,
    title: 'Regular Monitoring',
    description: 'Weekly check-ins to track progress and adjust your plan as needed.',
  },
  {
    step: 4,
    title: 'Achieve Results',
    description: 'Reach your target weight and learn to maintain it for life.',
  },
]

const faqs = [
  {
    question: 'How much weight can I lose?',
    answer: 'Results vary by individual, but most clients lose 2-4 kg per month following our plans. We focus on sustainable weight loss rather than quick fixes.',
  },
  {
    question: 'Do I need to exercise?',
    answer: 'While exercise enhances results, our diet plans are effective on their own. We recommend light activity but design plans that work with your lifestyle.',
  },
  {
    question: 'Can I eat my favorite foods?',
    answer: 'Yes! We incorporate your food preferences into your plan. No food is completely off-limits - we teach you balance and portion control.',
  },
  {
    question: 'What if I have medical conditions?',
    answer: 'Our nutritionists are experienced in creating plans for various health conditions including diabetes, thyroid issues, and PCOS.',
  },
]

export default function WeightLossPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Weight Loss Program
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Achieve Your Ideal Weight with{' '}
                <span className="text-primary">Expert Guidance</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Our science-backed weight loss programs are designed to help you lose weight 
                healthily and sustainably. No fad diets, no extreme restrictions - just 
                personalized nutrition that works.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Personalized Plans
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  98% Success Rate
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Expert Support
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link href="#programs">View Programs</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative bg-primary/10 rounded-3xl overflow-hidden aspect-square">
                  <Image
                    src="/weight-loss-hero.jpg"
                    alt="Weight Loss Success"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">3000+</p>
                      <p className="text-sm text-muted-foreground">Weight Loss Success</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Weight Loss Program?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our approach combines nutrition science with practical lifestyle changes for results 
              that last a lifetime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Simple Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting started is easy. Here&apos;s how we help you achieve your weight loss goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-primary">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Program
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select a plan that fits your goals and budget. All programs include personalized guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className={`bg-card rounded-2xl p-8 shadow-sm border h-full flex flex-col ${
                  program.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                }`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm">{program.duration}</p>
                    <div className="text-4xl font-bold text-foreground mt-4">{program.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full rounded-full ${
                    !program.popular && 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to Transform Your Body?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Take the first step towards a healthier you. Book a free consultation 
              and let&apos;s create your personalized weight loss plan.
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
