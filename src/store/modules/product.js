import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from "@/store/actions/product";

import { apiCall, api_routes } from "@/utils/api";

import router from "./../../router";

const state = {
  products: [],
};

const getters = {
  allProducts: (state) => state.products,
};

const actions = {
  getProducts({ commit }, data) {
    apiCall({
      url: api_routes.product.getProducts,
      method: "post",
      data: data,
    }).then((resp) => {
      commit(GET_PRODUCTS_SUCCESS, resp);
    });
  },
};

const mutations = {
  GET_PRODUCTS_SUCCESS(state, products) {
    state.products = products;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
