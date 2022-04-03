import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/";

import "./assets/stylesheets/main.css";

createApp(App).use(store).mount("#app");
