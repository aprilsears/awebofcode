<template>
  <header class="sticky top-0 z-50 bg-steel/80 backdrop-blur-md border-b border-silver/20 px-12 py-6 flex items-center justify-between">
    <RouterLink to="/" class="outline-underline padding-1rem border-1rem border-emerald hover:opacity-75 transition-opacity duration-200">
      <span style="font-family: 'Pacifico', cursive;" class="text-silver text-2xl opacity-80">
  A Web of Code
</span>

    </RouterLink>

    <nav class="flex gap-10 text-xs font-semibold tracking-widest uppercase">
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
