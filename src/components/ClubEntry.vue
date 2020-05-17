<template>
  <div class="card">
    <div class="header">{{ name }} {{ id }}</div>
    <div class="subheader" v-if="count === 1">{{ count }} active tournament.</div>
    <div class="subheader" v-else-if="count === 0">{{ count }} active tournament.</div>
    <div class="subheader" v-else>{{ count }} active tournaments.</div>
  </div>
</template>

<script>
export default {
  name: "ClubEntry",
  props: {
    id: {
      type: Number,
      required: true,
      validator: function(id) {
        return id > 0;
      }
    },
    name: {
      type: String,
      default: "Club name",
      validator: function(name) {
        return name.length > 0;
      }
    },
    count: {
      type: Number,
      default: 0,
      validator: function(count) {
        return count >= 0;
      }
    }
  }
};
</script>

<style scoped>
.card {
  display: inline-block;
  background-color: tomato;
  color: thistle;
  margin: 5px;
  padding: 5px;
}

.header {
  font-size: larger;
  font-weight: bolder;
}

.subheader {
  font-weight: lighter;
}
</style>