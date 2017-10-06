export default {
  state: {
    layout: '',
  },
  mutations: {
    /*eslint-disable */
    updateLayout(state, payload) {
      console.log(`Updating the updateLayoutName to: ${payload}`);
      state.layout = payload;
    },
     /*eslint-enable */
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
