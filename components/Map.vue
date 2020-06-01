<template>
  <div id="map" class="map"></div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Map',
  data() {
    return {
      map: null,
      accessToken:
        'pk.eyJ1IjoiZGlnb2J1cmlnbyIsImEiOiJjazkxdjQxZzYwMXU2M2VuYXV6YmFpdXd5In0.HNmbBjSjkKf6buYN7KoexA',
    };
  },
  computed: {
    ...mapGetters({ currentTheme: 'layout/currentTheme' }),
  },
  watch: {
    currentTheme() {
      const style =
        this.currentTheme === 'dark'
          ? 'mapbox://styles/mapbox/dark-v9'
          : 'mapbox://styles/mapbox/light-v10';
      this.map.setStyle(style);
    },
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      const mapboxgl = require('mapbox-gl');
      mapboxgl.accessToken = this.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        height: '100%',
      });
    },
  },
});
</script>

<style scoped>
.map {
  border-radius: 4px;
  height: 300px;
}
</style>
