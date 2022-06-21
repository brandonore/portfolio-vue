<template>
  <div class="relative">
    <div class="xl:mx-auto xl:container">
      <div class="px-4 lg:px-12 md:py-14 pt-8">
        <div class="flex flex-col-reverse lg:flex-row-reverse items-center">
          <div class="w-full mt-6 xl:mt-0">
            <img
              @click="showImgs"
              src="@/assets/marshmallow/trades.png"
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
            <h3
              class="md:text-3xl lg:text-4xl text-2xl font-bold lg:leading-9 text-slate-600 lg:pb-6 md:pb-4 pb-2"
            >
              Marshmallow
            </h3>
            <p class="prose text-md text-gray-600 pb-6">
              Trade manager & invoice generator built with Quasar. Keep track of
              client trades and details as well as generate invoices for clients
              based on commission.<br /><br />
              Includes email sign-up, authentication, database & cloud functions
              via firebase.
            </p>
            <h2 class="text-sm text-center text-primary pb-6">
              Vue - Quasar - Firebase - Vuex - Cloud Functions
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Marshmallow",
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
        require("../assets/marshmallow/trades.png"),
        require("../assets/marshmallow/dashboard.png"),
        require("../assets/marshmallow/client-view.png"),
        require("../assets/marshmallow/edit-details.png"),
        require("../assets/marshmallow/add-client.png"),
        require("../assets/marshmallow/invoice-view.png"),
        require("../assets/marshmallow/settings.png"),
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
  background-image: url("../assets/marshmallow/dashboard.png");
  background-position: center;
  background-size: cover;
}
.overlay {
  content: "";
}
</style>
