import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFire from "vuefire";
import firebase from "firebase";

// var VueFire = require("vuefire")
// var firebase = require("firebase")

// explicit installation required in module environments

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFwsfC0bdRJIHC3ro2uo0lbgX_oIucLaE",
  authDomain: "kevinsawpoop.firebaseapp.com",
  databaseURL: "https://kevinsawpoop.firebaseio.com",
  projectId: "kevinsawpoop",
  storageBucket: "kevinsawpoop.appspot.com",
  messagingSenderId: "396104102260"
});
const db = firebaseApp.database();

Vue.use(VueFire);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  db,
  firebase: {
    // simple syntax, bind as an array by default
    anArray: db.ref("url/to/my/collection"),
    // can also bind to a query
    // anArray: db.ref("url/to/my/collection").limitToLast(25)
    // full syntax
    anObject: {
      source: db.ref("url/to/my/object"),
      // optionally bind as an object
      asObject: true
      // optionally provide the cancelCallback
      // cancelCallback: function () {},
      // this is called once the data has been retrieved from firebase
      // readyCallback: function () {}
    }
  },
  render: h => h(App)
}).$mount("#app");
