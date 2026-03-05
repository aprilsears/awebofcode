<template>
  <header class="sticky top-0 z-50 bg-steel/15 backdrop-blur-md border-b border-silver/20 px-4 sm:pl-3 sm:pr-8 lg:pl-4 lg:pr-12 py-2 flex flex-row items-center justify-between gap-3">
    <RouterLink to="/" class="shrink-0 hover:opacity-75 transition-opacity duration-200">
      <div class="p-0.5 rounded-2xl bg-linear-to-br from-emerald/60 via-silver/20 to-steel/80 filter-[drop-shadow(0_0_10px_rgba(26,122,74,0.35))]">
        <img src="/src/assets/logo.png" alt="A Web of Code" class="h-14 w-auto rounded-2xl mix-blend-screen block" />
      </div>
    </RouterLink>

    <nav class="flex flex-col items-end sm:flex-row sm:items-center gap-1.5 sm:gap-6 lg:gap-10 text-xs font-semibold tracking-widest uppercase">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="relative text-silver hover:text-emerald transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald after:transition-all after:duration-300 hover:after:w-full"
      >{{ link.label }}</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]
</script>
