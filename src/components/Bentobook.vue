<template>
  <div class="relative">
    <div class="xl:mx-auto xl:container">
      <div class="px-4 lg:px-12 md:py-14 pt-8">
        <div class="flex flex-col-reverse lg:flex-row-reverse items-center">
          <div class="w-full mt-6 xl:mt-0">
            <img
              @click="showImgs"
              src="@/assets/bentobook/dashboard.png"
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
          <div class="lg:w-1/2 lg:pr-12">
            <h2 class="text-md leading-none text-primary pb-2">Featured</h2>
            <div class="text-slate-600 lg:pb-6 md:pb-4 pb-2 pt-2">
              <a href="https://bentobook.io/"
                ><img src="../assets/bentobook/logolight.png" width="250px"
              /></a>
            </div>
            <p class="prose text-md text-gray-600 pb-6">
              This has been my passion project for the last year. Bentobook is
              an all-in-one trading journal for forex, crypto and stocks. It
              features advanced dashboard analytics as well as trade history
              import. Explore more features by clicking the link below.<br /><br />
              This was completely built and designed by me, using Vue 3, Quasar
              & Tailwind on the front-end. Firebase 9 is used for the back-end.
              Takes advantage of Firebase firestore, storage, authentication,
              analytics and more.
            </p>
            <h2 class="text-sm text-center text-primary pb-6">
              Vue 3 - Quasar - Firebase - Pinia - ECharts - Cloud Functions -
              Vite
            </h2>
            <div class="flex items-center justify-center">
              <a href="https://bentobook.io/">
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
  name: "Bentobook",
  data() {
    return {
      visible: false,
      index: 0,
      imgs: "",
    };
  },
  methods: {
    showImgs() {
      this.imgs = [
        require("../assets/bentobook/dashboard.png"),
        require("../assets/bentobook/tradehistory.png"),
        require("../assets/bentobook/gallery.png"),
        require("../assets/bentobook/gallery2.png"),
        require("../assets/bentobook/import.png"),
        require("../assets/bentobook/backtester.png"),
        require("../assets/bentobook/backtestlib.png"),
        require("../assets/bentobook/tools.png"),
        require("../assets/bentobook/settings.png"),
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

<style scoped>
.img {
  background-image: url("../assets/bentobook/dashboard.png");
  background-position: center;
  background-size: cover;
}
.overlay {
  content: "";
}
</style>
