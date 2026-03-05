<template>
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
      <p class="text-emerald text-sm font-semibold tracking-widest uppercase mb-8"> Web Design &amp; Development</p>

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
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
