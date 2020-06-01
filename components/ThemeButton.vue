<template>
  <div>
    <button @click="onChangeTheme">Theme</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ThemeButton',
  data() {
    return {
      dark: true,
    };
  },
  methods: {
    onChangeTheme() {
      this.dark = !this.dark;
      this.$store.commit('layout/toggleTheme', this.dark ? 'dark' : 'light');
    },
  },
});
</script>

<style scoped></style>
