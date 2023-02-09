<template>
  <div class="portfolio__content">
    <img :src="item.image" class="portfolio__image" />
    <TagH className="portfolio__title" type="h4">{{ item.title }}</TagH>
    <div class="portfolio__link">{{ item.link }}</div>
  </div>
</template>

<script>
import PortfolioOne from "@/assets/portfolio-1.png";
import TagH from "../TagH/TagH.vue";
export default {
  props: ["item"],
  components: { TagH },
  data() {
    return { PortfolioOne };
  },
};
</script>

<style>
.portfolio__content {
  max-width: 230px;
  background: #f5f7f9;
  border-radius: 20px;
  padding: 20px 20px 35px 20px;
  margin-top: 45px;
}
.portfolio__title {
  margin: 30px 0 7px 0;
  text-align: left;
}
@media screen and (max-width: 446px) {
  .portfolio__title {
    font-size: 20px;
  }
}
</style>
