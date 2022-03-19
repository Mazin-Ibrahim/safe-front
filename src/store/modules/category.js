import {
  GET_CATEGORIES_SUCCESS,
  GET_SUBCATEGORIES_SUCCESS,
  GET_SUBCATEGORYCHILDS_SUCCESS,
} from "../actions/category";
import { apiCall, api_routes } from "@/utils/api";

const state = {
  categories: [],
  subcategories: [],
  subcategorychilds: [],
};

const getters = {
  allCategories: (state) => state.categories,
  allSubcategories: (state) => state.subcategories,
  allSubcategorychilds: (state) => state.subcategorychilds,
};

const actions = {
  getCategories({ commit }) {
    apiCall({ url: api_routes.category.getCategories, method: "get" }).then(
      (resp) => {
        commit(GET_CATEGORIES_SUCCESS, resp);
      }
    );
  },

  getSubcategories({ commit }, category_id) {
    apiCall({
      url: api_routes.category.getSubCategories + `/${category_id}`,
      method: "get",
    }).then((resp) => {
      commit(GET_SUBCATEGORIES_SUCCESS, resp);
    });
  },

  getSubcategorychilds({ commit }, category_id) {
    apiCall({
      url: api_routes.category.getSubCategorychilds + `/${category_id}`,
      method: "get",
    }).then((resp) => {
      commit(GET_SUBCATEGORYCHILDS_SUCCESS, resp);
    });
  },
};

const mutations = {
  GET_CATEGORIES_SUCCESS(state, categories) {
    state.categories = categories;
  },

  GET_SUBCATEGORIES_SUCCESS(state, subcategories) {
    state.subcategories = subcategories;
  },
  GET_SUBCATEGORYCHILDS_SUCCESS(state, subcategorychilds) {
    state.subcategorychilds = subcategorychilds;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
