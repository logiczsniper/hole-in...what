const state = {
  isPanelOpen: false,
};

const getters = {
  isPanelOpen: function(state) {
    return state.isPanelOpen;
  },
};

const actions = {
  togglePanel({ commit }) {
    commit("togglePanelMutation");
  },
};

const mutations = {
  togglePanelMutation: function(state) {
    state.isPanelOpen = !state.isPanelOpen;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
