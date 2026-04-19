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

/** Matches `trailingSlash: true` export routes (`/page/`). */
function siteUrl(path: string): string {
  if (path === '/') return SITE_ORIGIN
  const normalized = path.endsWith('/') ? path.slice(0, -1) : path
  return `${SITE_ORIGIN}${normalized}/`
}

function blogLastModified(post: (typeof blogPosts)[number]): Date {
  if ('date' in post && typeof post.date === 'string') {
    return new Date(post.date)
  }
  return new Date()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const path of staticPaths) {
    const url = siteUrl(path)
    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : 0.85,
    })
  }

  for (const post of blogPosts) {
    entries.push({
      url: siteUrl(`/${post.slug}`),
      lastModified: blogLastModified(post),
      changeFrequency: 'monthly',
      priority: 0.75,
    })
  }

  for (const s of services) {
    entries.push({
      url: siteUrl(s.href),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })
  }

  return entries
}
