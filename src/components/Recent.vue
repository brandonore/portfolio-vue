<template>
  <div class="px-4 lg:px-12 overflow-hidden lg:my-8">
    <div class="w-full mx-auto">
      <div class="relative z-10 mb-8 md:mb-2">
        <div class="text-left lg:max-w-none">
          <h2
            class="leading-6 text-primary font-semibold tracking-wide uppercase"
          >
            Recent
          </h2>

          <h1
            class="mt-2 text-3xl leading-8 font-extrabold uppercase tracking-tight text-slate-600 sm:text-4xl"
          >
            Recent Projects
          </h1>
          <Chibits />
          <Stacks />
          <Aqua />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chibits from "./Chibits.vue";
import Stacks from "./Stacks.vue";
import Aqua from "./Aqua.vue";
export default {
  name: "Recent",
  data() {
    return {};
  },
  components: { Chibits, Stacks, Aqua },
};
</script>

<style>
.hero {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
}
</style>
