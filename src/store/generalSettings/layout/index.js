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
      // eslint-disable-next-line
      console.log(payload);
      commit('updateLayout', payload);
    },
  },
  getters: {
    layout(state) {
      return state.layout;
    },
  },
};
