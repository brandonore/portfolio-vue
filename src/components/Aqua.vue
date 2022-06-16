<template>
  <div class="relative">
    <div class="xl:mx-auto xl:container">
      <div class="px-4 lg:px-12 md:pt-14 pt-8">
        <div class="flex flex-col-reverse lg:flex-row-reverse items-center">
          <div class="w-full mt-6 xl:mt-0">
            <img
              @click="showImgs"
              src="@/assets/aqua/greenhouse-view.png"
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
              Aqua PWA
            </h3>
            <p class="prose text-md text-gray-600 pb-6">
              Progressive web app built for Android using the Quasar framework.
              Inventory system for plants and greenhouses. Includes a barcode
              scanner for METRC tags using the device camera. Keep track of
              rooms, plants, light cycles, plant stages & daily tasks.<br /><br />
              Includes email sign-up, authentication & database via firebase.
            </p>
            <h2 class="text-sm text-primary pb-6">
              Vue - Quasar - Firebase - PWA - Camera - Geolocation
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aqua",
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
          title: "Room details mobile view",
          src: require("../assets/aqua/mobile-2.png"),
        },
        {
          title: "Rooms mobile view",
          src: require("../assets/aqua/mobile-1.png"),
        },
        {
          title: "Room details view",
          src: require("../assets/aqua/greenhouse-view.png"),
        },
        {
          title: "Rooms view",
          src: require("../assets/aqua/room-view.png"),
        },
        { title: "Add room", src: require("../assets/aqua/new-room.png") },
        {
          title: "Barcode scan with camera access",
          src: require("../assets/aqua/camera.png"),
        },
        {
          title: "New daily task",
          src: require("../assets/aqua/add-task.png"),
        },
        {
          title: "Empty state",
          src: require("../assets/aqua/empty-state.png"),
        },
        {
          title: "Login page",
          src: require("../assets/aqua/login.png"),
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
