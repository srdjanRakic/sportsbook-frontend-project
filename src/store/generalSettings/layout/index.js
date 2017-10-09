export default {
  state: {
    layout: '',
  },
  mutations: {
    /*eslint-disable */
    updateLayout(state, payload) {
      state.layout = payload;
    },
     /*eslint-enable */
  },
  actions: {
    updateLayout({ commit }, payload) {
      commit('updateLayout', payload);
    },
  },
  getters: {
    layout(state) {
      return state.layout;
    },
  },
};
