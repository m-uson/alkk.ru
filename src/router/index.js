import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import SiteCreating from "../views/SiteCreate.vue";
import SiteContext from "../views/SiteContext.vue";
import Contacts from "../views/Contacts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/site-creating",
    name: "SiteCreating",
    component: SiteCreating,
  },
  {
    path: "/context-ads",
    name: "SiteContext",
    component: SiteContext,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
