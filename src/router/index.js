import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import Login from "@/views/auth/login";
import Register from "@/views/auth/register";
import App from "@/views/layouts/App";
import Home from "@/views/home";
import Products from "@/views/product/products";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "app",
      component: App,
      beforeEnter: ifAuthenticated,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },

        {
          path: "/products",
          name: "products",
          component: Products,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter: ifNotAuthenticated,
    },
  ],
});
