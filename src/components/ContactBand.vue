<script setup>
import { emailUrl } from '../links'
</script>

<template>
  <section class="mx-auto max-w-[1360px] px-5 sm:px-8 pt-20 sm:pt-28">
    <div class="rounded-[28px] bg-primary text-secondary px-6 sm:px-10 lg:px-14 py-12 lg:py-16 grid lg:grid-cols-12 gap-8 items-end">
      <div class="lg:col-span-8">
        <h2 class="text-balance font-brand text-4xl sm:text-[3.4rem] font-bold tracking-[-0.03em] leading-[1.02]">Get in touch</h2>
        <p class="mt-5 max-w-[34rem] text-lg leading-relaxed text-secondary/70">Email is the fastest way to reach me. The code for these products is private, and I can walk through any of it on a call.</p>
      </div>
      <div class="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
        <a :href="emailUrl" class="px-6 py-3 rounded-full bg-secondary text-primary-dark font-semibold hover:bg-secondary-dark">Email me</a>
      </div>
    </div>
  </section>
</template>
