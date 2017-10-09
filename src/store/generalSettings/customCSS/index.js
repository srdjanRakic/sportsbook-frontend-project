export default {
  state: {
    customCSS: '',
  },
  mutations: {
    /*eslint-disable */
    updateCustomCSS(state, payload) {
      state.customCSS = payload;
    },
     /*eslint-enable */
  },
  actions: {
    updateCustomCSS({ commit }, payload) {
      commit('updateCustomCSS', payload);
    },
  },
  getters: {
    customCSS(state) {
      return state.customCSS;
    },
  },
};
