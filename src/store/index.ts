import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    country: {
      name: "INDIA"
    }
  },
  mutations: {
    setCountry(state, payload) {
      state.country.name = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getCountry: state => {
      return state.country.name;
    }
  }
});
