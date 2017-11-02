export default {
  state: {
    customCSS: '',
  },
  mutations: {
    updateCustomCSS(state, payload) {
      state.customCSS = payload;
    },
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
