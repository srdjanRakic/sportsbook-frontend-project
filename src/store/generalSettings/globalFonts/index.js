export default {
  state: {
    globalFonts: {
      primaryHeadline: {
        fontFamily: [
          { value: 'State 1', selected: false },
          { value: 'State 2', selected: true },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: false },
        ],
        fontWeight: [
          { value: 'State 1', selected: true },
          { value: 'State 2', selected: false },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: false },
        ],
        fontSize: [
          { value: 'State 1', selected: false },
          { value: 'State 2', selected: false },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: true },
        ],
      },
      secondaryHeadline: {
        fontFamily: [
          { value: 'State 1', selected: false },
          { value: 'State 2', selected: true },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: false },
        ],
        fontWeight: [
          { value: 'State 1', selected: true },
          { value: 'State 2', selected: false },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: false },
        ],
        fontSize: [
          { value: 'State 1', selected: false },
          { value: 'State 2', selected: false },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: true },
        ],
      },
      bodyText: {
        fontFamily: [
          { value: 'State 1', selected: false },
          { value: 'State 2', selected: true },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: false },
        ],
        fontWeight: [
          { value: 'State 1', selected: true },
          { value: 'State 2', selected: false },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: false },
        ],
        fontSize: [
          { value: 'State 1', selected: false },
          { value: 'State 2', selected: false },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: true },
        ],
      },
      accentText: {
        fontFamily: [
          { value: 'State 1', selected: false },
          { value: 'State 2', selected: true },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: false },
        ],
        fontWeight: [
          { value: 'State 1', selected: true },
          { value: 'State 2', selected: false },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: false },
        ],
        fontSize: [
          { value: 'State 1', selected: false },
          { value: 'State 2', selected: false },
          { value: 'State 3', selected: false },
          { value: 'State 4', selected: true },
        ],
      },
    },
  },
  mutations: {
    updatePrimaryHeadlineFontFamily(state, payload) {
      const fontFamilySettings = state.globalFonts.primaryHeadline.fontFamily;

      // unselect the previous selected option
      const previouslySelectedOption = fontFamilySettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontFamilySettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updatePrimaryHeadlineFontWeight(state, payload) {
      const fontWeightSettings = state.globalFonts.primaryHeadline.fontWeight;

      // unselect the previous selected option
      const previouslySelectedOption = fontWeightSettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontWeightSettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updatePrimaryHeadlineFontSize(state, payload) {
      const fontSizeSettings = state.globalFonts.fontWeight;

      // unselect the previous selected option
      const previouslySelectedOption = fontSizeSettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontSizeSettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateSecondaryHeadlineFontFamily(state, payload) {
      const fontFamilySettings = state.globalFonts.fontFamily;

      // unselect the previous selected option
      const previouslySelectedOption = fontFamilySettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontFamilySettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateSecondaryHeadlineFontWeight(state, payload) {
      const fontWeightSettings = state.globalFonts.fontWeight;

      // unselect the previous selected option
      const previouslySelectedOption = fontWeightSettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontWeightSettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateSecondaryHeadlineFontSize(state, payload) {
      const fontSizeSettings = state.globalFonts.fontWeight;

      // unselect the previous selected option
      const previouslySelectedOption = fontSizeSettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontSizeSettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateBodyTextFontFamily(state, payload) {
      const fontFamilySettings = state.globalFonts.fontFamily;

      // unselect the previous selected option
      const previouslySelectedOption = fontFamilySettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontFamilySettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateBodyTextFontWeight(state, payload) {
      const fontWeightSettings = state.globalFonts.fontWeight;

      // unselect the previous selected option
      const previouslySelectedOption = fontWeightSettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontWeightSettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateBodyTextFontSize(state, payload) {
      const fontSizeSettings = state.globalFonts.fontSize;

      // unselect the previous selected option
      const previouslySelectedOption = fontSizeSettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontSizeSettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateAccentTextFontFamily(state, payload) {
      const fontFamilySettings = state.globalFonts.fontFamily;

      // unselect the previous selected option
      const previouslySelectedOption = fontFamilySettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontFamilySettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateAccentTextFontWeight(state, payload) {
      const fontWeightSettings = state.globalFonts.fontWeight;

      // unselect the previous selected option
      const previouslySelectedOption = fontWeightSettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontWeightSettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateAccentTextFontSize(state, payload) {
      const fontSizeSettings = state.globalFonts.fontSize;

      // unselect the previous selected option
      const previouslySelectedOption = fontSizeSettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = fontSizeSettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
  },
  actions: {
    updatePrimaryHeadlineFontFamily({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updatePrimaryHeadlineFontFamily', payload);
    },
    updatePrimaryHeadlineFontWeight({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updatePrimaryHeadlineFontWeight', payload);
    },
    updatePrimaryHeadlineFontSize({ commit }, payload) {
       // eslint-disable-next-line
      console.log(payload);
      commit('updatePrimaryHeadlineFontSize', payload);
    },
    updateSecondaryHeadlineFontFamily({ commit }, payload) {
      commit('updateSecondaryHeadlineFontFamily', payload);
    },
    updateSecondaryHeadlineFontWeight({ commit }, payload) {
      commit('updateSecondaryHeadlineFontWeight', payload);
    },
    updateSecondaryHeadlineFontSize({ commit }, payload) {
      commit('updateSecondaryHeadlineFontSize', payload);
    },
    updateBodyTextFontFamily({ commit }, payload) {
      commit('updateBodyTextFontFamily', payload);
    },
    updateBodyTextFontWeight({ commit }, payload) {
      commit('updateBodyTextFontWeight', payload);
    },
    updateBodyTextFontSize({ commit }, payload) {
      commit('updateBodyTextFontSize', payload);
    },
    updateAccentTextFontFamily({ commit }, payload) {
      commit('updateAccentTextFontFamily', payload);
    },
    updateAccentTextFontWeight({ commit }, payload) {
      commit('updateAccentTextFontWeight', payload);
    },
    updateAccentTextFontSize({ commit }, payload) {
      commit('updateAccentTextFontSize', payload);
    },
  },
  getters: {
    primaryHeadline(state) {
      return state.globalFonts.primaryHeadline;
    },
    secondaryHeadline(state) {
      return state.globalFonts.secondaryHeadline;
    },
    bodyText(state) {
      return state.globalFonts.bodyText;
    },
    accentText(state) {
      return state.globalFonts.accentText;
    },
  },
};
