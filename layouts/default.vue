<template>
  <div>
    <NavBar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters('layout', ['isPageTransition']),
  },
  created() {},
  watch: {
    $route() {
      console.log('route changed', this.$route);
    },
  },
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
