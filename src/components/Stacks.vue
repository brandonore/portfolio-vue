<template>
  <div class="relative">
    <div class="xl:mx-auto xl:container">
      <div class="px-4 lg:px-12 md:py-14 py-8">
        <div class="flex flex-col-reverse lg:flex-row-reverse items-center">
          <div class="w-full mt-6 xl:mt-0">
            <img
              @click="showImgs"
              src="@/assets/stacks/packaging.png"
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
              Stacks
            </h3>
            <p class="prose text-md text-left text-gray-600 pb-6">
              CRUD style inventory management system for concentrate companies.
              Easily keep track of shops, trim on hand, current runs & packaging
              status. Includes many fields for weight, METRC tags, dates,
              etc..<br /><br />
              Email sign-up & authentication, database, & hosting all via google
              firebase.
            </p>
            <h2 class="text-sm text-primary pb-6">
              Vue - Vuex - Firebase - Vuetify - Responsive
            </h2>
            <div class="flex items-center justify-center">
              <a href="https://google.com">
                <font-awesome-icon
                  :icon="['fab', 'fa-github-alt']"
                  class="text-2xl mr-5 text-slate-600 hover:text-primary ease-linear transition-all cursor-pointer"
                  aria-hidden="true"
                />
              </a>
              <a href="http://stacks.to">
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
  name: "Stacks",
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
          title: "Packaging view",
          src: require("../assets/stacks/packaging.png"),
        },
        {
          title: "Trim view",
          src: require("../assets/stacks/trim.png"),
        },
        {
          title: "Extraction view",
          src: require("../assets/stacks/extraction.png"),
        },
        { title: "Shops view", src: require("../assets/stacks/shops.png") },
        {
          title: "Login Page",
          src: require("../assets/stacks/login.png"),
        },
        {
          title: "Home dashboard",
          src: require("../assets/stacks/dashboard.png"),
        },
        {
          title: "Add new trim item",
          src: require("../assets/stacks/add-trim.png"),
        },
        { title: "Add new run", src: require("../assets/stacks/add-run.png") },
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
