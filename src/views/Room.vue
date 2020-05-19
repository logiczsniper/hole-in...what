<template>
  <div class="room">
    <h1>This is a private room page: ID {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>
