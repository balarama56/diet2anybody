/** Canonical site URL (metadata, OG). Program pages are served on this app under `/services/[slug]`. */
export const SITE_ORIGIN = 'https://www.diet2anybody.com' as const

export type ServiceItem = {
  id: string
  title: string
  description: string
  /** Lucide icon name or HairGrowth (custom SVG using currentColor) */
  icon: string
  href: string
}

export const services: ServiceItem[] = [
  {
    id: 'weight-loss',
    title: 'Indian Diet Plan for Weight Loss',
    description:
      'Reach your weight goals with personalized Indian meal plans, expert guidance, and ongoing support from our dietitians.',
    icon: 'Weight',
    href: '/services/weight-loss',
  },
  {
    id: 'pcod',
    title: 'Diet Plan for PCOD',
    description:
      'Manage PCOD and PCOS with balanced nutrition, insulin-smart meals, and steady support from our dietitians.',
    icon: 'Venus',
    href: '/services/pcod',
  },
  {
    id: 'diabetes',
    title: 'Diet Plan for Diabetes',
    description:
      'Stabilize blood sugar with customized plans, practical portions, and follow-ups from our expert dietitians.',
    icon: 'Droplet',
    href: '/services/diabetes',
  },
  {
    id: 'thyroid',
    title: 'Diet for Thyroid Patients',
    description:
      'Support thyroid health with personalized meal plans and nutrition guidance aligned with your treatment.',
    icon: 'ThermometerSun',
    href: '/services/thyroid',
  },
  {
    id: 'pregnant',
    title: 'Diet Plan for Pregnant Women',
    description:
      'Nourish a healthy pregnancy with trimester-aware meal plans, safety-first tips, and care from our dietitians.',
    icon: 'PregnantWoman',
    href: '/services/pregnant',
  },
  {
    id: 'weight-gain',
    title: 'Diet Plan for Weight Gain',
    description:
      'Build weight healthily with calorie-smart plans, protein-forward meals, and expert support from our dietitians.',
    icon: 'Dumbbell',
    href: '/services/weight-gain',
  },
  {
    id: 'hair',
    title: 'Diet Plan for Hair Growth',
    description:
      'Nourish stronger hair with nutrient-focused meal ideas and professional dietitian support for lasting results.',
    icon: 'HairGrowth',
    href: '/services/hair',
  },
  {
    id: 'post-pregnancy',
    title: 'Post-Pregnancy Diet Plan',
    description:
      'Recover after delivery with balanced meals, lactation-friendly options, and nutrition support from our dietitians.',
    icon: 'Milk',
    href: '/services/post-pregnancy',
  },
]

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.id === slug)
}
