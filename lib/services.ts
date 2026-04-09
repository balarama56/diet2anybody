/** Canonical site URL (metadata, OG). Program pages are served on this app under `/services/[slug]`. */
export const SITE_ORIGIN = 'https://www.diet2anybody.com' as const

export type ServiceItem = {
  id: string
  /** URL segment for `/services/[slug]` — derived from the program title */
  slug: string
  title: string
  description: string
  /** Lucide icon name or HairGrowth (custom SVG using currentColor) */
  icon: string
  href: string
  /** Hero image on the program page (`public` path) */
  heroImage: string
}

export const services: ServiceItem[] = [
  {
    id: 'weight-loss',
    slug: 'indian-diet-plan-for-weight-loss',
    title: 'Indian Diet Plan for Weight Loss',
    description:
      'Reach your weight goals with personalized Indian meal plans, expert guidance, and ongoing support from our dietitians.',
    icon: 'Weight',
    href: '/services/indian-diet-plan-for-weight-loss',
    heroImage: '/services/indian-diet-plan-for-weight-loss-hero.png',
  },
  {
    id: 'pcod',
    slug: 'diet-plan-for-pcod',
    title: 'Diet Plan for PCOD',
    description:
      'Manage PCOD and PCOS with balanced nutrition, insulin-smart meals, and steady support from our dietitians.',
    icon: 'Venus',
    href: '/services/diet-plan-for-pcod',
    heroImage: '/blog/pcos-diet.webp',
  },
  {
    id: 'diabetes',
    slug: 'diet-plan-for-diabetes',
    title: 'Diet Plan for Diabetes',
    description:
      'Stabilize blood sugar with customized plans, practical portions, and follow-ups from our expert dietitians.',
    icon: 'Droplet',
    href: '/services/diet-plan-for-diabetes',
    heroImage: '/services/diet-plan-for-diabetes-hero.webp',
  },
  {
    id: 'thyroid',
    slug: 'diet-for-thyroid-patients',
    title: 'Diet for Thyroid Patients',
    description:
      'Support thyroid health with personalized meal plans and nutrition guidance aligned with your treatment.',
    icon: 'ThermometerSun',
    href: '/services/diet-for-thyroid-patients',
    heroImage: '/why-choose-us.webp',
  },
  {
    id: 'pregnant',
    slug: 'diet-plan-for-pregnant-women',
    title: 'Diet Plan for Pregnant Women',
    description:
      'Nourish a healthy pregnancy with trimester-aware meal plans, safety-first tips, and care from our dietitians.',
    icon: 'PregnantWoman',
    href: '/services/diet-plan-for-pregnant-women',
    heroImage: '/services/pregnant-woman.webp',
  },
  {
    id: 'weight-gain',
    slug: 'diet-plan-for-weight-gain',
    title: 'Diet Plan for Weight Gain',
    description:
      'Build weight healthily with calorie-smart plans, protein-forward meals, and expert support from our dietitians.',
    icon: 'Dumbbell',
    href: '/services/diet-plan-for-weight-gain',
    heroImage: '/services/diet-plan-for-weight-gain-hero.webp',
  },
  {
    id: 'hair',
    slug: 'diet-plan-for-hair-growth',
    title: 'Diet Plan for Hair Growth',
    description:
      'Nourish stronger hair with nutrient-focused meal ideas and professional dietitian support for lasting results.',
    icon: 'HairGrowth',
    href: '/services/diet-plan-for-hair-growth',
    heroImage: '/services/hair-growth.webp',
  },
  {
    id: 'post-pregnancy',
    slug: 'post-pregnancy-diet-plan',
    title: 'Post-Pregnancy Diet Plan',
    description:
      'Recover after delivery with balanced meals, lactation-friendly options, and nutrition support from our dietitians.',
    icon: 'Milk',
    href: '/services/post-pregnancy-diet-plan',
    heroImage: '/services/services-template-hero.webp',
  },
]

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug)
}
