<template>
  <div class="">
    <Navbar />
    <div class="hero max-w-[96rem] flex justify-center mx-auto">
      <Hero />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto my-16">
      <About />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "../components/About.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    About,
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
.hero {
  /* border: 2px solid blue; */
  height: 100vh;
  position: relative;
}
</style>
