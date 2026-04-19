/**
 * Static export does not emit `<link rel="preload">` from RSC trees into `out/index.html`.
 * Inject responsive hero preloads once after build for PSI “LCP request discovery”.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = path.join(root, 'out', 'index.html')
const MARKER = '<!-- home-hero-preloads -->'

const SNIPPET = `${MARKER}
<link rel="preload" href="/hero-dietitian-640.webp" as="image" type="image/webp" media="(max-width: 767px)" />
<link rel="preload" href="/hero-dietitian-1024.webp" as="image" type="image/webp" media="(min-width: 768px) and (max-width: 1279px)" />
<link rel="preload" href="/hero-dietitian-1440.webp" as="image" type="image/webp" media="(min-width: 1280px)" />`

async function main() {
  if (!fs.existsSync(indexPath)) {
    console.warn('[inject-home-preloads] Skip: out/index.html missing')
    return
  }
  let html = fs.readFileSync(indexPath, 'utf8')
  if (html.includes(MARKER)) {
    console.log('[inject-home-preloads] Already applied')
    return
  }
  let replaced = html.replace(/<meta\s+charSet="utf-8"\s*\/?>/i, (m) => `${m}${SNIPPET}`)
  if (replaced === html) {
    replaced = html.replace(/<head([^>]*)>/i, `<head$1>${SNIPPET}`)
  }
  if (replaced === html) {
    console.warn('[inject-home-preloads] Could not inject (no charset or head tag)')
    process.exit(1)
  }
  fs.writeFileSync(indexPath, replaced)
  console.log('[inject-home-preloads] Updated out/index.html')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
