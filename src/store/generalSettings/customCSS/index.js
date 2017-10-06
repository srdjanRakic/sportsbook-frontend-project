export default {
  state: {
    customCss: {
      css: '',
    },
  },
  mutations: {
    /*eslint-disable */
    updateCustomCss(state, payload) {
      state.selectedGeneralSettings.customCss = payload;
    },
     /*eslint-enable */
  },
  actions: {

  },
  getters: {
    customCss(state) {
      return state.generalSettings.customCss;
    },
  },
};
