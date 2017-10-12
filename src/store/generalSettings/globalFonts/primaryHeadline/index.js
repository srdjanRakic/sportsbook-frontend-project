export default {
  state: {
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
  },
  mutations: {
    updateFontFamily(state, payload) {
      const fontFamilySettings = state.primaryHeadline.fontFamily;

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
    updateFontWeight(state, payload) {
      const fontWeightSettings = state.primaryHeadline.fontWeight;

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
    updateFontSize(state, payload) {
      const fontSizeSettings = state.primaryHeadline.fontWeight;

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
    updateFontFamily({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateFontFamily', payload);
    },
    updateFontWeight({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateFontWeight', payload);
    },
    updateFontSize({ commit }, payload) {
       // eslint-disable-next-line
      console.log(payload);
      commit('updateFontSize', payload);
    },
  },
  getters: {
    primaryHeadline(state) {
      return state.primaryHeadline;
    },
  },
};
