import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import AppToaster from '@/components/AppToaster'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.diet2anybody.com'),
  title: {
    default: 'Diet2Anybody - Expert Dietitian & Nutritionist Services',
    template: '%s | Diet2Anybody'
  },
  description: 'Transform your health with personalized diet plans from certified nutritionists. Expert guidance for weight loss, PCOS, diabetes, thyroid management, and kids nutrition.',
  icons: {
    icon: [{ url: '/icon-light-32x32.webp', sizes: '32x32', type: 'image/webp' }],
    apple: '/apple-icon.webp',
  },
  keywords: ['dietitian', 'nutritionist', 'weight loss', 'PCOS diet', 'diabetes diet', 'thyroid diet', 'kids nutrition', 'diet plans', 'healthy eating'],
  authors: [{ name: 'Diet2Anybody' }],
  creator: 'Diet2Anybody',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.diet2anybody.com',
    siteName: 'Diet2Anybody',
    title: 'Diet2Anybody - Expert Dietitian & Nutritionist Services',
    description: 'Transform your health with personalized diet plans from certified nutritionists.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Diet2Anybody - Expert Nutrition Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diet2Anybody - Expert Dietitian & Nutritionist Services',
    description: 'Transform your health with personalized diet plans from certified nutritionists.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
        <AppToaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
