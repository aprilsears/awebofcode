<template>
  <section class="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-24 overflow-hidden">

    <!-- Background video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>

    <!-- Dark overlay so text stays readable -->
    <div class="absolute inset-0 bg-space-cadet/75"></div>

    <!-- Content sits above video -->
    <div class="relative z-10">
      <p class="text-tan text-xs font-semibold tracking-widest uppercase mb-6">
        Web Design &amp; Development
      </p>

      <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
        We Build Websites<br />
        <span class="text-tan">That Work.</span>
      </h1>

      <p class="text-white text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
        Custom websites and web applications crafted for performance,
        accessibility, and real results.
      </p>

      <div class="flex flex-wrap gap-4">
        <RouterLink
          to="/portfolio"
          class="bg-mortuum text-white px-8 py-3 rounded font-semibold tracking-wide hover:opacity-90 transition-opacity"
        >
          View Our Work
        </RouterLink>
        <RouterLink
          to="/contact"
          class="border border-tan text-tan px-8 py-3 rounded font-semibold tracking-wide hover:bg-tan hover:text-space-cadet transition-colors"
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
