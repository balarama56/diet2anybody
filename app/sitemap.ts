import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/data'
import { services, SITE_ORIGIN } from '@/lib/services'

export const dynamic = 'force-static'

const staticPaths = [
  '/',
  '/about-us',
  '/blog',
  '/contact-us',
  '/diet-plans',
  '/pricing',
  '/services',
] as const

function blogLastModified(post: (typeof blogPosts)[number]): Date {
  if ('date' in post && typeof post.date === 'string') {
    return new Date(post.date)
  }
  return new Date()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const path of staticPaths) {
    const url = path === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`
    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : 0.85,
    })
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${SITE_ORIGIN}/${post.slug}`,
      lastModified: blogLastModified(post),
      changeFrequency: 'monthly',
      priority: 0.75,
    })
  }

  for (const s of services) {
    entries.push({
      url: `${SITE_ORIGIN}${s.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })
  }

  return entries
}
