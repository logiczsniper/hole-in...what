<template>
  <div class="club">
    <div v-for="club in clubs" :key="club.id">
      <ClubEntry :id="club.id" :name="club.name" :count="club.count" />
    </div>
  </div>
</template>

<script>
import ClubEntry from "@/components/ClubEntry.vue";

export default {
  name: "Clubs",
  components: {
    ClubEntry
  }
};
</script>