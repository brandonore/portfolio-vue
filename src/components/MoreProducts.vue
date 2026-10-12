<script setup>
// The products without a room of their own
const more = [
  {
    name: 'BentoBook',
    icon: '/work/bentobook/icon.webp',
    padded: true,
    href: 'https://bentobook.io',
    blurb: 'A trading journal with trade import, analytics and a backtester.',
    stack: 'Vue, Quasar, Firebase',
    live: true,
  },
  {
    name: 'Destina',
    icon: '/work/destina/icon.webp',
    href: 'https://destina.love',
    blurb: 'AI soulmate portraits, personality insights and love compatibility.',
    stack: 'Flutter, Firebase, RevenueCat',
    live: false,
  },
  {
    name: 'FoodTally',
    icon: '/work/foodtally/icon.webp',
    href: 'https://pomkatsu.com/apps/foodtally',
    blurb: 'Calorie tracking by voice, text or photo.',
    stack: 'Expo, Supabase, RevenueCat',
    live: false,
  },
]
</script>

<template>
  <div>
    <h3 class="mt-14 font-brand text-2xl font-bold tracking-tight">Three more</h3>
    <ul class="mt-5 border-t border-secondary-dark">
      <li v-for="app in more" :key="app.name" class="border-b border-secondary-dark">
        <a
          :href="app.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(0,1.5fr)_minmax(0,1fr)_8.5rem] gap-x-5 gap-y-1 items-center py-5"
        >
          <span class="app-icon w-12 h-12 row-span-2 md:row-span-1" :class="app.padded ? 'bg-secondary-light p-1.5' : ''"><img :src="app.icon" alt="" :class="app.padded ? 'object-contain' : 'object-cover'" /></span>
          <span>
            <span class="block font-brand text-xl font-semibold tracking-tight group-hover:underline underline-offset-4">{{ app.name }}</span>
            <span class="block text-[15px] text-primary-light">{{ app.blurb }}</span>
          </span>
          <span class="col-start-2 md:col-start-auto text-[15px] text-primary-light">{{ app.stack }}</span>
          <span v-if="app.live" class="col-start-2 md:col-start-auto flex items-center gap-2.5 text-[15px]"><span class="live-dot"></span>Live</span>
          <span v-else class="col-start-2 md:col-start-auto flex items-center gap-2.5 text-[15px] text-primary-light"><span class="w-2.5 h-2.5 rounded-full border-2 border-primary-light"></span>In development</span>
        </a>
      </li>
    </ul>
  </div>
</template>
