<template>
  <div class="">
    <Navbar />
    <div class="hero max-w-[96rem] flex justify-center mx-auto">
      <Hero />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto mt-8">
      <About />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto mt-20">
      <Recent />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto mt-20">
      <Other />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto mt-20 mb-10">
      <Contact />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "../components/About.vue";
import Navbar from "../components/Navbar.vue";
import Recent from "../components/Recent.vue";
import Other from "../components/Other.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    About,
    Navbar,
    Recent,
    Other,
    Contact,
  },
  data() {
    return {};
  },
};
</script>

<style>
.hero {
  position: relative;
}

@media screen and (min-width: 1024px) {
  .hero {
    height: 100vh;
  }
}
</style>
