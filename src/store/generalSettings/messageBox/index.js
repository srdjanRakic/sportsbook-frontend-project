export default {
  state: {
    boxPosition: [
      { value: 'State 1', selected: false },
      { value: 'State 2', selected: false },
      { value: 'State 3', selected: false },
      { value: 'State 4', selected: true },
    ],
    boxEffects: [
      { value: 'State 1', selected: false },
      { value: 'State 2', selected: true },
      { value: 'State 3', selected: false },
      { value: 'State 4', selected: false },
    ],
    boxTemplate: [
      { value: 'State 1', selected: false },
      { value: 'State 2', selected: false },
      { value: 'State 3', selected: true },
      { value: 'State 4', selected: false },
    ],
  },
  mutations: {
    updateBoxPosition(state, payload) {
      const boxPostitionSettings = state.boxPosition;

      // unselect the previous selected option
      const previouslySelectedOption = boxPostitionSettings.find(x => x.selected === true);
      previouslySelectedOption.selected = false;
      // eslint-disable-next-line
      console.log(previouslySelectedOption);

      // set the new selected option
      const newSelectedOption = boxPostitionSettings.find(x => x === payload);
      newSelectedOption.selected = true;

      // eslint-disable-next-line
      console.log(newSelectedOption);
    },
    updateBoxEffects(state, payload) {
      state.boxEffects = payload;
    },
    updateBoxTemplate(state, payload) {
      state.boxTemplate = payload;
    },
  },
  actions: {
    updateBoxPosition({ commit }, payload) {
      commit('updateBoxPosition', payload);
    },
    updateBoxEffects({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateBoxEffects', payload);
    },
    updateBoxTemplate({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateBoxTemplate', payload);
    },
  },
  getters: {
    boxPosition(state) {
      return state.boxPosition;
    },
    boxEffects(state) {
      return state.boxEffects;
    },
    boxTemplate(state) {
      return state.boxTemplate;
    },
    generalSettings(state) {
      return state.generalSettings;
    },
  },
};
