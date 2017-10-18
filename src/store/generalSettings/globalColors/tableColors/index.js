export default {
  state: {
    tableColors: [
      { title: 'Primary', chosenColor: '#194d33' },
      { title: 'Second', chosenColor: '#194d33' },
      { title: 'Text', chosenColor: '#194d33' },
      { title: 'Accent', chosenColor: '#194d33' },
    ],
  },
  mutations: {
    updateTableColors(state, payload) {
      // eslint-disable-next-line
      console.log(payload);

      const tableColors = state.tableColors;
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
    updateTableColors({ commit }, payload) {
      // eslint-disable-next-line
      console.log(`Payload: ${payload}`);
      // eslint-disable-next-line
      console.log(payload);
      commit('updateTableColors', payload);
    },
  },
  getters: {
    tableColors(state) {
      return state.tableColors;
    },
  },
};

