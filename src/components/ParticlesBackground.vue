<template>
  <div id="tsparticles" class="absolute inset-0 w-full h-full" />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let container = null

onMounted(async () => {
  const [{ tsParticles }, { loadSlim }] = await Promise.all([
    import('@tsparticles/engine'),
    import('@tsparticles/slim'),
  ])
  await loadSlim(tsParticles)
  container = await tsParticles.load({
    id: 'tsparticles',
    options: {
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.6 } },
          push: { quantity: 3 },
        },
      },
      particles: {
        color: { value: '#1A7A4A' },
        links: { color: '#A9B8C3', distance: 150, enable: true, opacity: 0.3, width: 1 },
        move: { enable: true, speed: 0.8, direction: 'none', outModes: 'out' },
        number: { value: 90, density: { enable: true } },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 2.5 } },
      },
      detectRetina: true,
    },
  })
})

onUnmounted(() => {
  container?.destroy()
})
</script>