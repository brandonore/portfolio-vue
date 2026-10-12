<script setup>
// The tools first, then the work around a product that no screenshot shows
const stack = [
  { area: 'Web', tools: 'React, Next.js, Vue, Astro, Tailwind' },
  { area: 'Mobile', tools: 'React Native with Expo, Flutter, Capacitor' },
  { area: 'Backend', tools: 'Node, tRPC, Fastify, Postgres, Supabase, Firebase' },
  { area: 'Payments', tools: 'Stripe, RevenueCat, Lemon Squeezy, webhooks' },
  { area: 'App stores', tools: 'App Store and Google Play: review, in-app purchases, privacy labels, account deletion' },
  { area: 'Ads', tools: 'AppsFlyer attribution, Meta, Apple and Reddit ads' },
  { area: 'Testing', tools: 'Playwright, Vitest' },
]
</script>

<template>
  <section id="about" class="mx-auto max-w-[1360px] px-5 sm:px-8 pt-20 sm:pt-28 scroll-mt-6">
    <div class="grid lg:grid-cols-12 gap-x-12 gap-y-12">
      <div class="lg:col-span-6">
        <h2 class="font-brand text-3xl sm:text-[2.6rem] font-bold tracking-[-0.025em] leading-none">About</h2>
        <p class="mt-7 text-xl leading-relaxed">I'm Brandon Ore. I have been building production software since 2019: first for clients, then as a founding engineer at The Futures Desk, and now at Topstep.</p>
        <p class="mt-4 leading-relaxed text-primary-light max-w-[34rem]">I design the screens and build everything behind them: the app, the API, the database and the billing. Most of my work has been solo or on a two-engineer team, so I am used to owning a feature from the first sketch to the release, and to fixing it when it breaks. That includes the parts nobody sees: payments, app store review, privacy rules and tests.</p>
      </div>
      <div class="lg:col-span-5 lg:col-start-8 lg:pt-[4.4rem]">
        <h3 class="font-brand text-xl font-semibold tracking-tight">What I work with</h3>
        <dl class="mt-4 grid grid-cols-[5.5rem_1fr] gap-y-2.5 text-[15px] leading-snug">
          <template v-for="row in stack" :key="row.area">
            <dt class="font-medium">{{ row.area }}</dt>
            <dd class="text-primary-light">{{ row.tools }}</dd>
          </template>
        </dl>
      </div>
    </div>
  </section>
</template>
