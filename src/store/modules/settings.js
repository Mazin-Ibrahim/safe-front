import { settings } from "@/settings";
const state = {
  appName: settings.APP_NAME,
  imagePath: "http://127.0.0.1:8001/",
};

const getters = {
  appName: (state) => state.appName,
  imagePath: (state) => state.imagePath,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
