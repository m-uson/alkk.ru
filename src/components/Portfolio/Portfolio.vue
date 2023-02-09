<template>
  <section class="portfolio">
    <div class="container">
      <TagH className="portfolio__h2" type="h2">Н2 - ПОРТФОЛИО САЙТОВ</TagH>
      <div>
        <Item v-for="item in items" :key="item" :item="item" />
      </div>
    </div>
  </section>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import Item from "./Item.vue";
import PortfolioOne from "@/assets/portfolio-1.png";
import PortfolioTwo from "@/assets/portfolio-2.png";
import PortfolioThree from "@/assets/portfolio-3.png";
import PortfolioFour from "@/assets/portfolio-4.png";
export default {
  components: { TagH, Item },
  data() {
    return {
      items: [
        {
          id: 1,
          image: PortfolioOne,
          title: "Продвижение по позициям",
          link: "ecutools.ru",
        },
        {
          id: 2,
          image: PortfolioTwo,
          title: "Продвижение по позициям",
          link: "ecutools.ru",
        },
        {
          id: 3,
          image: PortfolioThree,
          title: "Продвижение по позициям",
          link: "ecutools.ru",
        },
        {
          id: 4,
          image: PortfolioFour,
          title: "Продвижение по позициям",
          link: "ecutools.ru",
        },
      ],
    };
  },
};
</script>

<style>
.portfolio {
  padding: 85px 0 80px 0;
  background: #fff;
}
@media screen and (max-width: 446px) {
  .portfolio {
    padding-top: 60px;
  }
}
.portfolio__row {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 446px) {
  .portfolio__h2 {
    font-size: 33px;
    text-align: center;
  }
}
</style>
