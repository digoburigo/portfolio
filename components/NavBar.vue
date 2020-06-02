<template>
  <div>
    <nav class="nav container flex items-center">
      <p>Rodrigo Búrigo</p>
      <span class="flex-grow"></span>
      <div>
        <LanguageButton />
        <ThemeButton />
      </div>
      <div class="hidden sm:block">
        <NuxtLink :to="localePath('/')" class="mr-10">Home</NuxtLink>
        <NuxtLink :to="localePath('/works')" class="mr-10">Works</NuxtLink>
        <NuxtLink :to="localePath('/contact')">Contact</NuxtLink>
      </div>
      <div
        class="block sm:hidden fixed right-0 bottom-0 w-screen h-24 z-10 bg-gray-600 text-gray-100 flex items-center justify-around"
      >
        <NuxtLink :to="localePath('/')">Home</NuxtLink>
        <NuxtLink :to="localePath('/works')">Works</NuxtLink>
        <NuxtLink :to="localePath('/contact')">Contact</NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ThemeButton from '@/components/LanguageButton.vue';
import LanguageButton from '@/components/ThemeButton.vue';

export default Vue.extend({
  components: {
    LanguageButton,
    ThemeButton,
  },
});
</script>

<style scoped>
.nav {
  height: 7.6rem;
}
</style>
