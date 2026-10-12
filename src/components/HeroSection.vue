<script setup>
// Oldest first, so the row reads left to right as a path that ends at now.
// Each year is when that stretch began. The products came well after 2019, and the note says so.
const path = [
  {
    year: '2019',
    name: 'Independent',
    role: 'Client apps, then my own products',
    note: 'I started with client work. My own products came later: seven so far, published under the name Pomkatsu.',
    mark: 'products',
    href: '#products',
  },
  {
    year: '2024',
    name: 'The Futures Desk',
    role: 'Founding engineer',
    note: 'One of two engineers. Launched in November 2024 and acquired by Topstep.',
    mark: 'logo',
    href: '#tfd',
  },
  {
    year: '2026',
    name: 'Topstep',
    role: 'Software engineer',
    note: 'Joined through the acquisition of The Futures Desk in April 2026. This is where I work now.',
    now: true,
  },
]

// The seven products, in the order they appear further down
const products = [
  { name: 'MySeedStory', icon: '/work/myseedstory/icon.webp' },
  { name: 'CertMatrix', icon: '/work/certmatrix/icon.png' },
  { name: 'EasyTranslate AI', icon: '/work/easytranslate/icon.webp' },
  { name: 'BCP Flow', icon: '/work/bcpflow/icon.svg' },
  { name: 'BentoBook', icon: '/work/bentobook/icon.webp', padded: true },
  { name: 'Destina', icon: '/work/destina/icon.webp' },
  { name: 'FoodTally', icon: '/work/foodtally/icon.webp' },
]
</script>

<template>
  <!-- The claim on the left, the plain account of it on the right, then the three jobs as a path through time -->
  <section class="mx-auto max-w-[1360px] px-5 sm:px-8">
    <div class="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end pt-8 sm:pt-14 pb-12 sm:pb-16">
      <h1 class="lg:col-span-7 text-balance font-brand font-bold tracking-[-0.02em] leading-[1] text-[clamp(2.25rem,5.6vw,4.6rem)]">Software engineer who designs and builds the whole product.</h1>
      <div class="lg:col-span-5 lg:pb-2">
        <p class="max-w-[33rem] text-lg leading-relaxed text-primary-light">I'm a software engineer at Topstep. I joined when Topstep acquired The Futures Desk, a trading platform I built with one other engineer. On my own I have designed and shipped seven more products for iOS, Android and the web.</p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a href="#work" class="px-6 py-3 rounded-full bg-primary text-secondary font-semibold hover:bg-primary-dark">See the work</a>
        </div>
      </div>
    </div>

    <h2 class="sr-only">Experience</h2>
    <ol class="grid md:grid-cols-3 gap-y-10 pt-2">
      <li v-for="stop in path" :key="stop.name" class="relative pt-10" :class="stop.now ? '' : 'md:pr-10'">
        <!-- The line to the next stop. After the last one it fades out, because that one is still running. -->
        <span class="absolute left-0 right-0 top-[7px] h-0.5" :class="stop.now ? 'bg-gradient-to-r from-secondary-dark to-transparent' : 'bg-secondary-dark'" aria-hidden="true"></span>
        <span class="absolute left-0 top-0 w-4 h-4 rounded-full" :class="stop.now ? 'bg-live ring-4 ring-live/25' : 'bg-secondary border-[3px] border-primary'" aria-hidden="true"></span>

        <component :is="stop.href ? 'a' : 'div'" :href="stop.href" class="group block">
          <p class="font-brand text-[2.6rem] font-bold tracking-[-0.03em] leading-none">{{ stop.year }}</p>
          <h3 class="mt-5 font-brand text-2xl font-bold tracking-tight leading-none" :class="stop.href ? 'group-hover:underline underline-offset-4 decoration-2' : ''">{{ stop.name }}</h3>
          <p class="mt-2 font-medium leading-snug">{{ stop.role }}</p>
          <p class="mt-1 text-[15px] leading-relaxed text-primary-light">{{ stop.note }}</p>
          <span v-if="stop.mark === 'products'" class="mt-5 grid grid-cols-7 gap-1.5 max-w-[14.5rem]">
            <span
              v-for="product in products"
              :key="product.name"
              class="app-icon aspect-square"
              :class="product.padded ? 'bg-secondary-light p-0.5' : ''"
            ><img :src="product.icon" alt="" :class="product.padded ? 'object-contain' : 'object-cover'"></span>
          </span>
          <span v-else-if="stop.mark === 'logo'" class="mt-5 flex"><span class="app-icon w-7 h-7 bg-black p-1"><img src="/work/futures-desk/logo.webp" alt="" width="132" height="132" class="object-contain"></span></span>
        </component>
      </li>
    </ol>
  </section>
</template>
