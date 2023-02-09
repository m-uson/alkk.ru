<template>
  <div class="table__item">
    <TagH className="table__subtitle" type="h5">{{ title }}</TagH>
    <p>{{ description }}</p>
  </div>
</template>

<script>
import TagH from "@/components/TagH/TagH.vue";
export default {
  components: { TagH },
  props: ["title", "description"],
};
</script>

<style>
.table__subtitle {
  text-align: left;
  margin-bottom: 10px;
}
.table__item {
  padding-bottom: 20px;
  width: 50%;
}
.table__item p {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  opacity: 0.9;
}
@media screen and (max-width: 445px) {
  .table__item {
    width: 100%;
  }
}
</style>
