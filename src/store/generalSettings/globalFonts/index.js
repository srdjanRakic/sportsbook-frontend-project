export default {
  state: {
    globalFonts: {
      primaryHeadline: {
        fontFamily: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        fontWeight: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        fontSize: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
      },
      secondaryHeadline: {
        fontFamily: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        fontWeight: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        fontSize: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
      },
      bodyText: {
        fontFamily: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        fontWeight: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        fontSize: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
      },
      accentText: {
        fontFamily: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        fontWeight: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        fontSize: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
      },
    },
  },
  mutations: {
    /*eslint-disable */
    updateGlobalFonts(state, payload) {
      console.log(`Updating the selectedGeneralSettings: ${payload}`);
      state.selectedGeneralSettings.globalFonts = payload;
    },
     /*eslint-enable */
  },
  actions: {
    updateGlobalFonts({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateGlobalFonts', payload);
    },
  },
  getters: {
    globalFonts(state) {
      return state.generalSettings.globalFonts;
    },
  },
};
