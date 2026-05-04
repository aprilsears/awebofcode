<template>
  <!-- Sticky wrapper so mobile menu stays attached to header -->
  <div class="sticky top-0 z-50">
    <header class="bg-steel/15 backdrop-blur-md border-b border-silver/20 px-4 sm:pl-3 sm:pr-8 lg:pl-4 lg:pr-12 py-2 flex flex-row items-center justify-between gap-3">
      <RouterLink to="/" class="shrink-0 hover:opacity-75 transition-opacity duration-200" @click="menuOpen = false">
        <span style="font-family: 'Sixtyfour', monospace;" class="text-emerald text-lg tracking-wider">A Web of Code</span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6 lg:gap-10 text-xs font-semibold tracking-widest uppercase">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative text-silver hover:text-emerald transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald after:transition-all after:duration-300 hover:after:w-full"
        >{{ link.label }}</RouterLink>
      </nav>

      <!-- Hamburger button (mobile only) -->
      <button
        class="md:hidden text-silver hover:text-emerald transition-colors duration-200 p-1"
        @click="menuOpen = !menuOpen"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="menuOpen"
      >
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </header>

    <!-- Mobile dropdown menu -->
    <Transition name="slide-down">
      <div v-if="menuOpen" class="md:hidden bg-navy/95 backdrop-blur-md border-b border-silver/10 px-6 py-4">
        <nav class="flex flex-col">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-silver hover:text-emerald transition-colors duration-200 text-sm font-semibold tracking-widest uppercase py-3 border-b border-silver/10 last:border-0"
            @click="menuOpen = false"
          >{{ link.label }}</RouterLink>
        </nav>
      </div>
    </Transition>
  </div>

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" :key="$route.path" />
      </Transition>
    </RouterView>
  </main>

  <footer class="border-t border-silver/10 px-8 md:px-16 lg:px-32 py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

      <!-- Brand -->
      <div>
        <span style="font-family: 'Sixtyfour', monospace;" class="text-emerald text-lg tracking-wider">A Web of Code</span>
        <p class="text-silver text-sm leading-relaxed mt-4 max-w-xs">
          Boutique web development studio crafting custom websites and applications for performance and real results.
        </p>
      </div>

      <!-- Nav links -->
      <div>
        <p class="text-ivory text-xs font-semibold tracking-widest uppercase mb-4">Navigation</p>
        <ul class="space-y-2">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-silver hover:text-emerald transition-colors duration-200 text-sm"
            >{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div>
        <p class="text-ivory text-xs font-semibold tracking-widest uppercase mb-4">Ready to Start?</p>
        <p class="text-silver text-sm leading-relaxed mb-4">Every project is custom-scoped and priced individually — no packages, no surprises.</p>
        <RouterLink
          to="/contact"
          class="inline-block bg-emerald/20 border border-emerald/50 text-emerald px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide hover:bg-emerald/40 transition-colors duration-200"
        >
          Let's Talk
        </RouterLink>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-silver/10">
      <img src="/src/assets/logo.png" alt="A Web of Code" class="w-16 h-auto mix-blend-screen opacity-60" />
      <p class="text-silver/50 text-xs">&copy; {{ currentYear }} A Web of Code. All rights reserved.</p>
      <div class="flex gap-4">
        <a href="https://github.com/aprilsears/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-silver/50 hover:text-emerald transition-colors duration-200">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/aprilsears" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-silver/50 hover:text-emerald transition-colors duration-200">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>

  <SpeedInsights />
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { SpeedInsights } from '@vercel/speed-insights/vue'

const { currentUser } = useAuth()
const menuOpen = ref(false)
const currentYear = new Date().getFullYear()

const links = computed(() => [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
  currentUser.value
    ? { to: '/dashboard', label: 'Client Portal' }
    : { to: '/login', label: 'Client Login' },
])
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
