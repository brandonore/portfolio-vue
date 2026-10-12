<script setup>
// The app stores come first because they take the most of the unseen work
const storeRules = [
  'Apple and Google review every release. When a build is rejected, I fix it and send it back.',
  "Purchases have to go through each store's own billing, with a way to get them back on a new phone.",
  'The price and the terms of a subscription must be shown before anyone pays.',
  'People must be able to delete their account from inside the app.',
  'Both stores ask what data the app collects, and the answers have to match the code.',
  'On an iPhone, the app has to ask permission before tracking anyone for ads.',
  'An app that offers Google sign-in must offer Apple sign-in too.',
  'Every listing needs screenshots in several sizes, an age rating, a privacy policy and a support page.',
]

const groups = [
  {
    title: 'Payments',
    items: [
      'Subscriptions and one-time purchases with Stripe, RevenueCat and Lemon Squeezy',
      'Webhooks, so an account updates the moment a payment goes through or is refunded',
    ],
  },
  {
    title: 'Ads and attribution',
    items: [
      'AppsFlyer, to see which ad each install came from',
      'Meta, Apple and Reddit ads, set up to report sign-ups and purchases',
    ],
  },
  {
    title: 'Behind the app',
    items: [
      'Database design and migrations in Postgres',
      'Background jobs and queues',
      'End-to-end tests in Playwright, unit tests in Vitest',
    ],
  },
]
</script>

<template>
  <div id="unseen" class="mt-14 rounded-[28px] bg-secondary-light px-6 sm:px-10 lg:px-14 py-10 lg:py-14 scroll-mt-6">
    <div class="grid lg:grid-cols-12 gap-x-10 gap-y-4 items-end">
      <h3 class="lg:col-span-6 text-balance font-brand text-3xl sm:text-[2.2rem] font-bold tracking-[-0.02em] leading-[1.05]">The parts that never make the screenshots</h3>
      <p class="lg:col-span-6 max-w-[34rem] leading-relaxed text-primary-light">A web app is live when I deploy it. A mobile app is live when Apple and Google approve it, and getting that approval is a job of its own.</p>
    </div>

    <h4 class="mt-10 font-brand text-xl font-semibold tracking-tight">Getting through the app stores</h4>
    <ul class="mt-4 sm:columns-2 gap-x-12 text-[15px] leading-relaxed text-primary-light">
      <li v-for="rule in storeRules" :key="rule" class="mb-3.5 break-inside-avoid">{{ rule }}</li>
    </ul>

    <div class="mt-10 pt-8 border-t border-secondary-dark grid sm:grid-cols-3 gap-x-10 gap-y-8">
      <div v-for="group in groups" :key="group.title">
        <h4 class="font-brand text-xl font-semibold tracking-tight">{{ group.title }}</h4>
        <ul class="mt-4 space-y-2.5 text-[15px] leading-snug text-primary-light">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
