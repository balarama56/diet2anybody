"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Check, 
  Star, 
  ArrowRight,
  Shield,
  Clock,
  MessageCircle,
  Award,
  Users,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import PricingCardsGrid, { PRICING_SECTION_SURFACE_CLASS } from '@/components/services/PricingCardsGrid'
import { dietPlansFaqs } from '@/lib/diet-plans-faqs'
import { servicePricingTiers } from '@/lib/pricing-plans'
import { CONTACT, CONTACT_PAGE_PATH } from '@/lib/contact'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'

const planTypes = [
  {
    title: 'Weight Management',
    description: 'Plans designed for healthy weight loss or gain',
    icon: '🏋️',
  },
  {
    title: 'Medical Conditions',
    description: 'Specialized diets for diabetes, thyroid, PCOS',
    icon: '🏥',
  },
  {
    title: 'Sports Nutrition',
    description: 'Performance-focused plans for athletes',
    icon: '⚡',
  },
  {
    title: 'Lifestyle Diets',
    description: 'Vegan, vegetarian, keto, and more',
    icon: '🥗',
  },
]

const guarantees = [
  {
    icon: Shield,
    title: 'Money-Back Guarantee',
    description: 'If you are not satisfied within 7 days, get a full refund.',
  },
  {
    icon: Clock,
    title: 'Quick Results',
    description: 'See visible changes within the first 2-3 weeks.',
  },
  {
    icon: MessageCircle,
    title: '24/7 Support',
    description: 'Our team is always available to answer your questions.',
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Plans created by certified nutritionists with 8+ years experience.',
  },
]

const comparisons = [
  { feature: 'Personalized Diet Chart', basic: true, standard: true, premium: true },
  { feature: 'Weekly Follow-ups', basic: true, standard: true, premium: true },
  { feature: 'WhatsApp Support', basic: true, standard: true, premium: true },
  { feature: 'Recipe Suggestions', basic: true, standard: true, premium: true },
  { feature: 'Video Consultations', basic: false, standard: true, premium: true },
  { feature: 'Exercise Recommendations', basic: false, standard: true, premium: true },
  { feature: 'Progress Tracking App', basic: false, standard: true, premium: true },
  { feature: 'Supplement Guidance', basic: false, standard: false, premium: true },
  { feature: 'Body Composition Analysis', basic: false, standard: false, premium: true },
  { feature: 'Priority Support', basic: false, standard: false, premium: true },
]

export default function DietPlansPageContent() {
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
              Diet Plans
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Find the Perfect Plan for{' '}
              <span className="text-primary">Your Goals</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Choose from our carefully designed diet plans that cater to different health goals 
              and budgets. Every plan is customized to your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>300+ Clients</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Heart className="h-5 w-5 text-primary" />
                <span>98% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plan Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{type.icon}</span>
                <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans — same tiers & price display as home */}
      <section className={`py-20 ${PRICING_SECTION_SURFACE_CLASS}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Choose Your Plan
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              All plans include personalized consultation and ongoing support from our expert team.
            </p>
          </motion.div>

          <PricingCardsGrid tiers={servicePricingTiers} priceSuffix=" / month" />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compare Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what&apos;s included in each plan to make the best choice for your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Basic</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Standard</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Platinum</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4 text-muted-foreground">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.basic ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-primary/5">
                      {row.standard ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.premium ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Guarantees
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to your success and satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{guarantee.title}</h3>
                <p className="text-muted-foreground text-sm">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — copy must stay in sync with lib/diet-plans-faqs.ts (JSON-LD) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers about our diet plans and how to get started.
            </p>
          </motion.div>
          <Accordion type="single" collapsible className="mx-auto max-w-3xl w-full space-y-2">
            {dietPlansFaqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`diet-plans-faq-${i}`} className="border-border rounded-xl border px-4">
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
              Not Sure Which Plan is Right for You?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Book a free consultation call with our nutritionist. We will understand your goals 
              and recommend the perfect plan for you.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href={CONTACT_PAGE_PATH}>
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href={CONTACT.phoneTel}>Call {CONTACT.phoneDisplay}</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-full border-0 bg-[#25D366] px-8 text-white hover:bg-[#20BD5A]"
              >
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
