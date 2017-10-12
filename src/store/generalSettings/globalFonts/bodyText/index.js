export default {
  state: {
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
  },
  mutations: {
    updateBodyTextFontFamily(state, payload) {
      const fontFamilySettings = state.bodyText.fontFamily;

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
      const fontWeightSettings = state.bodyText.fontWeight;

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
      const fontSizeSettings = state.bodyText.fontSize;

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
    updateBodyTextFontFamily({ commit }, payload) {
      commit('updateBodyTextFontFamily', payload);
    },
    updateBodyTextFontWeight({ commit }, payload) {
      commit('updateBodyTextFontWeight', payload);
    },
    updateBodyTextFontSize({ commit }, payload) {
      commit('updateBodyTextFontSize', payload);
    },
  },
  getters: {
    bodyText(state) {
      return state.bodyText;
    },
  },
};
