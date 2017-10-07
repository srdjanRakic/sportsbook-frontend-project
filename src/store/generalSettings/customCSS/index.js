export default {
  state: {
    customCSS: '',
  },
  mutations: {
    /*eslint-disable */
    updateCustomCss(state, payload) {
      state.customCSS = payload;
    },
     /*eslint-enable */
  },
  actions: {
    updateCustomCSS({ commit }, payload) {
      commit('updateCustomCss', payload);
    },
  },
  getters: {
    customCSS(state) {
      return state.customCSS;
    },
  },
};
