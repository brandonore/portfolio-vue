<!-- MySeedStory: the landing page clip opens the room and the phones stand in front of it -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import StoreMark from './StoreMark.vue'

// The clip plays only while it is on screen, and not at all for visitors
// who ask for reduced motion (they keep the poster frame).
const clip = ref(null)
let clipObserver = null

onMounted(() => {
  if (!clip.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  clipObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) clip.value.play().catch(() => {})
    else clip.value.pause()
  }, { threshold: 0.25 })
  clipObserver.observe(clip.value)
})

onUnmounted(() => {
  clipObserver?.disconnect()
})
</script>

<template>
  <article id="myseedstory" class="rounded-[28px] bg-myseedstory-parch-warm text-myseedstory-parch-text overflow-hidden scroll-mt-6">
    <!-- The landing page's clay garden opens the room, and the phones stand in front of it -->
    <figure class="relative">
      <video ref="clip" class="block w-full aspect-[16/9] sm:aspect-[2.4/1] object-cover bg-[#F3EDE2]" src="/work/myseedstory/garden.mp4" poster="/work/myseedstory/garden.webp" preload="none" muted loop playsinline aria-label="A clay model of a seed library, the camera flying into it"></video>
      <figcaption class="px-6 pt-3 text-[14px] leading-snug sm:absolute sm:left-6 lg:left-14 sm:bottom-6 sm:px-4 sm:py-2 sm:rounded-full sm:bg-myseedstory-parch-warm sm:text-[15px]">The landing page is a clay garden you scroll through. <a href="https://myseedstory.co/mascot" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-4 decoration-myseedstory-clay decoration-2 hover:text-myseedstory-clay">Open it</a></figcaption>
    </figure>
    <div class="grid lg:grid-cols-12 gap-x-8 px-6 sm:px-10 lg:px-14 pt-8 lg:pt-12">
      <div class="lg:col-span-5 pb-10 lg:pb-14">
        <div class="flex items-center gap-4">
          <span class="app-icon w-14 h-14"><img src="/work/myseedstory/icon.webp" alt="" class="object-cover"></span>
          <h3 class="font-brand text-[2.1rem] font-bold tracking-[-0.02em] text-myseedstory-forest">MySeedStory</h3>
        </div>
        <p class="mt-6 text-xl leading-snug font-medium">A field guide for the seeds you save.</p>
        <p class="mt-3 max-w-[30rem] leading-relaxed opacity-80">Scan a seed packet, plan your beds by frost date, ask the AI what each growth stage needs, and log every harvest. One Expo codebase for iOS and Android, a Fastify API on Postgres, an admin dashboard, and subscriptions through RevenueCat.</p>
        <dl class="mt-7 grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px]">
          <dt class="opacity-70">Role</dt><dd>Design, engineering and release</dd>
          <dt class="opacity-70">Platform</dt><dd>iOS and Android</dd>
          <dt class="opacity-70">Stack</dt><dd>Expo, TypeScript, Fastify, Drizzle, Postgres</dd>
          <dt class="opacity-70">Status</dt><dd class="flex items-center gap-2.5"><span class="live-dot"></span>Live on both stores</dd>
        </dl>
        <div class="mt-8 flex flex-wrap gap-2.5 text-[15px] font-medium">
          <a href="https://apps.apple.com/us/app/myseedstory-ai-garden-planner/id6761077153" target="_blank" rel="noopener noreferrer" class="store-link bg-myseedstory-forest text-myseedstory-parch-warm hover:bg-myseedstory-forest-light">
            <StoreMark store="apple" />App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.pomkatsu.seedbook" target="_blank" rel="noopener noreferrer" class="store-link bg-myseedstory-forest text-myseedstory-parch-warm hover:bg-myseedstory-forest-light">
            <StoreMark store="play" />Google Play
          </a>
          <a href="https://myseedstory.co" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full border border-myseedstory-forest/40 hover:bg-myseedstory-forest/5">myseedstory.co</a>
        </div>
      </div>
      <!-- My Seeds, the planting calendar, and the AI guidance for a growth stage -->
      <div class="relative z-10 lg:col-span-7 flex justify-center lg:justify-end items-end lg:items-start gap-3 xl:gap-4 overflow-hidden lg:overflow-visible lg:-mt-24 lg:pb-14" aria-hidden="true">
        <div class="phone flex-none w-[150px] sm:w-[190px] lg:w-[150px] xl:w-[196px] mt-14 lg:mt-20 -mb-28 lg:mb-0"><img src="/work/myseedstory/seeds.webp" alt="" width="720" height="1564" loading="lazy" decoding="async"></div>
        <div class="phone flex-none w-[150px] sm:w-[190px] lg:w-[150px] xl:w-[196px] -mb-12 lg:mb-0"><img src="/work/myseedstory/calendar.webp" alt="" width="720" height="1564" loading="lazy" decoding="async"></div>
        <div class="phone flex-none w-[150px] sm:w-[190px] lg:w-[150px] xl:w-[196px] mt-14 lg:mt-20 -mb-28 lg:mb-0"><img src="/work/myseedstory/guidance.webp" alt="" width="720" height="1564" loading="lazy" decoding="async"></div>
      </div>
    </div>
  </article>
</template>
