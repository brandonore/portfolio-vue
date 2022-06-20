<template>
  <div class="">
    <div class="nav-container absolute w-full z-10">
      <div class="relative py-6">
        <Popover>
          <div class="max-w-[96rem] flex px-4 sm:px-6 mx-auto">
            <nav
              class="relative w-full flex items-center justify-between sm:h-10"
              aria-label="Global"
            >
              <div
                class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton
                      class="bg-slate-50 rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-100 transition-all ease-linear"
                    >
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="text-left logo-container">
                <img class="w-12 logo" src="@/assets/logo.png" alt="" />
              </div>
              <div class="hidden md:flex md:items-center md:space-x-10">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  v-scroll-to="{
                    el: item.href,
                    duration: item.duration,
                  }"
                  :href="item.href"
                  class="cursor-pointer font-medium text-slate-500 hover:text-primary ease-linear transition-all"
                  >{{ item.name }}</a
                >
                <a
                  href="./resume.pdf"
                  target="_blank"
                  class="px-8 py-2 border-2 border-primary hover:border-transparent text-base font-medium rounded-md text-primary hover:text-white hover:bg-primary transition-all ease-linear"
                >
                  Resume
                </a>
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div
                class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div class="-mr-2">
                    <PopoverButton
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-100 ease-linear transition-all"
                    >
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-6">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    v-scroll-to="{
                      el: item.href,
                      duration: item.duration,
                    }"
                    :href="item.href"
                    class="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-all ease-linear"
                    >{{ item.name }}</a
                  >
                  <a
                    href="./resume.pdf"
                    target="_blank"
                    class="block px-3 py-2 hover:border-transparent text-base font-medium rounded-md text-primary transition-all ease-linear"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>
    </div>
    <button
      v-show="scY > 300"
      v-scroll-to="{
        el: '#home',
        duration: 400,
      }"
      type="button"
      class="scroll-top-btn z-20 fixed right-5 rounded-md bottom-6 inline-flex items-center p-3 transition-all ease-linear text-white bg-primary hover:opacity-75"
    >
      <font-awesome-icon
        :icon="['fas', 'fa-chevron-up']"
        class="text-2xl text-white"
        aria-hidden="true"
      />
    </button>
    <div id="home" class="svg-bg w-full">
      <div class="hero max-w-[96rem] flex justify-center mx-auto">
        <Hero />
      </div>
    </div>
    <div
      id="about"
      class="max-w-[96rem] flex justify-center mx-auto mt-24 md:mt-20"
    >
      <About />
    </div>
    <div id="recent" class="max-w-[96rem] flex justify-center mx-auto mt-20">
      <Recent />
    </div>
    <div id="other" class="max-w-[96rem] flex justify-center mx-auto mt-20">
      <Other />
    </div>
    <div id="contact" class="max-w-[96rem] flex justify-center mx-auto mt-10">
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
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import Hero from "@/components/Hero";
import About from "../components/About.vue";
import Recent from "../components/Recent.vue";
import Other from "../components/Other.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    About,
    Recent,
    Other,
    Contact,
    Footer,
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      navigation: [
        { name: "Home", href: "#home", duration: 50 },
        { name: "About", href: "#about", duration: 300 },
        { name: "Recent", href: "#recent", duration: 400 },
        { name: "Other", href: "#other", duration: 1000 },
        { name: "Contact", href: "#contact", duration: 1600 },
      ],
      scTimer: 0,
      scY: 0,
    };
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
html {
  /* scroll-behavior: smooth; */
}
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
