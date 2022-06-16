import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueEasyLightbox from "vue-easy-lightbox";
// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faImage, faFileCode } from "@fortawesome/pro-regular-svg-icons";
import { faRectangleCode } from "@fortawesome/pro-light-svg-icons";
import { faLink } from "@fortawesome/pro-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import moshaToast from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

library.add(faGithubAlt, faLink, faImage, faFileCode, faRectangleCode);

createApp(App)
  .use(router)
  .use(VueEasyLightbox)
  .use(moshaToast)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
