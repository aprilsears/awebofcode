<template>
  <header class="sticky top-0 z-50 bg-slate-900 backdrop-blur-sm border-b border-slate-gray/20 px-8 py-3 flex items-center justify-between">
    <RouterLink to="/" class="outline-none text-tan font-bold text-xl tracking-wide hover:opacity-80 transition-opacity">
      A Web of Code
    </RouterLink>

    <nav class="flex gap-10 text-xs font-semibold tracking-widest uppercase">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="relative text-slate-gray hover:text-tan transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-tan after:transition-all after:duration-300 hover:after:w-full"
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
