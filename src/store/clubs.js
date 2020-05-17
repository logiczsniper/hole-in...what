import axios from "axios";

const state = {
  clubs: [],
};

const getters = {
  allClubs: function(state) {
    return state.clubs;
  },
};

const actions = {
  async fetchClubs({ commit }) {
    const response = await axios.get("TODO: my endpoint");

    commit("setClubs", response.data);
  },
};

const mutations = {
  setClubs: function(state, clubs) {
    state.clubs = clubs;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
