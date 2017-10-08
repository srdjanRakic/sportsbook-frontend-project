export default {
  state: {
    customCSS: '',
  },
  mutations: {
    updateCustomCss(state, payload) {
      state.customCSS = payload;
    },
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
