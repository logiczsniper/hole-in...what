import Room from "./models/room.js";

const state = {
  rooms: [],
};

const getters = {
  rooms: (state) => state.rooms,
};

const actions = {
  addRoom(id, { commit }) {
    var newRoom = Room(id);
    commit("addRoomMutation", newRoom);
  },
};

const mutations = {
  addRoomMutation: function(state, newRoom) {
    state.rooms.append(newRoom);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
