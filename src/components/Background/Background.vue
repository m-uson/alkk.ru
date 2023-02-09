<template>
  <div class="background">
    <TagH type="h2">Создание сайтов</TagH>
  </div>
</template>

<script>
import TagH from "../TagH/TagH.vue";
export default {
  components: { TagH },
};
</script>

<style>
.background {
  background-image: url("~@/assets/background.png");
  background-size: cover;
  height: 100%;
  padding: 80px 0;
}
@media screen and (max-width: 445px) {
  .background {
    background-size: cover;
    background-image: url("~@/assets/background.jpg");
    height: 100%;
  }
  .background h2 {
    font-size: 45px;
    padding: 0 30px;
  }
}
</style>
