<!-- CertMatrix: its ink as the room, with the light theme on show so the screenshot stands off it -->
<template>
  <article id="certmatrix" class="rounded-[28px] bg-certmatrix-ink text-certmatrix-wall overflow-hidden scroll-mt-6">
    <div class="grid lg:grid-cols-12 gap-x-8 gap-y-8 px-6 sm:px-10 lg:px-14 pt-10 lg:pt-14 pb-10">
      <div class="lg:col-span-7">
        <div class="flex items-center gap-4">
          <span class="app-icon w-14 h-14 ring-1 ring-white/20"><img src="/work/certmatrix/icon.png" alt="" class="object-cover"></span>
          <h3 class="font-brand text-[2.1rem] font-bold tracking-[-0.02em]">CertMatrix</h3>
        </div>
        <p class="mt-6 text-xl leading-snug font-medium">Know who is certified today, not who was last spring.</p>
        <p class="mt-3 max-w-[36rem] leading-relaxed text-certmatrix-wall/75">Certification tracking for small crews: every person and every card on one grid, a reminder before anything runs out, and audit exports on demand. A React app, a Fastify API on Postgres, an Astro marketing site and Playwright tests across all of it.</p>
        <div class="mt-7 flex flex-wrap gap-2.5 text-[15px] font-medium">
          <a href="https://certmatrix.io" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-certmatrix-acc text-white hover:bg-certmatrix-acc-dark">certmatrix.io</a>
        </div>
      </div>
      <dl class="lg:col-span-5 lg:pt-[4.6rem] grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px] content-start">
        <dt class="text-certmatrix-wall/60">Role</dt><dd>Design, engineering and release</dd>
        <dt class="text-certmatrix-wall/60">Platform</dt><dd>Web, for teams</dd>
        <dt class="text-certmatrix-wall/60">Stack</dt><dd>React, TanStack Router, Fastify, Drizzle, Postgres, Astro</dd>
        <dt class="text-certmatrix-wall/60">Status</dt><dd class="flex items-center gap-2.5"><span class="live-dot"></span>Live</dd>
      </dl>
    </div>
    <div class="mx-6 sm:mx-10 lg:mx-14 overflow-hidden rounded-t-xl border-[6px] border-b-0 border-certmatrix-paper bg-certmatrix-paper">
      <img src="/work/certmatrix/matrix.webp" alt="The CertMatrix grid: employees down the side, required certifications across the top, each cell showing an expiry date" loading="lazy" decoding="async" class="block w-[210%] max-w-none sm:w-full aspect-[16/8] object-cover object-left-top">
    </div>
  </article>
</template>
