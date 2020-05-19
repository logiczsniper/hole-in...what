<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen" />

    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <span @click="closeSidebarPanel">
          <HomeButton />
        </span>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HomeButton from "@/components/HomeButton.vue";

export default {
  name: "Sidebar",
  computed: {
    ...mapGetters(["isPanelOpen"])
  },
  methods: {
    ...mapActions(["togglePanel"]),
    closeSidebarPanel: function() {
      this.togglePanel();
    }
  },
  components: {
    HomeButton
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar-panel {
  border-radius: 0px 8px 8px 0px;
  border-radius: 0vw 3vw 3vw 0vw;
  overflow-y: auto;
  background-color: #4f3f84;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 20vw;
}

router-link {
  color: whitesmoke;
  display: block;
}
slot {
  display: block;
}
</style>