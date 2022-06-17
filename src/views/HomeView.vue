<template>
  <div class="">
    <Navbar />
    <div class="svg-bg w-full">
      <div class="hero max-w-[96rem] flex justify-center mx-auto">
        <Hero />
      </div>
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto mt-24 md:mt-20">
      <About />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto mt-20">
      <Recent />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto mt-20">
      <Other />
    </div>
    <div class="max-w-[96rem] flex justify-center mx-auto mt-10">
      <Contact />
    </div>
    <div class="bg-slate-50">
      <div class="max-w-[96rem] flex justify-center mx-auto">
        <Footer />
      </div>
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
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    About,
    Navbar,
    Recent,
    Other,
    Contact,
    Footer,
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
.svg-bg {
  background-size: cover;
  background-image: url("../assets/lines.svg");
  background-repeat: no-repeat;
}
@media screen and (min-width: 1024px) {
  .hero {
    height: 100vh;
  }
}
</style>
