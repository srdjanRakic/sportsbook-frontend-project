export default {
  state: {
    customCSS: {
      css: '',
    },
  },
  mutations: {
    /*eslint-disable */
    updateCustomCss(state, payload) {
      state.customCSS = payload;
    },
     /*eslint-enable */
  },
  actions: {

  },
  getters: {
    customCSS(state) {
      return state.customCSS;
    },
  },
};
