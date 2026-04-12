/**
 * Renders Schema.org JSON-LD for SEO (Organization, FAQPage, Service, Article, etc.).
 * Escapes `<` in serialized JSON for safe embedding in HTML.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
