/**
 * Converts PNG/JPEG in public/ to WebP and removes originals.
 * Generates WebP copies for routes referenced in the app but missing on disk.
 */
import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')

async function walkConvert(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      await walkConvert(full)
      continue
    }
    if (!/\.(png|jpe?g)$/i.test(e.name)) continue
    const out = full.replace(/\.(png|jpe?g)$/i, '.webp')
    await sharp(full).webp({ quality: 85 }).toFile(out)
    await fs.unlink(full)
    console.log('Converted:', path.relative(publicDir, full), '→', path.relative(publicDir, out))
  }
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true })
}

async function copyWebp(fromRel, toRel, resize) {
  const from = path.join(publicDir, fromRel)
  const to = path.join(publicDir, toRel)
  await ensureDir(path.dirname(to))
  let pipeline = sharp(from)
  if (resize) {
    pipeline = pipeline.resize(resize.width, resize.height, { fit: 'cover', position: 'center' })
  }
  await pipeline.webp({ quality: 85 }).toFile(to)
  console.log('Generated:', toRel)
}

async function main() {
  await walkConvert(publicDir)

  const placeholder = 'placeholder.webp'
  const placeholderUser = 'placeholder-user.webp'

  /** Real assets: generate about-team.webp / why-choose-us.webp from JPG in public/ — do not overwrite with placeholder. */
  for (const name of ['hero-dietitian.webp', 'weight-loss-hero.webp']) {
    await copyWebp(placeholder, name, { width: 1200, height: 800 })
  }

  await copyWebp(placeholder, 'og-image.webp', { width: 1200, height: 630 })

  for (const base of ['priya', 'rahul', 'sneha', 'amit']) {
    await copyWebp(placeholderUser, `testimonials/${base}.webp`, { width: 400, height: 400 })
  }
  for (const base of ['priya', 'rahul', 'sneha']) {
    await copyWebp(placeholderUser, `team/${base}.webp`, { width: 400, height: 400 })
  }

  for (const name of ['balanced-diet', 'pcos-diet', 'weight-loss']) {
    await copyWebp(placeholder, `images/blog/${name}.webp`, { width: 800, height: 500 })
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
