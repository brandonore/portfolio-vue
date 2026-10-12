<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FuturesDeskRoom from './components/FuturesDeskRoom.vue'
import MySeedStoryRoom from './components/MySeedStoryRoom.vue'
import CertMatrixRoom from './components/CertMatrixRoom.vue'
import EasyTranslateRoom from './components/EasyTranslateRoom.vue'
import BcpFlowRoom from './components/BcpFlowRoom.vue'
import MoreProducts from './components/MoreProducts.vue'
import AboutSection from './components/AboutSection.vue'
import ContactBand from './components/ContactBand.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a href="#work" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full focus:bg-primary focus:text-secondary">Skip to the work</a>

  <SiteHeader />

  <main id="top">
    <HeroSection />

    <!-- The product built with a team -->
    <section id="work" class="mx-auto max-w-[1200px] px-5 sm:px-8 pt-14 sm:pt-20 scroll-mt-6">
      <h2 class="mb-8 font-brand text-3xl sm:text-[2.6rem] font-bold tracking-[-0.025em] leading-none">Built with a team</h2>
      <FuturesDeskRoom />
    </section>

    <!-- My own products: each one is a room in its own colours, deepest codebase first after MySeedStory -->
    <section id="products" class="mx-auto max-w-[1200px] px-5 sm:px-8 pt-20 sm:pt-28 scroll-mt-6">
      <div class="mb-8 grid lg:grid-cols-12 gap-x-10 gap-y-4 items-end">
        <h2 class="lg:col-span-6 font-brand text-3xl sm:text-[2.6rem] font-bold tracking-[-0.025em] leading-none">Built on my own</h2>
        <p class="lg:col-span-6 max-w-[34rem] leading-relaxed text-primary-light">I designed, built and released each of these myself. They are published under my own label, Pomkatsu.</p>
      </div>

      <MySeedStoryRoom />
      <CertMatrixRoom class="mt-5" />
      <EasyTranslateRoom class="mt-5" />
      <BcpFlowRoom class="mt-5" />

      <MoreProducts />
    </section>

    <AboutSection />
    <ContactBand />
  </main>

  <SiteFooter />
</template>
