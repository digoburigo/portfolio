<template>
  <div>
    <p>contact page {{ msg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  transition: 'slide-fade',
  data() {
    return {
      msg: 123,
    };
  },
});
</script>

<style scoped></style>
