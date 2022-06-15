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
        </div>
      </div>
      <div class="relative">
        <div class="xl:mx-auto xl:container">
          <div class="px-4 lg:px-12 md:py-12 py-8">
            <div class="flex flex-col-reverse lg:flex-row items-center">
              <div class="w-full mt-6 xl:mt-0">
                <img
                  @click="showImgs"
                  src="@/assets/chibits/staking-dashboard-lg.png"
                  alt="dashboard"
                  class="cursor-pointer xl:h-3/4 object-cover object-center w-full"
                />
                <vue-easy-lightbox
                  scrollDisabled
                  escDisabled
                  moveDisabled
                  :visible="visible"
                  :imgs="imgs"
                  :index="index"
                  @hide="hide"
                ></vue-easy-lightbox>
              </div>
              <div class="lg:w-1/2 lg:pl-12">
                <h2 class="text-md leading-none text-teal-400 pb-2">
                  Featured
                </h2>
                <h3
                  class="md:text-3xl lg:text-4xl text-2xl font-bold lg:leading-9 text-slate-600 lg:pb-6 md:pb-4 pb-2"
                >
                  Chibits NFT Dapp
                </h3>
                <p class="prose text-md text-gray-600 pb-6">
                  Fully featured NFT Dapp with minting, staking dashboard &
                  marketplace. NFT's are fully stakeable and earn rewards while
                  staked. Includes staking bonuses. Rewards are spendable in the
                  marketplace.<br /><br />
                  Also includes an admin dashboard for adding & removing items
                  from the marketplace. Email authentication and storage are
                  through Supabase.
                </p>
                <h2 class="text-sm text-teal-400 pb-6">
                  Vue - Web3 - Solidity - Supabase - Tailwind
                </h2>
                <div class="md:block flex items-center justify-center">
                  <a href="https://google.com">
                    <font-awesome-icon
                      :icon="['fab', 'fa-github-alt']"
                      class="text-2xl mr-5 text-slate-600 hover:text-teal-400 ease-linear transition-all cursor-pointer"
                      aria-hidden="true"
                    />
                  </a>
                  <a href="">
                    <font-awesome-icon
                      :icon="['fas', 'fa-link']"
                      class="text-2xl text-slate-600 hover:text-teal-400 ease-linear transition-all cursor-pointer"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recent",
  data() {
    return {
      imgs: "",
      visible: false,
      index: 0,
    };
  },
  methods: {
    showImgs() {
      this.imgs = [
        {
          title: "Staking dashboard",
          src: require("../assets/chibits/staking-dashboard-lg.png"),
        },
        {
          title: "Wallet disconnect",
          src: require("../assets/chibits/staking-disconnect.png"),
        },
        {
          title: "Marketplace",
          src: require("../assets/chibits/marketplace.png"),
        },
        { title: "Mint page", src: require("../assets/chibits/mint-page.png") },
        {
          title: "Admin login",
          src: require("../assets/chibits/admin-login.png"),
        },
        {
          title: "Admin dashboard",
          src: require("../assets/chibits/admin.png"),
        },
        {
          title: "Add new marketplace item",
          src: require("../assets/chibits/add-item.png"),
        },
        { title: "Dark mode", src: require("../assets/chibits/dark-mode.png") },
      ];

      this.show();
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
  },
};
</script>

<style>
.hero {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
}
</style>
