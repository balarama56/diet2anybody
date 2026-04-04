"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: string
}

interface Props {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostContent({ post, relatedPosts }: Props) {
  const shareUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://www.diet2anybody.com/blog/${post.slug}`

  const shareLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`,
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-secondary via-background to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Category */}
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative -mt-8 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
          >
            <div className="relative aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar - Share Buttons (Desktop) */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block lg:col-span-1"
            >
              <div className="sticky top-32 space-y-4">
                <p className="text-sm text-muted-foreground mb-2">Share</p>
                {shareLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`Share on ${link.label}`}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Copy link"
                >
                  <LinkIcon className="h-5 w-5" />
                </button>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-8"
            >
              {/* Article Content */}
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground">
                {post.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={idx} className="text-2xl font-bold text-foreground mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-xl font-semibold text-foreground mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith('- **')) {
                    const items = paragraph.split('\n').filter(Boolean)
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2 my-4">
                        {items.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item.replace('- **', '').replace('**', '')}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  if (paragraph.startsWith('**')) {
                    return (
                      <p key={idx} className="text-muted-foreground leading-relaxed my-4">
                        <strong className="text-foreground">
                          {paragraph.replace(/\*\*/g, '')}
                        </strong>
                      </p>
                    )
                  }
                  return (
                    <p key={idx} className="text-muted-foreground leading-relaxed my-4">
                      {paragraph}
                    </p>
                  )
                })}
              </div>

              {/* Mobile Share */}
              <div className="lg:hidden mt-12 p-6 bg-secondary/50 rounded-2xl">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Share this article
                  </p>
                  <div className="flex gap-2">
                    {shareLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`Share on ${link.label}`}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-12 p-8 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{post.author}</h3>
                    <p className="text-primary text-sm mb-2">Certified Nutritionist</p>
                    <p className="text-muted-foreground text-sm">
                      An experienced nutritionist passionate about helping people achieve their 
                      health goals through evidence-based dietary guidance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar - Table of Contents / CTA */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="sticky top-32 space-y-6">
                {/* CTA */}
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <h3 className="text-lg font-semibold mb-3">Need Personalized Advice?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Get a customized diet plan from our expert nutritionists.
                  </p>
                  <Button asChild variant="secondary" className="w-full rounded-full">
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                </div>

                {/* Categories */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {['Nutrition', 'Weight Loss', 'PCOS', 'Diabetes', 'Recipes'].map((cat) => (
                      <Link
                        key={cat}
                        href={`/blog?category=${cat}`}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center text-primary font-medium text-sm mt-3">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
