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
  transition: 0.5s;
}

.plus-button:hover {
  font-size: 1.83em;
  font-size: 3.7vw;
}
</style>