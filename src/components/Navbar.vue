<template>
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
            <div class="hidden md:flex md:space-x-10">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="font-medium text-slate-500 hover:text-primary ease-linear transition-all"
                >{{ item.name }}</a
              >
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
              <div class="px-2 pt-2 pb-3">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-all ease-linear"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  name: "Navbar",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      navigation: [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Recent", href: "#" },
        { name: "Other", href: "#" },
        { name: "Contact", href: "#" },
      ],
    };
  },
};
</script>

<style></style>
