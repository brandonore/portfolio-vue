<!-- EasyTranslate AI -->
<script setup>
import StoreMark from './StoreMark.vue'
</script>

<template>
  <article id="easytranslate" class="rounded-[28px] bg-et-navy text-white overflow-hidden scroll-mt-6">
    <div class="grid lg:grid-cols-12 gap-x-8 lg:gap-x-16 px-6 sm:px-10 lg:px-14">
      <div class="lg:col-span-6 order-2 lg:order-1 relative h-[360px] sm:h-[440px] lg:h-auto" aria-hidden="true">
        <img src="/work/easytranslate/phone-dark.webp" alt="" loading="lazy" decoding="async" class="absolute left-[6%] sm:left-[14%] lg:left-auto lg:right-[38%] top-8 h-[125%] lg:h-[106%] w-auto max-w-none">
        <img src="/work/easytranslate/phone-light.webp" alt="" loading="lazy" decoding="async" class="absolute left-[44%] sm:left-[46%] lg:left-auto lg:right-[2%] top-24 h-[125%] lg:h-[106%] w-auto max-w-none">
      </div>
      <div class="lg:col-span-6 order-1 lg:order-2 py-10 lg:py-14">
        <div class="flex items-center gap-4">
          <span class="app-icon w-14 h-14"><img src="/work/easytranslate/icon.webp" alt="" class="object-cover"></span>
          <h3 class="font-brand text-[2.1rem] font-bold tracking-[-0.02em]">EasyTranslate AI</h3>
        </div>
        <p class="mt-6 text-xl leading-snug font-medium">Translate a whole document from your phone.</p>
        <p class="mt-3 leading-relaxed text-white/75">Upload a PDF, Word, Excel or PowerPoint file, or point the camera at a page, and get it back in any of 100+ languages with the formatting kept. Vue and Quasar wrapped in Capacitor, Firebase behind it, credits and subscriptions through RevenueCat.</p>
        <dl class="mt-7 grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px]">
          <dt class="text-white/55">Role</dt><dd>Design, engineering and release</dd>
          <dt class="text-white/55">Platform</dt><dd>iOS</dd>
          <dt class="text-white/55">Stack</dt><dd>Vue, Quasar, Capacitor, TypeScript, Firebase</dd>
          <dt class="text-white/55">Status</dt><dd class="flex items-center gap-2.5"><span class="live-dot"></span>Live on the App Store</dd>
        </dl>
        <div class="mt-8 flex flex-wrap gap-2.5 text-[15px] font-medium">
          <a href="https://apps.apple.com/us/app/easytranslate-ai-pdf-docs/id6751864455" target="_blank" rel="noopener noreferrer" class="store-link bg-et-purple-dark text-white hover:bg-et-purple">
            <StoreMark store="apple" />App Store
          </a>
          <a href="https://easytranslate.io" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full border border-white/35 hover:bg-white/10">easytranslate.io</a>
        </div>
      </div>
    </div>
  </article>
</template>
