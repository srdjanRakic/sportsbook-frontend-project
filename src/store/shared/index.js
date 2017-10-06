export default {
  state: {
    loading: false,
    error: null,
    showSelectColorModal: false,
  },
  mutations: {
    /*eslint-disable */
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    toggleSelectColorModal(state, payload) {
      state.showSelectColorModal = payload;
    },
    /*eslint-enable */
  },
  actions: {
    clearError({ commit }) {
      commit('clearError');
    },
    toggleSelectColorModal({ commit }, payload) {
      commit('toggleSelectColorModal', payload);
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
    showSelectColorModal(state) {
      return state.showSelectColorModal;
    },
  },
};
