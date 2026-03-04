<template>
  <div class="relative min-h-screen overflow-hidden">

    <!-- Decorative background orbs -->
    <div class="absolute top-20 right-0 w-96 h-96 bg-steel/50 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-20 left-0 w-80 h-80 bg-emerald/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative px-8 md:px-16 lg:px-32 py-24">

      <!-- Header -->
      <section class="mb-6">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">My Work</p>
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">Portfolio</h1>
        <p class="text-silver text-lg max-w-2xl leading-relaxed">
          A selection of projects built across frontend, backend, and full-stack development.
        </p>
      </section>

      <!-- Filter Tabs -->
      <section class="mb-12 flex flex-wrap gap-2">
        <button
          v-for="tag in filters"
          :key="tag"
          @click="activeFilter = tag"
          :class="[
            'px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors duration-200',
            activeFilter === tag
              ? 'bg-emerald/30 border border-emerald/60 text-emerald'
              : 'bg-steel/30 border border-silver/20 text-silver hover:border-emerald/30 hover:text-emerald'
          ]"
        >
          {{ tag }}
        </button>
      </section>

      <!-- Project Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="project in filteredProjects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl p-6 flex flex-col hover:border-emerald/40 hover:bg-steel/50 transition-all duration-200 group"
        >
          <!-- Top row -->
          <div class="flex items-start justify-between mb-4">
            <div class="w-10 h-10 rounded-lg bg-emerald/15 border border-emerald/20 flex items-center justify-center text-xl">
              {{ project.icon }}
            </div>
            <svg class="w-4 h-4 text-silver/40 group-hover:text-emerald transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>

          <h2 class="text-ivory font-bold text-lg mb-2 group-hover:text-emerald transition-colors duration-200">
            {{ project.title }}
          </h2>
          <p class="text-silver text-sm leading-relaxed mb-6 flex-1">{{ project.desc }}</p>

          <!-- Tech tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="text-xs px-2 py-0.5 rounded-full bg-navy/60 border border-silver/20 text-silver/70"
            >
              {{ tech }}
            </span>
          </div>
        </a>
      </section>

      <!-- GitHub CTA -->
      <section class="mt-20 text-center">
        <p class="text-silver mb-6">See everything on GitHub</p>
        <a
          href="https://github.com/aprilsears/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 bg-steel/30 backdrop-blur-sm border border-silver/20 text-ivory px-8 py-3 rounded-xl hover:border-emerald/50 hover:text-emerald transition-colors duration-200"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View All Repositories
        </a>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('All')

const filters = ['All', 'Vue', 'JavaScript', 'HTML/CSS', 'Node.js']

const projects = [
  {
    title: 'A Web of Code',
    desc: 'Business website for A Web of Code — built with Vue 3, Tailwind CSS v4, and tsParticles.',
    url: 'https://github.com/aprilsears/awebofcode',
    icon: '🌐',
    tech: ['Vue', 'Tailwind', 'Vite'],
    tags: ['Vue'],
  },
  {
    title: 'Chronically Well (Vue)',
    desc: 'Exercise and wellness tracking app rebuilt in Vue with a component-driven architecture.',
    url: 'https://github.com/aprilsears/chronically-well-vue',
    icon: '🏃',
    tech: ['Vue', 'JavaScript', 'CSS'],
    tags: ['Vue'],
  },
  {
    title: 'Chronically Well',
    desc: 'Web dev capstone project — a wellness and exercise tracker built with vanilla JavaScript.',
    url: 'https://github.com/aprilsears/chronically-well',
    icon: '💪',
    tech: ['JavaScript', 'HTML', 'CSS'],
    tags: ['JavaScript'],
  },
  {
    title: 'Weather Dashboard',
    desc: 'Interactive weather dashboard with multiple location support and live forecast data.',
    url: 'https://github.com/aprilsears/weather-dashboard',
    icon: '⛅',
    tech: ['JavaScript', 'API', 'HTML', 'CSS'],
    tags: ['JavaScript'],
  },
  {
    title: 'Movie Watchlist App',
    desc: 'Movie watchlist with personalized star ratings — search, save, and rate your films.',
    url: 'https://github.com/aprilsears/movie-watchlist-app',
    icon: '🎬',
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['HTML/CSS', 'JavaScript'],
  },
  {
    title: 'Quote Card (Express)',
    desc: 'Server-rendered quote card app built with Node.js and Express.',
    url: 'https://github.com/aprilsears/quote-card-express',
    icon: '💬',
    tech: ['Node.js', 'Express', 'JavaScript'],
    tags: ['Node.js', 'JavaScript'],
  },
  {
    title: 'Personal Portfolio & Blog',
    desc: 'Earlier personal portfolio and blog site built with HTML and CSS.',
    url: 'https://github.com/aprilsears/aprilsears-site-blog',
    icon: '✍️',
    tech: ['HTML', 'CSS'],
    tags: ['HTML/CSS'],
  },
  {
    title: 'To-Do List',
    desc: 'A clean, functional to-do list app with task management and styling.',
    url: 'https://github.com/aprilsears/to-do-list',
    icon: '✅',
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['HTML/CSS', 'JavaScript'],
  },
  {
    title: 'Black Widow Contact Card',
    desc: 'A themed CSS contact card project with a Black Widow design.',
    url: 'https://github.com/aprilsears/Black-Widow-Contact-Card',
    icon: '🕷️',
    tech: ['HTML', 'CSS'],
    tags: ['HTML/CSS'],
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter.value))
)
</script>
