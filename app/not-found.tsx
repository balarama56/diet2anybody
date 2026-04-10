import Link from 'next/link'
import { ArrowRight, Home, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(90vw,28rem)] h-[min(90vw,28rem)] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-lg text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium mb-8">
          <Leaf className="h-4 w-4 mr-2" aria-hidden />
          Oops — wrong turn
        </div>

        <p className="text-7xl sm:text-8xl font-bold tracking-tight text-primary/90 tabular-nums mb-2">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 text-balance">
          Page not found
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg mb-10 text-pretty leading-relaxed">
          The page you are looking for does not exist or may have been moved. Head back home or
          explore our programs and articles.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/" className="gap-2">
              <Home className="h-5 w-5" aria-hidden />
              Back to home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link href="/services" className="gap-2">
              View services
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
