<!-- The Futures Desk: the product built with a team, and the one that was acquired -->
<template>
  <article id="tfd" class="rounded-[28px] bg-tfd-night text-white overflow-hidden scroll-mt-6">
    <div class="grid lg:grid-cols-12 gap-x-8 gap-y-8 px-6 sm:px-10 lg:px-14 pt-10 lg:pt-14">
      <div class="lg:col-span-7">
        <div class="flex items-center gap-4">
          <span class="app-icon w-14 h-14 grid place-items-center bg-black font-brand text-[15px] font-bold tracking-tight text-tfd-gold" aria-hidden="true">TFD</span>
          <h3 class="font-brand text-[2.1rem] font-bold tracking-[-0.02em] text-tfd-gold">The Futures Desk</h3>
        </div>
        <p class="mt-6 text-xl leading-snug font-medium text-balance">A futures trading firm, and the platform its traders work in.</p>
        <p class="mt-3 max-w-[36rem] leading-relaxed text-white/75">Traders pass an evaluation, then trade the firm's capital. I did most of the design and the frontend: the trader dashboard, the trade journal and daily planner, the reports, the coaching tools and the sign-up flow. After launch I owned my features end to end, from the schema and the API to the production release.</p>
        <div class="mt-7 flex flex-wrap gap-2.5 text-[15px] font-medium">
          <a href="https://www.thefuturesdesk.com" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-tfd-gold text-black hover:bg-tfd-gold-dark">thefuturesdesk.com</a>
          <a href="https://www.financemagnates.com/forex/topstep-acquires-the-futures-desk-adds-coaching-tools-for-futures-traders/" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full border border-white/35 hover:bg-white/10">Read about the acquisition</a>
        </div>
      </div>
      <dl class="lg:col-span-5 lg:pt-[4.6rem] grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px] content-start">
        <dt class="text-white/60">Role</dt><dd>Founding engineer, one of two</dd>
        <dt class="text-white/60">Scope</dt><dd>Design, frontend and full-stack features</dd>
        <dt class="text-white/60">Team</dt><dd>Five people, two of us engineers</dd>
        <dt class="text-white/60">Stack</dt><dd>Next.js, React, TypeScript, tRPC, Node, Postgres, BullMQ</dd>
        <dt class="text-white/60">Outcome</dt><dd>Acquired by Topstep</dd>
      </dl>
    </div>

    <!-- Three dates, spaced by how long each stretch took: four months to launch, then live until the sale -->
    <ol class="mt-12 px-6 sm:px-10 lg:px-14 grid gap-y-7 sm:grid-cols-[minmax(10rem,4fr)_17fr_auto]">
      <li class="relative pl-8 sm:pl-0 sm:pt-8 sm:pr-6">
        <span class="absolute left-[5px] top-3 -bottom-8 w-0.5 sm:left-0 sm:right-0 sm:top-[5px] sm:bottom-auto sm:w-auto sm:h-0.5 bg-tfd-gold/40" aria-hidden="true"></span>
        <span class="absolute left-0 top-1.5 sm:top-0 w-3 h-3 rounded-full bg-tfd-night border-2 border-tfd-gold" aria-hidden="true"></span>
        <span class="block font-brand text-xl font-semibold leading-tight">July 2024</span>
        <span class="block mt-1 text-[15px] text-white/65">Started building</span>
      </li>
      <li class="relative pl-8 sm:pl-0 sm:pt-8 sm:pr-6">
        <span class="absolute left-[5px] top-3 -bottom-8 w-0.5 sm:left-0 sm:right-0 sm:top-[5px] sm:bottom-auto sm:w-auto sm:h-0.5 bg-gradient-to-b sm:bg-gradient-to-r from-tfd-gold/40 to-tfd-gold" aria-hidden="true"></span>
        <span class="absolute left-0 top-1.5 sm:top-0 w-3 h-3 rounded-full bg-tfd-night border-2 border-tfd-gold" aria-hidden="true"></span>
        <span class="block font-brand text-xl font-semibold leading-tight">November 2024</span>
        <span class="block mt-1 text-[15px] text-white/65">Launched to traders</span>
      </li>
      <li class="relative pl-8 sm:pl-0 sm:pt-8">
        <span class="absolute left-0 top-1.5 sm:top-0 w-3 h-3 rounded-full bg-tfd-gold ring-4 ring-tfd-gold/25" aria-hidden="true"></span>
        <span class="block font-brand text-xl font-semibold leading-tight text-tfd-gold">April 2026</span>
        <span class="block mt-1 text-[15px] text-white/85">Acquired by Topstep</span>
      </li>
    </ol>

    <!-- Three screens I built, layered: the reports in a browser window, one trade opened, and the yearly recap -->
    <div class="relative mt-14 mx-6 sm:mx-10 lg:mx-14 aspect-[4/3.5] sm:aspect-[16/9]">
      <div class="absolute -inset-x-6 sm:-inset-x-14 -top-14 h-80 bg-[radial-gradient(48%_58%_at_60%_45%,rgba(204,186,131,0.17),transparent)]" aria-hidden="true"></div>
      <div class="absolute left-0 sm:left-[5%] top-0 w-[185%] sm:w-[84%] overflow-hidden rounded-xl border border-white/15 bg-tfd-bezel shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
        <div class="flex items-center gap-1.5 h-8 sm:h-9 px-3.5" aria-hidden="true">
          <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
          <span class="ml-3 px-3 py-0.5 rounded-full bg-black/40 text-[11px] sm:text-xs text-white/60">members.thefuturesdesk.com</span>
        </div>
        <img src="/work/futures-desk/reports.webp" alt="The reports screen of The Futures Desk: cumulative profit and loss, win rate, streaks, drawdown and a score for the trader" width="2000" height="1372" loading="lazy" decoding="async" class="block w-full h-auto">
      </div>
      <img src="/work/futures-desk/trade.webp" alt="One trade opened up: entries, exits, fees and the price chart with each fill marked" width="888" height="1400" loading="lazy" decoding="async" class="absolute right-0 top-[22%] sm:top-[24%] w-[56%] sm:w-[31%] h-auto rounded-xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
      <img src="/work/futures-desk/recap.webp" alt="A year-in-review card for a trader" width="1108" height="1286" loading="lazy" decoding="async" class="hidden sm:block absolute left-0 -bottom-[10%] w-[23%] h-auto rounded-xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
    </div>
  </article>
</template>
