import Vue from "vue";
import Vuex from "vuex";
import clubs from "./clubs";
import sidebar from "./sidebar";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    clubs,
    sidebar,
  },
});
