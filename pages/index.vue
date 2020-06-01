<template>
  <div class="container h-full">
    <Hero />
    <Map />
    {{ currentTheme }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Map from '@/components/Map.vue';
import Hero from '@/components/Hero.vue';

export default Vue.extend({
  components: {
    Hero,
    Map,
  },
  transition: 'slide-fade',
  head() {
    return {
      htmlAttrs: {
        lang: 'en-US',
      },
    };
  },
});
</script>

<style></style>
