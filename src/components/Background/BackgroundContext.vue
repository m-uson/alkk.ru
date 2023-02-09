<template>
  <div class="background-context">
    <TagH type="h2">Продвижение по позициям</TagH>
  </div>
</template>

<script>
import TagH from "../TagH/TagH.vue";
export default {
  components: { TagH },
};
</script>

<style>
.background-context {
  background-image: url("~@/assets/background-context.png");
  background-size: cover;
  height: 100%;
  padding: 80px 0;
}
@media screen and (max-width: 445px) {
  .background-context {
    background-size: cover;
    background-image: url("~@/assets/background-context-mobile.png");
    height: 100%;
  }
  .background-context h2 {
    font-size: 45px;
    padding: 0 30px;
  }
}
</style>
