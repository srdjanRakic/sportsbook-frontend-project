export default {
  state: {
    messageBox: {
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
  },
  mutations: {
    updateBoxPosition(state, payload) {
      state.messageBox.boxPosition = payload;
    },
    updateBoxEffects(state, payload) {
      state.messageBox.boxEffects = payload;
    },
    updateBoxTemplate(state, payload) {
      state.messageBox.boxTemplate = payload;
    },
  },
  actions: {
    updateBoxPosition({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateMessageBox', payload);
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
    messageBox(state) {
      return state.messageBox;
    },
  },
};
