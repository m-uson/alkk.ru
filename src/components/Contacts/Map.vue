<template>
  <gmap-map
    :center="{ center }"
    :zoom="7"
    map-type-id="terrain"
    style="height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  data() {
    return {
      center: { let: 10.0, lng: 10.0 },
      markers: [
        { position: { let: 10.0, lng: 10.0 } },
        { position: { let: 11.0, lng: 11.0 } },
      ],
    };
  },
};
</script>
