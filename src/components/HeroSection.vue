<script setup>
import { githubUrl } from '../links'

// Newest first. This list is the résumé at a glance, so it sits right under the headline.
const experience = [
  {
    when: 'Since 2026',
    name: 'Topstep',
    role: 'Software engineer',
    note: 'Joined through the acquisition of The Futures Desk in April 2026.',
  },
  {
    when: '2024 to 2026',
    name: 'The Futures Desk',
    role: 'Founding engineer',
    note: 'One of two engineers. Launched in November 2024 and acquired by Topstep.',
  },
  {
    when: 'Since 2019',
    name: 'Independent',
    role: 'Client apps, then my own products',
    note: 'Seven products of my own, published under the name Pomkatsu.',
  },
]
</script>

<template>
  <!-- The claim on the left, the plain account of it on the right, then the three jobs as proof -->
  <section class="mx-auto max-w-[1200px] px-5 sm:px-8">
    <div class="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end pt-8 sm:pt-14 pb-12 sm:pb-16">
      <h1 class="lg:col-span-7 text-balance font-brand font-bold tracking-[-0.02em] leading-[1] text-[clamp(2.25rem,5.6vw,4.6rem)]">Software engineer who designs and builds the whole product.</h1>
      <div class="lg:col-span-5 lg:pb-2">
        <p class="max-w-[33rem] text-lg leading-relaxed text-primary-light">I'm a software engineer at Topstep. I joined when Topstep acquired The Futures Desk, a trading platform I built with one other engineer. On my own I have designed and shipped seven more products for iOS, Android and the web.</p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a href="#work" class="px-6 py-3 rounded-full bg-primary text-secondary font-semibold hover:bg-primary-dark">See the work</a>
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-full border border-primary font-semibold hover:bg-secondary-light">View GitHub</a>
        </div>
      </div>
    </div>

    <h2 class="sr-only">Experience</h2>
    <ol class="rounded-[28px] bg-secondary-light px-6 sm:px-10 lg:px-14 py-3 sm:py-5">
      <li
        v-for="(job, i) in experience"
        :key="job.name"
        class="grid md:grid-cols-[8rem_minmax(0,1fr)_minmax(0,1.35fr)] gap-x-8 gap-y-1 md:items-baseline py-6"
        :class="i > 0 ? 'border-t border-secondary-dark' : ''"
      >
        <span class="text-[15px] text-primary-light">{{ job.when }}</span>
        <span class="font-brand text-[1.7rem] sm:text-[2rem] font-bold tracking-[-0.02em] leading-none">{{ job.name }}</span>
        <span class="mt-1 md:mt-0">
          <span class="block font-medium">{{ job.role }}</span>
          <span class="block text-[15px] leading-relaxed text-primary-light">{{ job.note }}</span>
        </span>
      </li>
    </ol>
  </section>
</template>
