<template>
  <li class="py-6 px-6 bg-white text-center rounded-lg xl:px-10 xl:text-left">
    <div class="space-y-8 pt-4 xl:space-y-10">
      <div
        class="relative img cursor-pointer flex justify-center items-center mx-auto w-64 rounded-md h-64"
      >
        <div
          @click="showImgs"
          class="relative flex justify-center items-center h-full w-full opacity-90 hover:opacity-0 transition-all ease-linear"
        >
          <div
            class="overlay bg-primary rounded-md absolute top-0 left-0 w-full h-full"
          ></div>
          <font-awesome-icon
            :icon="['fal', 'fa-rectangle-code']"
            class="text-5xl z-10 text-white"
            aria-hidden="true"
          />
        </div>
      </div>
      <div class="space-y-2">
        <div class="space-y-1">
          <h3 class="text-2xl text-slate-600">{{ project.title }}</h3>
          <p class="text-md text-slate-600">
            {{ project.desc }}
          </p>
        </div>
        <div class="text-md">
          <p class="text-primary">
            {{ project.tech }}
          </p>
        </div>
        <div>
          <div class="flex items-center justify-center">
            <a :href="project.github">
              <font-awesome-icon
                :icon="['fab', 'fa-github-alt']"
                class="text-2xl mr-5 text-slate-600 hover:text-primary ease-linear transition-all cursor-pointer"
                aria-hidden="true"
              />
            </a>
          </div>
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
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Twitter",
  data() {
    return {
      visible: false,
      index: 0,
      imgs: "",
      project: {
        title: "Twitter Interface",
        desc: "Simple web interface for your Twitter feed using the Twitter API.",
        github: "https://github.com/brandonore/Twitter-Interface",
        siteUrl: "",
        tech: "JS - HTML - CSS - Pug",
      },
    };
  },
  methods: {
    showImgs() {
      this.imgs = [
        require("../assets/twitter/main.png"),
        require("../assets/twitter/setup.png"),
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
  background-image: url("../assets/twitter/main.png");
  background-position: center;
  background-size: cover;
}
.overlay {
  content: "";
}
</style>
