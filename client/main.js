import Vue from "vue";

import "../imports/ui/plugins";

import App from "../imports/ui/App.vue";
import router from "./routes";
import { store } from "../imports/ui/store/store";

Meteor.startup(() => {
  new Vue({
    el: "#app",
    store,
    router,
    ...App,
  });
});
