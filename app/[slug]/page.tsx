import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostContent from './BlogPostContent'
import { blogPosts } from '@/lib/data'
import { SITE_ORIGIN } from '@/lib/services'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const canonical = `https://www.diet2anybody.com/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: canonical,
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `${SITE_ORIGIN}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_ORIGIN}${post.image}`],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)

  return <BlogPostContent post={post} relatedPosts={relatedPosts} />
}
