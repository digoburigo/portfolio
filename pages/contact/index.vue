<template>
  <div>
    <p>contact page {{ msg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      msg: 123,
    };
  },
 transition: 'slide-fade',
});
</script>

<style scoped></style>
