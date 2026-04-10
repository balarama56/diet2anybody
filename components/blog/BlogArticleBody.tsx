'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { BlogFAQSection } from '@/components/blog/BlogFAQSection'

type Props = {
  content: string
  title: string
}

function renderBlock(paragraph: string, idx: number, postTitle: string): ReactNode {
  if (paragraph.startsWith('IMAGE:')) {
    const src = paragraph.slice('IMAGE:'.length).trim()
    return (
      <figure key={idx} className="my-8 not-prose mx-auto max-w-4xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
          <Image
            src={src}
            alt={postTitle}
            fill
            className="object-cover object-center"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </figure>
    )
  }
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
        <strong className="text-foreground">{paragraph.replace(/\*\*/g, '')}</strong>
      </p>
    )
  }
  return (
    <p key={idx} className="text-muted-foreground leading-relaxed my-4">
      {paragraph}
    </p>
  )
}

export function BlogArticleBody({ content, title }: Props) {
  const paragraphs = content.split('\n\n')
  const nodes: ReactNode[] = []
  let i = 0
  let keySeq = 0

  while (i < paragraphs.length) {
    const paragraph = paragraphs[i]
    const h2Text = paragraph.startsWith('## ') ? paragraph.replace(/^##\s+/, '').trim() : ''

    if (paragraph.startsWith('## ') && h2Text === 'FAQ') {
      i++
      const faqItems: { q: string; a: string }[] = []
      while (i < paragraphs.length) {
        const cur = paragraphs[i]
        if (cur.startsWith('## ')) break
        if (cur.startsWith('### ')) {
          const q = cur.replace(/^###\s+/, '').trim()
          i++
          const answerParts: string[] = []
          while (i < paragraphs.length) {
            const c = paragraphs[i]
            if (c.startsWith('### ') || c.startsWith('## ') || c.startsWith('IMAGE:')) break
            answerParts.push(c)
            i++
          }
          const a = answerParts.join('\n\n').trim()
          if (q) faqItems.push({ q, a })
        } else {
          i++
        }
      }
      nodes.push(<BlogFAQSection key={`faq-${keySeq++}`} items={faqItems} />)
      continue
    }

    nodes.push(renderBlock(paragraph, keySeq++, title))
    i++
  }

  return <>{nodes}</>
}
