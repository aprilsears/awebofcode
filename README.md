
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

### Install and run

```bash
git clone <your-repo-url>
cd awebofcode
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Environment variables

Create a `.env` file in the project root:

```env
VITE_FORMSPREE_ENDPOINT=
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_STRIPE_PUBLISHABLE_KEY=
```

The serverless functions in `api/` also need these set in your Vercel project settings (never commit them):

```env
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
SUPABASE_SERVICE_ROLE_KEY=
ALLOWED_PRICE_IDS=      # comma-separated Stripe price IDs
APP_ORIGIN=             # e.g. https://awebofcode.com
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build and prerender all public routes to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |

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
