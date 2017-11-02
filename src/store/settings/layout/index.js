export default {
  state: {
    layoutName: '',
  },
  mutations: {
    updateLayoutName(state, payload) {
      state.layoutName = payload;
    },
  },
  actions: {
    updateLayoutName({ commit }, payload) {
      commit('updateLayoutName', payload);
    },
  },
  getters: {
    layoutName(state) {
      return state.layoutName;
    },
  },
};
