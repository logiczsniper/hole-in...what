<template>
  <div>
    <router-link to="/" class="plus-button">&#8962;</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeButton"
};
</script>

<style scoped>
.plus-button {
  position: absolute;
  left: 10px;
  top: 0px;
  font-weight: 900;
  font-size: 3.3em;
  font-size: 6.1vw;
  color: whitesmoke;
  border-width: 0;
  text-decoration: none;
  line-height: 1;
  padding-left: 18px;
  padding-left: 1.3vw;
  padding-top: 15px;
  padding-top: 0.8vw;
  transition: 0.5s;
}

.plus-button:focus {
  outline: none;
}

.plus-button:hover {
  font-size: 3.5em;
  font-size: 6.3vw;
}
</style>