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
    updatePrimaryHeadlineFontFamily(state, payload) {
      const fontFamilySettings = state.fontFamily;

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
      const fontWeightSettings = state.fontWeight;

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
      const fontSizeSettings = state.fontWeight;

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
  },
  getters: {
    primaryHeadlineFontFamily(state) {
      return state.fontFamily;
    },
    primaryHeadlineFontWeight(state) {
      return state.fontWeight;
    },
    primaryHeadlineFontSize(state) {
      return state.fontSize;
    },
  },
};
