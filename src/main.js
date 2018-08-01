import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFire from "vuefire";
// import Firebase from "firebase";
import db from "./db";

console.log(db.ref("test/"));

Vue.use(VueFire);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  firebase: {
    testValue: {
      source: db.ref("data/cheese"),
      asObject: true
    }
  },
  render: h => h(App)
}).$mount("#app");
