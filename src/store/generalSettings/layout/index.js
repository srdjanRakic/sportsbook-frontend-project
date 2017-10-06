export default {
  state: {
    layoutSettings: {
      layoutName: '',
    },
  },
  mutations: {
    /*eslint-disable */
    updateLayoutName(state, payload) {
      console.log(`Updating the updateLayoutName to: ${payload}`);
      state.selectedGeneralSettings.updateLayoutName = payload;
    },
     /*eslint-enable */
  },
  actions: {
    updateLayoutName({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateLayoutName', payload);
    },
  },
  getters: {
    layoutSettings(state) {
      return state.generalSettings.layoutSettings;
    },
  },
};
