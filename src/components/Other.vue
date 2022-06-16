<template>
  <div
    class="px-4 w-full sm:px-6 lg:px-8 overflow-hidden pt-8 pb-20 mt-8 lg:my-8 bg-slate-50"
  >
    <div class="w-full mx-auto">
      <div class="relative z-10 mb-8 md:mb-2 md:px-6">
        <div class="text-center lg:max-w-none">
          <h2
            class="leading-6 text-primary font-semibold tracking-wide uppercase"
          >
            Other
          </h2>

          <h1
            class="mt-2 text-3xl leading-8 uppercase tracking-tight text-slate-600 sm:text-4xl"
          >
            Other projects
          </h1>
          <p class="text-xl text-slate-500">
            Here are some personal projects that I've bulit in the past.
          </p>
        </div>
      </div>
      <div class="pt-12">
        <div class="mx-auto px-4 max-w-7xl">
          <div class="space-y-12">
            <ul
              role="list"
              class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
            >
              <Aurora />
              <Expensify />
              <Samuraii />
              <Twitter />
              <Chii />
              <Scraper />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aurora from "./Aurora.vue";
import Expensify from "./Expensify.vue";
import Samuraii from "./Samuraii.vue";
import Twitter from "./Twitter.vue";
import Chii from "./Chii.vue";
import Scraper from "./Scraper.vue";
export default {
  name: "Other",
  components: { Aurora, Expensify, Samuraii, Twitter, Chii, Scraper },
  data() {
    return {};
  },
};
</script>

<style></style>
