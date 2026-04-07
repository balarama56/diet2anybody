import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, services, SITE_ORIGIN } from '@/lib/services'
import ServiceProgramContent from './ServiceProgramContent'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  const ogImage = `${SITE_ORIGIN}${service.heroImage}`
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Diet2Anybody`,
      description: service.description,
      url: `${SITE_ORIGIN}${service.href}`,
      images: [{ url: ogImage, alt: service.title }],
    },
  }
}

export default async function ServiceProgramPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()
  return <ServiceProgramContent service={service} />
}
