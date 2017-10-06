export default {
  state: {
    generalSettings: {
      layoutSettings: {
        layoutName: '',
      },
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
      customCss: {
        css: '',
      },
      messageBox: {
        boxPosition: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        boxEffects: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
        boxTemplate: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
        ],
      },
      globalColors: {
        backgroundColors: {
          primary: '',
          second: '',
          text: '',
          accent: '',
        },
        buttonColors: {
          primary: '',
          second: '',
          text: '',
          accent: '',
        },
        tableColors: {
          primary: '',
          second: '',
          text: '',
          accent: '',
        },
        linkColors: {
          primary: '',
          second: '',
          text: '',
          accent: '',
        },
      },
    },
    selectedGeneralSettings: {
      layoutSettings: {
        layoutName: '',
      },
      globalFonts: {
        primaryHeadline: {
          fontFamily: '',
          fontWeight: '',
          fontSize: '',
        },
        secondaryHeadline: {
          fontFamily: '',
          fontWeight: '',
          fontSize: '',
        },
        bodyText: {
          fontFamily: '',
          fontWeight: '',
          fontSize: '',
        },
        accentText: {
          fontFamily: '',
          fontWeight: '',
          fontSize: '',
        },
      },
      customCss: {
        css: '',
      },
      messageBox: {
        boxPosition: '',
        boxEffects: '',
        boxTemplate: '',
      },
    },
  },
  mutations: {
    /*eslint-disable */
    updateGlobalFonts(state, payload) {
      console.log(`Updating the selectedGeneralSettings: ${payload}`);
      state.selectedGeneralSettings.globalFonts = payload;
    },
    updateLayoutName(state, payload) {
      console.log(`Updating the updateLayoutName to: ${payload}`);
      state.selectedGeneralSettings.updateLayoutName = payload;
    },
    updateCustomCss(state, payload) {
      state.selectedGeneralSettings.customCss = payload;
    },
    updateMessageBox(state, payload) {
      state.selectedGeneralSettings.messageBox = payload;
    },
     /*eslint-enable */
  },
  actions: {
    updateGlobalFonts({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateGlobalFonts', payload);
    },
    updateLayoutName({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateLayoutName', payload);
    },
    updateMessageBox({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateMessageBox', payload);
    },
  },
  getters: {
    layoutSettings(state) {
      return state.generalSettings.layoutSettings;
    },
    globalFonts(state) {
      return state.generalSettings.globalFonts;
    },
    customCss(state) {
      return state.generalSettings.customCss;
    },
    messageBox(state) {
      return state.generalSettings.messageBox;
    },
  },
};
