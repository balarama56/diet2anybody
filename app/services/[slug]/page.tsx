import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import { faqs } from '@/lib/data'
import { serviceProgramPageGraph } from '@/lib/schema-org'
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
  const seoTitle = `${service.title} - Personalized Diet Plan`
  const seoDescription = `${service.title} service page by Diet2Anybody. Get a personalized ${service.title.toLowerCase()} plan with practical meal guidance, regular follow-ups, and expert nutritionist support.`
  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: `${seoTitle} | Diet2Anybody`,
      description: seoDescription,
      url: `${SITE_ORIGIN}${service.href}`,
      images: [{ url: ogImage, alt: service.title }],
    },
  }
}

export default async function ServiceProgramPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()
  return (
    <>
      <JsonLd data={serviceProgramPageGraph(service, faqs)} />
      <ServiceProgramContent service={service} />
    </>
  )
}
