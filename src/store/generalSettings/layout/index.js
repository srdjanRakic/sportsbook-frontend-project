export default {
  state: {
    layout: '',
  },
  mutations: {
    updateLayout(state, payload) {
      state.layout = payload;
    },
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
