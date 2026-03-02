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
              <div class="w-12 h-12 rounded-xl bg-emerald/15 border border-emerald/20 flex items-center justify-center text-2xl">
                {{ service.icon }}
              </div>
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
      <section class="relative bg-steel/40 backdrop-blur-sm border border-emerald/20 rounded-2xl p-12 text-center overflow-hidden">
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

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const process = [
  { number: '01', title: 'Discover', desc: 'We discuss your goals, audience, and timeline to understand exactly what you need.' },
  { number: '02', title: 'Scope', desc: 'You receive a clear proposal with deliverables, timeline, and a custom quote.' },
  { number: '03', title: 'Build', desc: 'Development begins with regular updates and check-ins throughout.' },
  { number: '04', title: 'Launch', desc: 'Thorough testing, deployment, and a smooth handoff with full documentation.' },
]

const services = [
  {
    icon: '🖥️',
    title: 'Landing Page',
    desc: 'A high-converting single page designed to capture attention, communicate your value, and drive action.',
    features: ['Fully responsive design', 'SEO optimized', 'Contact or lead form', 'Fast load performance'],
  },
  {
    icon: '🌐',
    title: 'Business Website',
    desc: 'A professional multi-page site that establishes your brand online and gives clients everything they need to trust you.',
    features: ['5–7 custom pages', 'Mobile-first design', 'CMS integration (optional)', 'Analytics setup'],
  },
  {
    icon: '⚙️',
    title: 'Custom Web Application',
    desc: 'A purpose-built web app with a Vue or React frontend and a Node/Express backend tailored to your workflow.',
    features: ['Vue or React frontend', 'Node.js + Express backend', 'User authentication', 'Database integration'],
  },
  {
    icon: '🔌',
    title: 'API Development',
    desc: 'Clean, documented REST APIs built to power your frontend, connect third-party tools, or expose your data securely.',
    features: ['RESTful API design', 'Authentication & authorization', 'Third-party integrations', 'Full documentation'],
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    desc: 'An online store built to sell — fast, secure, and easy to manage, with payment and inventory integrations.',
    features: ['Product catalog & cart', 'Secure payment integration', 'Order management', 'Mobile optimized'],
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    desc: 'Ongoing care for your existing site — updates, performance monitoring, bug fixes, and feature additions.',
    features: ['Regular updates', 'Performance monitoring', 'Bug fixes & patches', 'Priority support'],
  },
]
</script>
