<template>
  <div class="relative">
    <div class="xl:mx-auto xl:container">
      <div class="px-4 lg:px-12 md:py-14 pt-8">
        <div class="flex flex-col-reverse lg:flex-row items-center">
          <div class="w-full mt-6 xl:mt-0">
            <img
              @click="showImgs"
              src="@/assets/chibits/staking-dashboard.png"
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
            <h2 class="text-md leading-none text-primary pb-2">Featured</h2>
            <h3
              class="md:text-3xl lg:text-4xl text-2xl font-bold lg:leading-9 text-slate-600 lg:pb-6 md:pb-4 pb-2"
            >
              Chibits NFT Dapp
            </h3>
            <p class="prose text-md text-gray-600 pb-6">
              Fully featured NFT Dapp with minting, staking dashboard &
              marketplace. NFTs are fully stake-able and earn rewards in the
              form of ERC20 tokens while staked. Includes staking bonuses.
              Rewards are spendable in the marketplace.<br /><br />
              Also includes an admin dashboard for adding & removing items from
              the marketplace. Email authentication and storage are through
              Supabase.
            </p>
            <h2 class="text-sm text-center text-primary pb-6">
              Vue - Web3 - Solidity - Supabase - Tailwind - File Upload
            </h2>
            <div class="flex items-center justify-center">
              <a href="https://github.com/brandonore/chibits">
                <font-awesome-icon
                  :icon="['fab', 'fa-github-alt']"
                  class="text-2xl mr-5 text-slate-600 hover:text-primary ease-linear transition-all cursor-pointer"
                  aria-hidden="true"
                />
              </a>
              <a href="https://quiet-bubblegum-aace40.netlify.app/">
                <font-awesome-icon
                  :icon="['fas', 'fa-link']"
                  class="text-2xl text-slate-600 hover:text-primary ease-linear transition-all cursor-pointer"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chibits",
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
          src: require("../assets/chibits/staking-dashboard.png"),
        },
        {
          title: "Staking dashboard dark mode",
          src: require("../assets/chibits/staking-dashboard-dark.png"),
        },
        {
          title: "Wallet disconnect",
          src: require("../assets/chibits/staking-disconnect.png"),
        },
        {
          title: "Unstaked NFTs",
          src: require("../assets/chibits/unstaked.png"),
        },
        {
          title: "Marketplace",
          src: require("../assets/chibits/marketplace.png"),
        },
        {
          title: "Marketplace dark mode",
          src: require("../assets/chibits/dark-mode.png"),
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

<style></style>
