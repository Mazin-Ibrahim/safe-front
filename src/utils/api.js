import axios from "axios";
import { settings } from "@/settings";

const API_SERVER = settings.API_SERVER;

export const api_routes = {
  user: {
    login: API_SERVER + "/login",
    signup: API_SERVER + "auth/signup",
    me: API_SERVER + "/auth/me",
  },
  product: {
    getProducts: API_SERVER + "/products",
  },

  category: {
    getCategories: API_SERVER + "/categories",
    getSubCategories: API_SERVER + "/subcategories",
    getSubCategorychilds: API_SERVER + "/subcategorychilds",
  },

  company: {
    getCompanies: API_SERVER + "/companies",
  },
};

export const apiCall = ({ url, method, ...args }) =>
  new Promise((resolve, reject) => {
    let token = localStorage.getItem("user-token") || "";

    if (token)
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    try {
      axios({
        method: method || "get",
        url: url,
        ...args,
      })
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (err) {
      reject(new Error(err));
    }
  });
