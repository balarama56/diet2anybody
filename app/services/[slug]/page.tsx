import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, services } from '@/lib/services'
import ServiceProgramContent from './ServiceProgramContent'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Diet2Anybody`,
      description: service.description,
    },
  }
}

export default async function ServiceProgramPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()
  return <ServiceProgramContent service={service} />
}
