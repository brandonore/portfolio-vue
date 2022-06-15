<template>
  <div class="">
    <Navbar />
    <div class="hero max-w-[96rem] flex justify-center mx-auto">
      <Hero />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto my-16">
      <About />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto my-16">
      <Recent />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "../components/About.vue";
import Navbar from "../components/Navbar.vue";
import Recent from "../components/Recent.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    About,
    Navbar,
    Recent,
  },
  data() {
    return {};
  },
};
</script>

<style>
.hero {
  /* border: 2px solid blue; */
  /* height: 100vh; */
  position: relative;
}

@media screen and (min-width: 1024px) {
  .hero {
    height: 100vh;
  }
}
</style>
