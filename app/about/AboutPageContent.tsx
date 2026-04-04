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
    image: '/team/priya.jpg',
  },
  {
    name: 'Dt. Rahul Verma',
    role: 'Senior Dietitian',
    bio: 'Expert in sports nutrition and fitness diet plans. Certified sports nutritionist with 8+ years experience.',
    image: '/team/rahul.jpg',
  },
  {
    name: 'Dt. Sneha Patel',
    role: 'Clinical Nutritionist',
    bio: 'Specializes in PCOS, thyroid, and hormonal health. Known for her empathetic approach to patient care.',
    image: '/team/sneha.jpg',
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
                <Link href="/contact">
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
                    src="/about-team.jpg"
                    alt="Our Team"
                    fill
                    className="object-cover"
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Diet2Anybody started in 2010 when our founder, Dr. Priya Sharma, realized that 
                most people struggle with nutrition not because of lack of motivation, but because 
                of lack of proper guidance. Cookie-cutter diet plans were failing people everywhere.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We set out to change that by creating truly personalized nutrition programs that 
                consider each individual&apos;s unique body, lifestyle, preferences, and health conditions. 
                Today, we have helped over 5,000 clients achieve their health goals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach combines the latest nutrition science with practical, sustainable 
                eating habits. We do not believe in extreme diets or quick fixes. Instead, we focus 
                on building healthy relationships with food that last a lifetime.
              </p>
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
                      className="object-cover"
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
                <Link href="/contact">
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
              <div className="relative aspect-video bg-primary/10 rounded-3xl overflow-hidden">
                <Image
                  src="/why-choose-us.jpg"
                  alt="Why Choose Diet2Anybody"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
