<!-- BCP Flow: a pale tint of its slate for the room, with its orange kept for the button -->
<template>
  <article id="bcpflow" class="rounded-[28px] bg-bcp-mist text-bcp-slate overflow-hidden scroll-mt-6">
    <div class="grid lg:grid-cols-12 gap-x-8 lg:gap-x-14 px-6 sm:px-10 lg:pl-14 lg:pr-0">
      <div class="lg:col-span-5 py-10 lg:py-14">
        <div class="flex items-center gap-4">
          <span class="app-icon w-14 h-14"><img src="/work/bcpflow/icon.svg" alt="" class="object-cover"></span>
          <h3 class="font-brand text-[2.1rem] font-bold tracking-[-0.02em]">BCP Flow</h3>
        </div>
        <p class="mt-6 text-xl leading-snug font-medium text-balance">A continuity plan the IT provider and the client write together.</p>
        <p class="mt-3 leading-relaxed text-bcp-slate/80">The provider answers the technical sections, the client fills in the rest through an emailed link, and the finished plan exports to PDF or Word. React on Supabase, with row-level security in Postgres, edge functions for email, and billing through Lemon Squeezy.</p>
        <dl class="mt-7 grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px]">
          <dt class="text-bcp-slate/70">Role</dt><dd>Design, engineering and release</dd>
          <dt class="text-bcp-slate/70">Platform</dt><dd>Web, for teams</dd>
          <dt class="text-bcp-slate/70">Stack</dt><dd>React, TypeScript, Supabase, Postgres, Tailwind</dd>
          <dt class="text-bcp-slate/70">Status</dt><dd class="flex items-center gap-2.5"><span class="live-dot"></span>Live</dd>
        </dl>
        <div class="mt-8 flex flex-wrap gap-2.5 text-[15px] font-medium">
          <a href="https://bcpflow.com" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-bcp-orange text-white hover:bg-bcp-orange-dark">bcpflow.com</a>
        </div>
      </div>
      <div class="lg:col-span-7 relative h-[250px] sm:h-[380px] lg:h-auto" aria-hidden="true">
        <img src="/work/bcpflow/wizard.webp" alt="" loading="lazy" decoding="async" class="absolute left-0 top-0 lg:top-14 w-[180%] sm:w-[125%] lg:w-[150%] max-w-none rounded-tl-xl border-[6px] border-r-0 border-b-0 border-bcp-slate">
        <!-- The plan page laid over the questionnaire: the orange bar is how far the client has got -->
        <img src="/work/bcpflow/plan.webp" alt="" width="1264" height="430" loading="lazy" decoding="async" class="absolute left-[5%] lg:-left-9 bottom-7 lg:bottom-12 w-[86%] sm:w-[68%] lg:w-[74%] h-auto rounded-xl border border-white/15 shadow-[0_24px_60px_rgba(16,20,29,0.55)]">
      </div>
    </div>
  </article>
</template>
