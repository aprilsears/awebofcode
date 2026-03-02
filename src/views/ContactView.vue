<template>
  <div class="relative min-h-screen overflow-hidden">

    <!-- Decorative background orbs -->
    <div class="absolute top-10 right-10 w-80 h-80 bg-emerald/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-steel/50 rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative px-8 md:px-16 lg:px-32 py-24">

    <!-- Header -->
    <section class="mb-16">
      <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">Get In Touch</p>
      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Let's Work Together
      </h1>
      <p class="text-silver text-lg max-w-xl leading-relaxed">
        Tell us about your project and we'll get back to you within 1–2 business days
        with next steps and a custom quote.
      </p>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <!-- Contact Form -->
      <form
        class="lg:col-span-2 space-y-6"
        @submit.prevent="submitForm"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="block text-silver text-sm font-medium mb-2">Name *</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Your name"
              class="w-full bg-steel/30 backdrop-blur-sm border border-silver/20 rounded-xl px-4 py-3 text-ivory placeholder-silver/40 focus:outline-none focus:border-emerald/60 transition-colors"
            />
          </div>
          <div>
            <label class="block text-silver text-sm font-medium mb-2">Email *</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="your@email.com"
              class="w-full bg-steel/30 backdrop-blur-sm border border-silver/20 rounded-xl px-4 py-3 text-ivory placeholder-silver/40 focus:outline-none focus:border-emerald/60 transition-colors"
            />
          </div>
        </div>

        <div>
          <label class="block text-silver text-sm font-medium mb-2">Service of Interest</label>
          <select
            v-model="form.service"
            class="w-full bg-steel/30 backdrop-blur-sm border border-silver/20 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-emerald/60 transition-colors appearance-none"
          >
            <option value="" disabled>Select a service...</option>
            <option value="landing-page">Landing Page</option>
            <option value="business-website">Business Website</option>
            <option value="web-app">Custom Web Application</option>
            <option value="api">API Development</option>
            <option value="ecommerce">E-commerce</option>
            <option value="maintenance">Maintenance & Support</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label class="block text-silver text-sm font-medium mb-2">Tell us about your project *</label>
          <textarea
            v-model="form.message"
            required
            rows="6"
            placeholder="Describe your project, goals, timeline, or any questions you have..."
            class="w-full bg-steel/30 backdrop-blur-sm border border-silver/20 rounded-xl px-4 py-3 text-ivory placeholder-silver/40 focus:outline-none focus:border-emerald/60 transition-colors resize-none"
          />
        </div>

        <!-- Success message -->
        <div v-if="submitted" class="bg-emerald/10 border border-emerald/30 rounded-xl px-6 py-4 text-emerald text-sm">
          ✓ Message sent! We'll be in touch within 1–2 business days.
        </div>

        <!-- Error message -->
        <div v-if="error" class="bg-red-900/20 border border-red-500/30 rounded-xl px-6 py-4 text-red-400 text-sm">
          Something went wrong. Please try again or email us directly.
        </div>

        <button
          type="submit"
          :disabled="sending"
          class="bg-emerald/20 backdrop-blur-sm border border-emerald/50 text-emerald px-10 py-3 rounded-xl font-semibold tracking-wide hover:bg-emerald/40 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ sending ? 'Sending...' : 'Send Message' }}
        </button>
      </form>

      <!-- Sidebar -->
      <aside class="space-y-6">

        <!-- Highlight card -->
        <div class="relative bg-steel/40 backdrop-blur-sm border border-emerald/20 rounded-xl p-6 overflow-hidden">
          <div class="absolute inset-0 bg-linear-to-br from-emerald/10 to-transparent pointer-events-none"></div>
          <div class="relative">
            <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-3">Custom Quotes</p>
            <p class="text-ivory font-semibold mb-2">No fixed pricing.</p>
            <p class="text-silver text-sm leading-relaxed">Every project is different. Share your idea and we'll build a scope that fits your goals and budget.</p>
          </div>
        </div>

        <div class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl p-6">
          <h3 class="text-ivory font-semibold mb-4">Other Ways to Connect</h3>
          <div class="space-y-4">
            <a
              href="https://github.com/aprilsears/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-silver hover:text-emerald transition-colors duration-200"
            >
              <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              github.com/aprilsears
            </a>
            <a
              href="https://www.linkedin.com/in/aprilsears"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-silver hover:text-emerald transition-colors duration-200"
            >
              <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              linkedin.com/in/aprilsears
            </a>
          </div>
        </div>

        <div class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl p-6">
          <h3 class="text-ivory font-semibold mb-2">Response Time</h3>
          <p class="text-silver text-sm leading-relaxed">
            We typically respond within 1–2 business days. For urgent inquiries,
            reach out via LinkedIn.
          </p>
        </div>
      </aside>

    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  service: '',
  message: '',
})

const sending = ref(false)
const submitted = ref(false)
const error = ref(false)

async function submitForm() {
  sending.value = true
  error.value = false

  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      submitted.value = true
      form.name = ''
      form.email = ''
      form.service = ''
      form.message = ''
    } else {
      error.value = true
    }
  } catch {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>
