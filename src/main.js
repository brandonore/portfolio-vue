import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueEasyLightbox from "vue-easy-lightbox";
// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/pro-regular-svg-icons";
import { faLink } from "@fortawesome/pro-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithubAlt, faLink);

createApp(App)
  .use(router)
  .use(VueEasyLightbox)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
