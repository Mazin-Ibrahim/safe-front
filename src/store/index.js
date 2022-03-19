import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";
import settings from "./modules/settings";
import product from "./modules/product";
import category from "./modules/category";
import company from "./modules/company";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    user,
    settings,
    product,
    category,
    company,
  },
  strict: debug,
});
