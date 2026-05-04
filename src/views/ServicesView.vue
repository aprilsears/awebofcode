<template>
  <div class="relative min-h-screen overflow-hidden">

    <!-- Decorative background orbs -->
    <div class="absolute top-0 left-1/2 w-150 h-150 bg-steel/40 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-emerald/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative px-8 md:px-16 lg:px-32 py-24">

      <!-- Header -->
      <section class="mb-20">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">What We Offer</p>
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">Services</h1>
        <p class="text-silver text-lg max-w-2xl leading-relaxed">
          Every project is scoped and priced individually — no cookie-cutter packages.
          Reach out to discuss your project and get a custom quote.
        </p>
      </section>

      <!-- Process Steps -->
      <section class="mb-20 bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-2xl p-10 md:p-14">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">How It Works</p>
        <h2 class="text-3xl font-bold text-ivory mb-10">From Idea to Launch</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="step in process" :key="step.number" class="relative flex flex-col gap-3">
            <div class="w-12 h-12 rounded-xl bg-emerald/20 border border-emerald/40 flex items-center justify-center text-emerald font-bold text-lg">
              {{ step.number }}
            </div>
            <h3 class="text-ivory font-semibold">{{ step.title }}</h3>
            <p class="text-silver text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Service Cards -->
      <section class="mb-20">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-8">All Services</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl p-8 hover:border-emerald/40 hover:bg-steel/50 transition-all duration-200 flex flex-col"
          >
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-emerald/15 border border-emerald/20 flex items-center justify-center text-emerald" v-html="service.icon"></div>
              <h2 class="text-ivory font-bold text-xl">{{ service.title }}</h2>
            </div>
            <p class="text-silver text-sm leading-relaxed mb-6 flex-1">{{ service.desc }}</p>
            <ul class="space-y-2 mb-8">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center gap-2 text-ivory/70 text-sm"
              >
                <span class="text-emerald text-xs">✦</span>
                {{ feature }}
              </li>
            </ul>
            <RouterLink
              to="/contact"
              class="inline-block text-center bg-emerald/20 backdrop-blur-sm border border-emerald/40 text-emerald px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-emerald/40 transition-colors duration-200"
            >
              Inquire About This Service
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- CTA Banner -->
      <section class="relative bg-steel/40 backdrop-blur-sm border border-emerald/20 rounded-2xl p-12 text-center overflow-hidden mb-20">
        <div class="absolute inset-0 bg-linear-to-br from-emerald/5 to-transparent pointer-events-none"></div>
        <div class="relative">
          <h2 class="text-2xl md:text-3xl font-bold text-ivory mb-4">Not sure what you need?</h2>
          <p class="text-silver mb-8 max-w-lg mx-auto leading-relaxed">
            That's okay — let's talk through your goals and figure out the best approach together.
          </p>
          <RouterLink
            to="/contact"
            class="inline-block bg-emerald/20 backdrop-blur-sm border border-emerald/50 text-emerald px-10 py-3 rounded-xl font-semibold tracking-wide hover:bg-emerald/40 transition-colors duration-200"
          >
            Start a Conversation
          </RouterLink>
        </div>
      </section>

      <!-- FAQ -->
      <section>
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">FAQ</p>
        <h2 class="text-3xl font-bold text-ivory mb-10">Common questions</h2>
        <div class="space-y-4">
          <div
            v-for="(faq, i) in faqs"
            :key="faq.q"
            class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl overflow-hidden"
          >
            <button
              class="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-steel/50 transition-colors duration-200"
              @click="faq.open = !faq.open"
              :aria-expanded="faq.open"
              :aria-controls="`faq-answer-${i}`"
            >
              <span class="text-ivory font-semibold pr-4">{{ faq.q }}</span>
              <svg
                class="w-5 h-5 text-emerald shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': faq.open }"
                aria-hidden="true"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Transition name="accordion">
              <div v-if="faq.open" :id="`faq-answer-${i}`" class="px-6 pb-5">
                <p class="text-silver text-sm leading-relaxed">{{ faq.a }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const process = [
  { number: '01', title: 'Discover', desc: 'We discuss your goals, audience, and timeline to understand exactly what you need.' },
  { number: '02', title: 'Scope', desc: 'You receive a clear proposal with deliverables, timeline, and a custom quote.' },
  { number: '03', title: 'Build', desc: 'Development begins with regular updates and check-ins throughout.' },
  { number: '04', title: 'Launch', desc: 'Thorough testing, deployment, and a smooth handoff with full documentation.' },
]

const services = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>`,
    title: 'Landing Page',
    desc: 'A high-converting single page designed to capture attention, communicate your value, and drive action.',
    features: ['Fully responsive design', 'SEO optimized', 'Contact or lead form', 'Fast load performance'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,
    title: 'Business Website',
    desc: 'A professional multi-page site that establishes your brand online and gives clients everything they need to trust you.',
    features: ['5–7 custom pages', 'Mobile-first design', 'CMS integration (optional)', 'Analytics setup'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`,
    title: 'Custom Web Application',
    desc: 'A purpose-built web app with a Vue or React frontend and a Node/Express backend tailored to your workflow.',
    features: ['Vue or React frontend', 'Node.js + Express backend', 'User authentication', 'Database integration'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>`,
    title: 'API Development',
    desc: 'Clean, documented REST APIs built to power your frontend, connect third-party tools, or expose your data securely.',
    features: ['RESTful API design', 'Authentication & authorization', 'Third-party integrations', 'Full documentation'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>`,
    title: 'E-commerce',
    desc: 'An online store built to sell — fast, secure, and easy to manage, with payment and inventory integrations.',
    features: ['Product catalog & cart', 'Secure payment integration', 'Order management', 'Mobile optimized'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>`,
    title: 'Maintenance & Support',
    desc: 'Ongoing care for your existing site — updates, performance monitoring, bug fixes, and feature additions.',
    features: ['Regular updates', 'Performance monitoring', 'Bug fixes & patches', 'Priority support'],
  },
]

const faqs = reactive([
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary depending on scope. A landing page can be delivered in 1–2 weeks, while a full web application may take 4–8+ weeks. You\'ll receive a clear timeline estimate in your project proposal.',
    open: false,
  },
  {
    q: 'How is pricing determined?',
    a: 'Every project is scoped individually. After an initial conversation about your goals, you\'ll receive a custom proposal outlining the work, timeline, and a flat-rate price — no hourly billing surprises.',
    open: false,
  },
  {
    q: 'Do you work with existing websites?',
    a: 'Yes. Whether you need a redesign, new features added, or ongoing maintenance for an existing site, reach out and we\'ll assess what\'s needed.',
    open: false,
  },
  {
    q: 'What happens after the site launches?',
    a: 'You\'ll receive full documentation and a handoff call. Maintenance & Support packages are available if you\'d like ongoing help with updates, monitoring, or new features.',
    open: false,
  },
  {
    q: 'Which technologies do you build with?',
    a: 'Primary stack includes Vue or React on the frontend, Node.js with Express on the backend, and Tailwind CSS for styling. Tech choices are always discussed and agreed upon during scoping.',
    open: false,
  },
])
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.2s ease, max-height 0.25s ease;
  overflow: hidden;
  max-height: 200px;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
