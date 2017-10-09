export default {
  state: {
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
  },
  mutations: {
    updateMessageBox(state, payload) {
      state.messageBox = payload;
    },
  },
  actions: {
    updateMessageBox({ commit }, payload) {
      // eslint-disable-next-line
      console.log(payload);
      commit('updateMessageBox', payload);
    },
  },
  getters: {
    messageBox(state) {
      return state.messageBox;
    },
  },
};
