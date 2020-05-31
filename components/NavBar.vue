<template>
  <div>
    <nav class="nav container flex items-center">
      <p>Rodrigo</p>
      <span class="flex-grow"></span>
      <div class="hidden sm:block">
        <NuxtLink to="/" class="mr-10">Home</NuxtLink>
        <NuxtLink to="/works" class="mr-10">Works</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
      <div
        class="block sm:hidden fixed right-0 bottom-0 w-screen h-24 z-10 bg-gray-600 text-gray-100 flex items-center justify-around"
      >
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/works">Works</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped>
.nav {
  height: 7.6rem;
}
</style>
