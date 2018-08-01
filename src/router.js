import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PoopRegistration from "./views/PoopRegistration.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/poop",
      name: "PoopRegistration",
      component: PoopRegistration
    }
  ]
});
