export default {
  state: {
    primaryHeadline: {
      fontFamily: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
      ],
      fontWeight: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
      ],
      fontSize: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
      ],
    },
  },
  mutations: {
    updatePrimaryHeadline(state, payload) {
      /* eslint-disable */
      console.log(payload);
      state.primaryHeadline = payload;
      console.log(state.primaryHeadline);
    },
  },
  actions: {
    updatePrimaryHeadline({ commit }, payload) {
      console.log(payload);
      commit('updatePrimaryHeadline', payload);
    },
  },
  getters: {
    primaryHeadline(state) {
      return state.primaryHeadline;
    },
  },
};
