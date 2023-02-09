<template>
  <div class="promote-item__item">
    <TagH className="promote-item__title" type="h5">{{ label }}</TagH>
    <ul class="promote-list">
      <li v-for="item in items" :key="item" class="promote-list__item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import TagH from "@/components/TagH/TagH.vue";
export default {
  props: ["items", "label"],
  components: { TagH },
};
</script>

<style></style>
