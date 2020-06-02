<template>
  <div>
    <button>Language</button>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LanguageButton',
  computed: {
    availableLocales() {
      return (this as any).$i18n.locales.filter(
        (i: { code: any }) => i.code !== (this as any).$i18n.locale
      );
    },
  },
});
</script>

<style scoped></style>
