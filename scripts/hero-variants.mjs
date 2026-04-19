/**
 * Responsive hero WebPs when `public/hero-dietitian.webp` exists.
 * Static export uses `images.unoptimized`; variants cut bytes (mobile + capped desktop).
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = path.join(root, 'public', 'hero-dietitian.webp')

async function main() {
  if (!fs.existsSync(src)) {
    console.log('[hero-variants] Skip: public/hero-dietitian.webp not found')
    return
  }

  const variants = [
    { width: 640, name: 'hero-dietitian-640.webp', quality: 78 },
    { width: 1024, name: 'hero-dietitian-1024.webp', quality: 80 },
    { width: 1440, name: 'hero-dietitian-1440.webp', quality: 82 },
  ]

  for (const { width, name, quality } of variants) {
    const out = path.join(root, 'public', name)
    await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(out)
    console.log('[hero-variants] Wrote', path.relative(root, out))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
