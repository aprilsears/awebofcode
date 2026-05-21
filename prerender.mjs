import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

const routes = [
  {
    path: '/',
    title: 'A Web of Code | Custom Web Development',
    description: 'A Web of Code is a boutique web development studio crafting custom websites and web applications for performance, accessibility, and real results.',
  },
  {
    path: '/about',
    title: 'About | A Web of Code',
    description: 'Learn about A Web of Code — a boutique web development studio led by April Sears, specializing in Vue, React, and modern web technologies.',
  },
  {
    path: '/services',
    title: 'Services | A Web of Code',
    description: 'Web design, custom web applications, and ongoing support from A Web of Code. Every project is custom-scoped and priced individually.',
  },
  {
    path: '/portfolio',
    title: 'Portfolio | A Web of Code',
    description: 'View recent projects from A Web of Code — custom websites and web applications built for performance and real results.',
  },
  {
    path: '/contact',
    title: 'Contact | A Web of Code',
    description: 'Get in touch with A Web of Code to discuss your web design or development project.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | A Web of Code',
    description: 'Privacy Policy for A Web of Code — how we collect, use, and protect your information.',
  },
  {
    path: '/terms',
    title: 'Terms of Service | A Web of Code',
    description: 'Terms of Service for A Web of Code — governing use of this site and the client portal.',
  },
]

async function prerender() {
  console.log('Building client...')
  await build()

  console.log('Building SSR bundle...')
  await build({
    build: {
      ssr: 'src/entry-server.js',
      outDir: '.ssr',
      ssrEmitAssets: false,
    },
  })

  const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')
  const { render } = await import('./.ssr/entry-server.js')

  console.log('Prerendering routes...')
  for (const { path, title, description } of routes) {
    const appHtml = await render(path)
    const canonicalUrl = `https://awebofcode.com${path === '/' ? '/' : path}`

    const html = template
      .replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(/(<meta name="description" content=")[^"]*"/, `$1${description}"`)
      .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${canonicalUrl}"`)
      .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${canonicalUrl}"`)
      .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
      .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${description}"`)

    const outFile = path === '/'
      ? resolve(__dirname, 'dist/index.html')
      : resolve(__dirname, `dist${path}/index.html`)

    if (path !== '/') mkdirSync(dirname(outFile), { recursive: true })
    writeFileSync(outFile, html)
    console.log(`  ✓ ${path}`)
  }

  rmSync(resolve(__dirname, '.ssr'), { recursive: true, force: true })
  console.log('Prerender complete.')
}

prerender().catch((err) => {
  console.error(err)
  process.exit(1)
}).then(() => process.exit(0))
