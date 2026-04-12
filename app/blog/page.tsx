import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { blogPosts } from '@/lib/data'
import { blogIndexGraph } from '@/lib/schema-org'
import BlogPageContent from './BlogPageContent'

export const metadata: Metadata = {
  title: 'Blog - Health Tips & Nutrition Insights',
  description: 'Read the latest articles on nutrition, diet tips, healthy recipes, and expert advice from our certified dietitians.',
  openGraph: {
    title: 'Blog | Diet2Anybody',
    description: 'Read the latest articles on nutrition, diet tips, healthy recipes, and expert advice from our certified dietitians.',
    url: 'https://www.diet2anybody.com/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogIndexGraph(blogPosts)} />
      <BlogPageContent />
    </>
  )
}
