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
      // eslint-disable-next-line
      console.log(payload);

      const tableColors = state.linkColors;
       // eslint-disable-next-line
      console.log(tableColors);

      tableColors.forEach((item) => {
        if (item.title === payload.title) {
          // eslint-disable-next-line
          console.log('Changing object');
          // eslint-disable-next-line
          console.log(item);

          // eslint-disable-next-line
          item.chosenColor = payload.chosenColor;
        }
      });

      // eslint-disable-next-line
      console.log(tableColors);
    },
  },
  actions: {
    updateButtonColors({ commit }, payload) {
      // eslint-disable-next-line
      console.log(`Payload: ${payload}`);
      // eslint-disable-next-line
      console.log(payload);
      commit('updateButtonColors', payload);
    },
  },
  getters: {
    buttonColors(state) {
      return state.buttonColors;
    },
  },
};
