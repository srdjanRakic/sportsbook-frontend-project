export default {
  state: {
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
  mutations: {
    updateSecondaryHeadlineFontFamily(state, payload) {
      const fontFamilySettings = state.secondaryHeadline.fontFamily;

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
      const fontWeightSettings = state.secondaryHeadline.fontWeight;

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
      const fontSizeSettings = state.secondaryHeadline.fontWeight;

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
    updateSecondaryHeadlineFontFamily({ commit }, payload) {
      commit('updateSecondaryHeadlineFontFamily', payload);
    },
    updateSecondaryHeadlineFontWeight({ commit }, payload) {
      commit('updateSecondaryHeadlineFontWeight', payload);
    },
    updateSecondaryHeadlineFontSize({ commit }, payload) {
      commit('updateSecondaryHeadlineFontSize', payload);
    },
  },
  getters: {
    secondaryHeadlineFontFamily(state) {
      return state.fontFamily;
    },
    secondaryHeadlineFontWeight(state) {
      return state.fontWeight;
    },
    secondaryHeadlineFontSize(state) {
      return state.fontSize;
    },
  },
};
