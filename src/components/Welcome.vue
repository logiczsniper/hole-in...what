<template>
  <div class="welcome">
    <h4>
      <span class="darker">Hole in</span>...
      <span class="darker">what</span>?
    </h4>
    <p>
      Start a competition with friends with the click of a button.
      <br />Here for a club? Hit the menu icon in the top left to get started.
    </p>

    <router-link class="button" :to="generatePath()">
      <div class="inner-button">go</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    generatePath: function() {
      var basePath = "/room/";
      var id = new Date().valueOf();
      return basePath + id.toString();
    }
  }
};
</script>

<style scoped>
*:not(.darker) {
  text-align: left;
  margin-left: 10vw;
}

h4 {
  display: block;
  color: #ffa22a;
  letter-spacing: 4.5px;
  letter-spacing: 0.4vw;
  font-size: 3em;
  font-size: 7vw;
  font-family: "Amatic_SC";
  margin-bottom: 80px;
  margin-bottom: 4vw;
}

p {
  font-family: "Josefin_Sans";
  font-size: 1.3em;
  font-size: 2.1vw;
  margin-bottom: 40px;
  margin-bottom: 2vw;
}

.darker {
  color: #ff662a;
}

.inner-button {
  box-shadow: 0px 10px 14px -7px #6f9222;
  background-color: #82ac26;
  border-radius: 8px;
  border-radius: 0.9vw;
  width: 5em;
  width: 10vw;
  display: inline-block;
  cursor: pointer;
  color: whitesmoke;
  font-family: "Josefin_Sans";
  font-size: 0.8em;
  font-size: 1.4vw;
  font-weight: bold;
  padding: 13px 32px;
  padding: 1.2vw 4vw;
  text-align: center;
  text-decoration: none;
  text-shadow: 0px 1px 0px #6f9222;
  transition: 2s;
}
.inner-button:hover {
  background-color: #6f9222;
  box-shadow: 0px 6px 15px #6f9222;
  font-size: 1em;
  font-size: 1.8vw;
  width: 5.4em;
  width: 10.4vw;
}
.inner-button:active {
  position: relative;
  top: 1px;
}

.button {
  margin-left: 0;
  margin-top: 0;
}
</style>
