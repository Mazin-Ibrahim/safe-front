import { GET_COMPANIES_SUCCESS } from "../actions/company";

import { apiCall, api_routes } from "../../utils/api";

const state = {
  companies: [],
};

const getters = {
  allCompanies: (state) => state.companies,
};

const actions = {
  getCompanies({ commit }) {
    apiCall({ url: api_routes.company.getCompanies, method: "get" }).then(
      (resp) => {
        commit(GET_COMPANIES_SUCCESS, resp);
      }
    );
  },
};

const mutations = {
  GET_COMPANIES_SUCCESS(state, companies) {
    state.companies = companies;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
