<template>
  <div class="plus" :class="{ 'active' : isPanelOpen }" @click.prevent="onPress">
    <button type="button" class="plus-button" title="Clubs">&#x2630;</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "OpenSidebar",
  computed: {
    ...mapGetters(["isPanelOpen"])
  },
  methods: {
    ...mapActions(["togglePanel"]),
    onPress: function() {
      this.togglePanel();
    }
  }
};
</script>

<style scoped>
.plus-button {
  position: absolute;
  font-weight: 900;
  font-size: 1.8em;
  font-size: 3.5vw;
  background-color: whitesmoke;
  color: #4f3f84;
  border-width: 0;
  line-height: 1;
  padding-left: 18px;
  padding-left: 1.5vw;
  padding-top: 15px;
  padding-top: 1.17vw;
  transition: 0.5s;
}

.plus-button:focus {
  outline: none;
}

.plus-button:hover {
  font-size: 1.83em;
  font-size: 3.7vw;
}
</style>