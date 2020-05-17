<template>
  <div id="app">
    <nav class="main-nav">
      <OpenSidebar />
    </nav>
    <Sidebar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import OpenSidebar from "@/components/OpenSidebar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "app",
  components: {
    OpenSidebar,
    Sidebar
  }
};
</script>

<style>
@font-face {
  font-family: "Amatic_SC";
  src: url("assets/fonts/Amatic_SC/AmaticSC-Regular.ttf");
}

@font-face {
  font-family: "Josefin_Sans";
  src: url("assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf");
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: whitesmoke;
  color: #4f3f84;
}

.main-nav {
  display: flex;
}
</style>
