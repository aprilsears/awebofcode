import { onMounted, onUnmounted } from 'vue'

/**
 * Adds a fade-in-up animation to elements with [data-reveal] attribute
 * when they scroll into the viewport.
 *
 * Usage in a component:
 *   import { useScrollReveal } from '@/composables/useScrollReveal'
 *   useScrollReveal()
 *
 * In the template, add data-reveal to any element you want animated:
 *   <div data-reveal>...</div>
 *
 * Optional delay via data-reveal-delay="100" (ms)
 */
export function useScrollReveal() {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0
            setTimeout(() => {
              entry.target.classList.add('revealed')
            }, Number(delay))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('reveal-ready')
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
