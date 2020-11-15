<template>
  <div style="width:100%;height:100%">
    <div ref="basicMapbox" :style="mapSize"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  data() {
    return {};
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibWljaGFlbDEwIiwiYSI6ImNrN2NyMjFndDA2eWYzbG96Yjh5dXlqajQifQ.YenjA5L-qhtHKcbwTGd0Qg";
      const map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [145.05226, -37.89615], // starting position [lng, lat]
        zoom: 12, // starting zoom
      });

      new mapboxgl.Marker().setLngLat([145.05226, -37.89615]).addTo(map);

      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );

      map.addControl(new mapboxgl.NavigationControl());
    },
  },

  computed: {
    mapSize() {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight,
      };
      return styleObj;
    },
  },

  props: ["mapWidth", "mapHeight"],
};
</script>

<style scoped>
@import url("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css");
</style>
