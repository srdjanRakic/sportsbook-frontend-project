export default {
  state: {
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
  mutations: {
    updateAccentTextFontFamily(state, payload) {
      const fontFamilySettings = state.accentText.fontFamily;

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
      const fontWeightSettings = state.accentText.fontWeight;

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
      const fontSizeSettings = state.accentText.fontSize;

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
    accentText(state) {
      return state.accentText;
    },
  },
};
