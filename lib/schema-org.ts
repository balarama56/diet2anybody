import { ABOUT_PAGE_PATH, CONTACT, CONTACT_PAGE_PATH } from '@/lib/contact'
import { contactPageFaqs } from '@/lib/contact-page-faqs'
import { SITE_ORIGIN, type ServiceItem, services } from '@/lib/services'

export const SCHEMA_CONTEXT = 'https://schema.org' as const

export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization` as const
export const WEBSITE_ID = `${SITE_ORIGIN}/#website` as const

type FaqPair = { question: string; answer: string }

/** FAQPage mainEntity — questions must match visible FAQ content on the page. */
export function faqPageEntities(faqs: readonly FaqPair[]) {
  return faqs.map((faq) => ({
    '@type': 'Question' as const,
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer' as const,
      text: faq.answer,
    },
  }))
}

export function organizationNode() {
  return {
    '@type': 'Organization' as const,
    '@id': ORGANIZATION_ID,
    name: 'Diet2Anybody',
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/icon-light-32x32.webp`,
    image: `${SITE_ORIGIN}/og-image.webp`,
    email: CONTACT.email,
    telephone: '+918639137356',
    address: {
      '@type': 'PostalAddress' as const,
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'Country' as const, name: 'India' },
  }
}

export function websiteNode() {
  return {
    '@type': 'WebSite' as const,
    '@id': WEBSITE_ID,
    url: SITE_ORIGIN,
    name: 'Diet2Anybody',
    description:
      'Personalized diet plans from certified nutritionists — weight loss, PCOS, diabetes, thyroid, and more.',
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-IN',
  }
}

/** Global graph for all pages (safe to include from root layout). */
export function sitewideGraph() {
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [organizationNode(), websiteNode()],
  }
}

export function webPageNode(path: string, name: string, description: string) {
  const url = `${SITE_ORIGIN}${path}`
  return {
    '@type': 'WebPage' as const,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en-IN',
  }
}

export function breadcrumbService(service: ServiceItem) {
  return {
    '@type': 'BreadcrumbList' as const,
    '@id': `${SITE_ORIGIN}${service.href}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem' as const,
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      {
        '@type': 'ListItem' as const,
        position: 2,
        name: 'Services',
        item: `${SITE_ORIGIN}/services`,
      },
      {
        '@type': 'ListItem' as const,
        position: 3,
        name: service.title,
        item: `${SITE_ORIGIN}${service.href}`,
      },
    ],
  }
}

export function serviceNode(service: ServiceItem) {
  const url = `${SITE_ORIGIN}${service.href}`
  return {
    '@type': 'Service' as const,
    '@id': `${url}#service`,
    name: service.title,
    description: service.description,
    url,
    provider: { '@id': ORGANIZATION_ID },
    serviceType: 'Nutrition and dietetics consultation',
    areaServed: { '@type': 'Country' as const, name: 'India' },
    audience: {
      '@type': 'PeopleAudience' as const,
      suggestedMinAge: 18,
    },
  }
}

export function faqPageNode(path: string, faqs: readonly FaqPair[]) {
  const url = `${SITE_ORIGIN}${path}`
  return {
    '@type': 'FAQPage' as const,
    '@id': `${url}#faq`,
    url,
    isPartOf: { '@id': `${url}#webpage` },
    mainEntity: faqPageEntities(faqs),
  }
}

export function homePageGraph() {
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      organizationNode(),
      websiteNode(),
      webPageNode(
        '/',
        'Diet2Anybody — Expert Dietitian & Nutritionist Services',
        'Transform your health with personalized diet plans from certified nutritionists. Expert guidance for weight loss, PCOS, diabetes, thyroid management, and kids nutrition.'
      ),
    ],
  }
}

export function serviceProgramPageGraph(
  service: ServiceItem,
  faqs: readonly FaqPair[]
) {
  const path = service.href
  const desc = service.description
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      organizationNode(),
      websiteNode(),
      webPageNode(path, service.title, desc),
      breadcrumbService(service),
      serviceNode(service),
      faqPageNode(path, faqs),
    ],
  }
}

export function contactPageGraph() {
  const path = CONTACT_PAGE_PATH
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      organizationNode(),
      websiteNode(),
      webPageNode(
        path,
        'Contact Us — Diet2Anybody',
        'Book a free consultation with our expert dietitians in Hyderabad and online.'
      ),
      faqPageNode(path, [...contactPageFaqs]),
    ],
  }
}

export function pricingPageGraph(faqs: readonly FaqPair[]) {
  const path = '/pricing'
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      organizationNode(),
      websiteNode(),
      webPageNode(
        path,
        'Pricing — Diet2Anybody',
        'Transparent monthly pricing for personalized nutrition plans, consultations, and WhatsApp support.'
      ),
      faqPageNode(path, faqs),
    ],
  }
}

/** Diet Plans: WebPage + FAQPage (FAQ copy must match `lib/diet-plans-faqs` + page UI). */
export function dietPlansPageGraph(faqs: readonly FaqPair[]) {
  const path = '/diet-plans'
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      organizationNode(),
      websiteNode(),
      webPageNode(
        path,
        'Diet Plans — Personalized Nutrition Programs | Diet2Anybody',
        'Explore personalized diet plans for your health goals: Basic, Standard, and Platinum tiers with certified nutritionist support, comparisons, and guarantees.'
      ),
      faqPageNode(path, faqs),
    ],
  }
}

export function blogIndexGraph(
  posts: { slug: string; title: string; excerpt: string }[]
) {
  const path = '/blog'
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      organizationNode(),
      websiteNode(),
      webPageNode(
        path,
        'Blog — Diet2Anybody',
        'Nutrition tips, weight loss guides, PCOS and diabetes diet articles from our dietitians.'
      ),
      {
        '@type': 'ItemList' as const,
        '@id': `${SITE_ORIGIN}${path}#posts`,
        numberOfItems: posts.length,
        itemListElement: posts.map((p, i) => ({
          '@type': 'ListItem' as const,
          position: i + 1,
          name: p.title,
          url: `${SITE_ORIGIN}/${p.slug}`,
          description: p.excerpt,
        })),
      },
    ],
  }
}

export function aboutPageGraph() {
  const path = ABOUT_PAGE_PATH
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      organizationNode(),
      websiteNode(),
      webPageNode(
        path,
        'About Us — Diet2Anybody',
        'Meet Diet2Anybody — certified nutritionists offering personalized diet plans for weight loss, PCOS, diabetes, and more across India.'
      ),
    ],
  }
}

export function servicesIndexGraph() {
  const path = '/services'
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      organizationNode(),
      websiteNode(),
      webPageNode(
        path,
        'Our Services — Diet2Anybody',
        'Explore nutrition programs: weight loss, PCOS, diabetes, thyroid, pregnancy, and more.'
      ),
      {
        '@type': 'ItemList' as const,
        '@id': `${SITE_ORIGIN}${path}#programs`,
        name: 'Diet2Anybody nutrition programs',
        numberOfItems: services.length,
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem' as const,
          position: i + 1,
          name: s.title,
          url: `${SITE_ORIGIN}${s.href}`,
        })),
      },
    ],
  }
}

export type BlogPostForSchema = {
  slug: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  category: string
}

export function blogArticleGraph(post: BlogPostForSchema) {
  const path = `/${post.slug}`
  const url = `${SITE_ORIGIN}${path}`
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      organizationNode(),
      websiteNode(),
      {
        '@type': 'Article' as const,
        '@id': `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        image: [`${SITE_ORIGIN}${post.image}`],
        datePublished: post.date,
        dateModified: post.date,
        author: {
          '@type': 'Person' as const,
          name: post.author,
        },
        publisher: { '@id': ORGANIZATION_ID },
        mainEntityOfPage: { '@id': `${url}#webpage` },
        articleSection: post.category,
        inLanguage: 'en-IN',
      },
      webPageNode(path, post.title, post.excerpt),
    ],
  }
}
