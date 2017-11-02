export default {
  state: {
    showSelectColorModal: false,
  },
  mutations: {
    toggleSelectColorModal(state, payload) {
      state.showSelectColorModal = payload;
    },
  },
  actions: {
    toggleSelectColorModal({ commit }, payload) {
      commit('toggleSelectColorModal', payload);
    },
  },
  getters: {
    showSelectColorModal(state) {
      return state.showSelectColorModal;
    },
  },
};
