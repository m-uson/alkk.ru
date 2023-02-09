<template>
  <div class="analysis">
    <TagH className="analysis__title" type="h3"> Глубокий анализ </TagH>
    <div>
      <div class="analysis__row" v-for="item in items" :key="item.id">
        <Content :title="item.title" :description="item.description" />
        <Marks :marks="item.marks" />
      </div>
    </div>
  </div>
</template>

<script>
import TagH from "@/components/TagH/TagH.vue";
import Content from "./Content.vue";
import Marks from "./Marks.vue";
export default {
  components: { TagH, Marks, Content },
  props: ["items"],
};
</script>

<style>
.analysis__title {
  padding: 8px 0;
  border-radius: 5px;
  background: linear-gradient(0deg, #ffd773, #ffd773), #f4f7fe;
}
.analysis__row {
  display: flex;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 20px;
}
.analysis__row:first-child .table__item {
  padding-top: 35px;
}
.analysis__row:last-child .table__item {
  padding-bottom: 35px;
}
.analysis__row:last-child {
  border-bottom: none;
}
@media screen and (max-width: 445px) {
  .analysis h3 {
    font-size: 25px;
  }
  .analysis__row {
    flex-direction: column;
  }
}
</style>
