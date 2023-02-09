<template>
  <div class="static__item">
    <NumItem :style="{ background: item.background }" :number="item.number" />
    <div class="static__description">{{ item.description }}</div>
  </div>
</template>

<script>
import NumItem from "./NumItem.vue";
export default {
  props: ["item"],
  components: { NumItem },
};
</script>

<style></style>
