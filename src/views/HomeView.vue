<template>
  <div>
  <!-- Hero -->
  <section class="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-24 overflow-hidden">

    <!-- Particle network background -->
    <vue-particles
      id="tsparticles"
      class="absolute inset-0 w-full h-full"
      :options="{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' }
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.6 } },
            push: { quantity: 3 }
          }
        },
        particles: {
          color: { value: '#1A7A4A' },
          links: {
            color: '#A9B8C3',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            outModes: 'out'
          },
          number: { value: 90, density: { enable: true } },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 2.5 } }
        },
        detectRetina: true
      }"
    />

    <!-- Content sits above particles -->
    <div class="relative z-10">
      <p class="text-emerald text-sm font-semibold tracking-widest uppercase mb-8">Web Design &amp; Development</p>

      <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
      Building Websites<br />
        <span class="text-emerald"><em>That Work.</em></span>
      </h1>

      <p class="text-ivory text-xl md:text-2xl font-medium max-w-xl mb-12 leading-relaxed">
        Custom websites and web applications crafted for performance,
        accessibility, and real results.
      </p>

      <div class="flex flex-wrap gap-4">
        <RouterLink
          to="/portfolio"
          class="bg-emerald border border-emerald text-ivory px-8 py-3 rounded font-semibold tracking-wide hover:bg-emerald/80 transition-colors"
        >
          View Our Work
        </RouterLink>
        <RouterLink
          to="/contact"
          class="border border-silver text-silver px-8 py-3 rounded font-semibold tracking-wide hover:bg-silver hover:text-navy transition-colors"
        >
          Get In Touch
        </RouterLink>
      </div>
    </div>

  </section>

  <!-- Testimonials -->
  <section class="relative px-8 md:px-16 lg:px-32 py-24 border-t border-silver/10 overflow-hidden">
    <div class="absolute top-0 left-1/2 w-96 h-96 bg-emerald/4 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

    <div class="relative">
      <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">Testimonials</p>
      <h2 class="text-3xl md:text-4xl font-bold text-ivory mb-12">What clients say</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <blockquote
          v-for="testimonial in testimonials"
          :key="testimonial.role"
          class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl p-8 flex flex-col hover:border-emerald/20 transition-colors duration-200"
        >
          <svg class="w-6 h-6 text-emerald/60 mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p class="text-silver text-sm leading-relaxed flex-1 mb-6">{{ testimonial.quote }}</p>
          <footer>
            <p class="text-ivory font-semibold text-sm">{{ testimonial.name }}</p>
            <p class="text-silver/60 text-xs mt-0.5">{{ testimonial.role }}</p>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const testimonials = [
  {
    quote: 'April delivered a clean, fast site that perfectly captured our brand. The whole process was smooth and communicative from start to finish.',
    name: '★★★★★',
    role: 'Small Business Owner',
  },
  {
    quote: 'The custom web app she built has been running flawlessly. Well-structured code made it easy for our team to maintain going forward.',
    name: '★★★★★',
    role: 'Startup Founder',
  },
  {
    quote: 'Excellent attention to detail and very responsive throughout the project. Would absolutely work with A Web of Code again.',
    name: '★★★★★',
    role: 'Freelance Consultant',
  },
]
</script>
