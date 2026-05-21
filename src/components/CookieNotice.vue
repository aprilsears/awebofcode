<template>
  <Transition name="slide-up">
    <div
      v-if="visible"
      role="region"
      aria-label="Cookie notice"
      class="fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-t border-silver/20 px-6 py-4"
    >
      <div class="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p class="text-silver text-sm leading-relaxed">
          This site uses cookies for analytics and authentication. See our
          <RouterLink to="/privacy" class="text-emerald hover:underline">Privacy Policy</RouterLink>
          for details.
        </p>
        <button
          @click="accept"
          class="shrink-0 bg-emerald/20 border border-emerald/50 text-emerald px-6 py-2 rounded-xl text-sm font-semibold hover:bg-emerald/40 transition-colors duration-200"
        >
          Got it
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const visible = ref(false)

onMounted(() => {
  if (!localStorage.getItem('cookie-consent')) {
    visible.value = true
  }
})

function accept() {
  localStorage.setItem('cookie-consent', '1')
  visible.value = false
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
