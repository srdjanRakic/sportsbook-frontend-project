export default {
  state: {
    linkColors: [
      { title: 'Primary', chosenColor: '#194d33' },
      { title: 'Second', chosenColor: '#194d33' },
      { title: 'Text', chosenColor: '#194d33' },
      { title: 'Accent', chosenColor: '#194d33' },
    ],
  },
  mutations: {
    
  },
  actions: {

  },
  getters: {
    linkColors(state) {
      return state.linkColors;
    },
  },
};
