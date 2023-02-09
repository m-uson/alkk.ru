import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import Vue from "vue";
// import * as VueGoogleMaps from "vue2-google-maps";

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyCO-GLbknEfaDWa2Tm1fpkGIRDjAb90O7I",
//   },
//   installComponents: true,
// });

createApp(App).use(router).mount("#app");
