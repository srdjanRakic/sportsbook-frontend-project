export default {
  state: {
    buttonColors: [
      { title: 'Primary', chosenColor: '#194d33' },
      { title: 'Second', chosenColor: '#194d33' },
      { title: 'Text', chosenColor: '#194d33' },
      { title: 'Accent', chosenColor: '#194d33' },
    ],
  },
  mutations: {
    updateButtonColors(state, payload) {
      const tableColors = state.buttonColors;

      tableColors.forEach((item) => {
        if (item.title === payload.title) {
          item.chosenColor = payload.chosenColor;
        }
      });
    },
  },
  actions: {
    updateButtonColors({ commit }, payload) {
      commit('updateButtonColors', payload);
    },
  },
  getters: {
    buttonColors(state) {
      return state.buttonColors;
    },
  },
};
