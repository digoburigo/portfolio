<template>
  <div>
    <NavBar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters({ currentTheme: 'layout/currentTheme' }),
  },
  watch: {
    currentTheme() {
      (this as any).$colorMode.preference = this.currentTheme;
    },
  },
  created() {},
});
</script>

<style lang="scss">
/* purgecss start ignore */
$transtion-time: 0.5s;
.slide-fade-enter-active {
  transition: all $transtion-time ease-in-out;
}
.slide-fade-leave-active {
  transition: all $transtion-time ease-in-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
/* purgecss end ignore */
</style>
