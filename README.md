
# A Web of Code

The website for **A Web of Code**, a boutique web development studio building custom websites and web applications for small businesses, with a focus on performance, accessibility, and real results.

Live site: [awebofcode.com](https://awebofcode.com)

## Features

- **Marketing site**: Home, About, Services, Portfolio, and Contact pages
- **Portfolio** with filterable project cards
- **Client portal**: login and dashboard (Supabase auth, protected routes)
- **Payments**: Stripe checkout and billing portal via serverless functions
- **Contact form** powered by Formspree
- **SEO**: static prerendering at build time, per-route titles and meta descriptions, `sitemap.xml`, `robots.txt`, and `noindex` on private routes
- **Extras**: scroll-reveal animations, particle background, cookie notice, Privacy and Terms pages
- **Security headers** and long-term caching configured in `vercel.json`

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Vue 3 (`<script setup>`), Vue Router |
| Build | Vite, custom prerender script (`prerender.mjs`) |
| Styling | Tailwind CSS 4 |
| Auth / Database | Supabase |
| Payments | Stripe |
| Forms | Formspree |
| Hosting | Vercel (with Analytics and Speed Insights) |
| Testing | Vitest, Vue Test Utils, jsdom |

## Getting Started

### Prerequisites

- Node.js 18+ and npm



## Project Structure

```
├── api/                  # Vercel serverless functions (Stripe checkout, portal, webhook)
├── public/               # Static assets, portfolio images, robots.txt, sitemap.xml
├── src/
│   ├── components/       # CookieNotice, ParticlesBackground
│   ├── composables/      # useAuth, useScrollReveal
│   ├── lib/              # Supabase client
│   ├── router/           # Routes and auth guard
│   ├── views/            # Page components
│   ├── __tests__/        # Vitest tests
│   ├── App.vue
│   └── main.js
├── prerender.mjs         # Static prerendering for SEO
├── vercel.json           # Rewrites, headers, caching
└── vite.config.js
```

## Deployment

The site deploys to Vercel. Pushing to the main branch triggers a build (`node prerender.mjs`) that outputs to `dist/`. All non-API routes rewrite to `index.html` for client-side routing.

## Contact

**April Sears**, A Web of Code
[awebofcode.com/contact](https://awebofcode.com/contact)

&copy; A Web of Code. All rights reserved.
