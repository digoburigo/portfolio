<template>
  <div>
    <h1 class="text-5xl text-blue-500 dark:text-blue-300">
      {{ $t('title') }}
    </h1>
    <h2 class="text-3xl text-blue-800 dark:text-blue-500">
      Eu quero ajudar a sua (idéia) a se conectar.
    </h2>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Hero'
});
</script>

<style scoped>
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
