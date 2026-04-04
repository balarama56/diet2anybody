import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  href?: string
  className?: string
  /** Taller mark in the footer column */
  variant?: 'nav' | 'footer'
  priority?: boolean
}

export default function BrandLogo({
  href = '/',
  className,
  variant = 'nav',
  priority = false,
}: BrandLogoProps) {
  const isFooter = variant === 'footer'
  const size = 96

  const image = (
    <Image
      src="/logo.webp"
      alt="Diet2Anybody — Eat Right, Live Bright"
      width={size}
      height={size}
      className={cn(
        'shrink-0 object-contain',
        isFooter
          ? 'h-20 w-20 sm:h-[5.25rem] sm:w-[5.25rem]'
          : 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20 lg:h-[5.25rem] lg:w-[5.25rem]'
      )}
      priority={priority}
    />
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cn('inline-flex items-center', className)}
        aria-label="Diet2Anybody home"
      >
        {image}
      </Link>
    )
  }

  return <div className={cn('inline-flex items-center', className)}>{image}</div>
}
