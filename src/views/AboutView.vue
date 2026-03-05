<template>
  <div class="relative min-h-screen overflow-hidden">

    <!-- Decorative background orbs -->
    <div class="absolute top-20 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-40 left-0 w-72 h-72 bg-steel/60 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative px-8 md:px-16 lg:px-32 py-24">

      <!-- Intro -->
      <section class="mb-20">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">What is A Web of Code?</p>
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-8">
          About <span class="text-emerald">A Web of Code</span>
        </h1>
        <p class="text-ivory/80 text-lg max-w-2xl leading-relaxed mb-4">
          A Web of Code is a boutique web development studio dedicated to building
          clean, performant, and accessible digital experiences. Every project is
          approached with intention — from the first line of code to final deployment.
        </p>
        <p class="text-silver text-lg max-w-2xl leading-relaxed">
          Whether you need a polished marketing site, a custom web application, or
          an API-driven platform, the goal is always the same: something that works
          beautifully and lasts.
        </p>
      </section>

      <!-- Stats -->
      <section class="mb-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-steel/40 backdrop-blur-sm border border-silver/10 rounded-2xl p-6 text-center"
        >
          <p class="text-4xl font-bold text-emerald mb-2">{{ stat.value }}</p>
          <p class="text-silver text-sm tracking-wide">{{ stat.label }}</p>
        </div>
      </section>

      <!-- Approach -->
      <section class="mb-20 bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-2xl p-10 md:p-14">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">How It Works</p>
        <h2 class="text-3xl font-bold text-ivory mb-10">Approach</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="step in approach" :key="step.title" class="flex flex-col gap-3">
            <div class="w-10 h-10 rounded-lg bg-emerald/20 border border-emerald/30 flex items-center justify-center text-emerald font-bold text-sm">
              {{ step.number }}
            </div>
            <h3 class="text-ivory font-semibold text-lg">{{ step.title }}</h3>
            <p class="text-silver text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="mb-20">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-8">Skills & Technologies</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="bg-steel/30 backdrop-blur-sm border-l-2 border-l-emerald border border-silver/10 rounded-xl p-6 hover:bg-steel/50 transition-all duration-200"
          >
            <p class="text-ivory font-semibold text-lg mb-1">{{ skill.name }}</p>
            <p class="text-silver text-sm leading-relaxed">{{ skill.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Connect -->
      <section>
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-8">Connect</p>
        <div class="flex flex-wrap gap-4">
          <a
            href="https://github.com/aprilsears/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 bg-steel/30 backdrop-blur-sm border border-silver/20 text-ivory px-6 py-3 rounded-xl hover:border-emerald/50 hover:text-emerald transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aprilsears"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 bg-steel/30 backdrop-blur-sm border border-silver/20 text-ivory px-6 py-3 rounded-xl hover:border-emerald/50 hover:text-emerald transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
const stats = [
  { value: '6+', label: 'Technologies' },
  { value: '100%', label: 'Custom Built' },
  { value: '3', label: 'Core Services' },
  { value: '1', label: 'Focused Studio' },
]

const approach = [
  {
    number: '01',
    title: 'Discover',
    desc: 'We start by understanding your goals, audience, and vision before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Build',
    desc: 'Clean, maintainable code with regular check-ins so there are never any surprises.',
  },
  {
    number: '03',
    title: 'Launch',
    desc: 'Thorough testing, optimized performance, and a smooth handoff with documentation.',
  },
]

const skills = [
  { name: 'HTML & CSS', desc: 'Semantic markup and responsive, accessible styling' },
  { name: 'JavaScript', desc: 'Modern ES6+ and TypeScript development' },
  { name: 'Vue & React', desc: 'Component-driven frontend frameworks' },
  { name: 'Node.js', desc: 'Server-side JavaScript for scalable backends' },
  { name: 'REST APIs', desc: 'Design, integration, and consumption' },
  { name: 'Express', desc: 'Lightweight and flexible Node.js web framework' },
]
</script>
