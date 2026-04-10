"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  Heart, 
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_PAGE_PATH } from '@/lib/contact'
import StatsSection from '@/components/StatsSection'

const values = [
  {
    icon: Heart,
    title: 'Client-Centered Care',
    description: 'Every plan is designed around your unique needs, preferences, and lifestyle.',
  },
  {
    icon: Award,
    title: 'Evidence-Based Practice',
    description: 'Our recommendations are backed by the latest nutrition science and research.',
  },
  {
    icon: Target,
    title: 'Result-Oriented',
    description: 'We focus on achievable goals and sustainable long-term results.',
  },
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'Join a community of like-minded individuals on their health journey.',
  },
]

const team = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Founder & Chief Nutritionist',
    bio: 'With over 15 years of experience, Dr. Priya specializes in weight management and metabolic disorders.',
    image: '/team/priya.webp',
  },
  {
    name: 'Dt. Rahul Verma',
    role: 'Senior Dietitian',
    bio: 'Expert in sports nutrition and fitness diet plans. Certified sports nutritionist with 8+ years experience.',
    image: '/team/rahul.webp',
  },
  {
    name: 'Dt. Sneha Patel',
    role: 'Clinical Nutritionist',
    bio: 'Specializes in PCOS, thyroid, and hormonal health. Known for her empathetic approach to patient care.',
    image: '/team/sneha.webp',
  },
]

export default function AboutPageContent() {
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Your Trusted Partner in{' '}
                <span className="text-primary">Health & Nutrition</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Diet2Anybody was founded with a simple mission: to make expert nutrition 
                advice accessible to everyone. We believe that good health starts with good food, 
                and the right guidance can transform lives.
              </p>
              <p className="text-muted-foreground mb-8">
                Our team of certified nutritionists and dietitians brings together decades of 
                experience in helping people achieve their health goals through personalized 
                diet plans and continuous support.
              </p>
              <Button asChild className="rounded-full">
                <Link href={CONTACT_PAGE_PATH}>
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
                    src="/about-team.webp"
                    alt="Our Team"
                    fill
                    sizes="(max-width: 1024px) min(100vw - 2rem, 448px), 448px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Our Story */}
      <section className="py-20 bg-secondary/25">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl"
          >
            Our Story
          </motion.h2>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative mx-auto max-w-md lg:mx-0"
            >
              <div
                className="absolute -bottom-3 -left-3 -z-0 h-[78%] w-[88%] rounded-2xl rounded-br-[2.75rem] bg-primary/25"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/60">
                <Image
                  src="/team/alekya.webp"
                  alt="Dt. Alekya — Nutritionist, Health Coach, and Gut Health Consultant at Diet2Anybody"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-foreground"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                  Who we are
                </span>
              </div>

              <h3 className="text-balance text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-[1.65rem] lg:leading-snug">
                We Care To Fill Up Your Nutrition Deficiency Of Health Balance
              </h3>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m Alekya, a certified{' '}
                  <strong className="font-semibold text-foreground">Nutritionist, Health Coach, and Gut Health Consultant</strong>{' '}
                  with 8+ years of experience in transforming lifestyles through mindful eating and personalized
                  nutrition plans.
                </p>
                <p>
                  My core belief is simple — <strong className="font-semibold text-foreground">Food is the first medicine.</strong>{' '}
                  Your <strong className="font-semibold text-foreground">Mind, Soul, and Body</strong> are connected, and the
                  right nutrition keeps them in harmony.
                </p>
                <p>
                  Diet is not a punishment. It&apos;s a{' '}
                  <strong className="font-semibold text-foreground">daily habit that builds a healthier you.</strong>
                </p>
                <p>
                  Join us at <strong className="font-semibold text-foreground">Diet2Anybody</strong> and start your journey
                  toward better energy, better digestion, and a better life — one meal at a time.
                </p>
              </div>

              <h4 className="mt-10 text-xl font-bold text-foreground md:text-2xl">
                How We Keep The No.1 Position In Nutrition Coaching
              </h4>
              <ul className="mt-5 space-y-3">
                {[
                  'Personalized diet plans based on lifestyle, health goals & medical needs.',
                  'Science-backed guidance for weight loss, gut health & holistic wellness.',
                  'Constant support, progress tracking & mindset coaching.',
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-muted-foreground">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </span>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and how we serve our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of certified nutritionists and dietitians are dedicated to helping you 
              achieve your health goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 bg-primary/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Diet2Anybody?
              </h2>
              <div className="space-y-4">
                {[
                  '100% personalized diet plans based on your needs',
                  'Certified and experienced nutritionists',
                  'Flexible plans that fit your lifestyle',
                  'Regular follow-ups and progress tracking',
                  '24/7 support via WhatsApp',
                  'Proven track record with 98% success rate',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="rounded-full mt-8">
                <Link href={CONTACT_PAGE_PATH}>
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden bg-muted ring-1 ring-border/40">
                <Image
                  src="/why-choose-us.webp"
                  alt="Why Choose Diet2Anybody"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
