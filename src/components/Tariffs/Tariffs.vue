<template>
  <div class="tariffs">
    <div class="container">
      <TagH className="tariffs__h2" type="h2">Тарифы</TagH>
      <div class="tariffs__row">
        <Item
          class="tariffs__content"
          v-for="item in newItems"
          :key="item"
          :style="{
            background: item.color,
          }"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import Item from "./Item.vue";
import tariffsIcon from "@/assets/tariffsIcon.svg";
import tariffsIconTwo from "@/assets/tariffsIconTwo.svg";

export default {
  components: { TagH, Item },
  setup() {
    const items = [
      {
        id: 1,
        title: "Продвижение по позициям",
        description: "Продвижение по позициям",
        price: "15000 руб",
      },
      {
        id: 2,
        title: "Продвижение по трафику",
        description: "Продвижение по позициям",
        price: "20000 руб",
      },
      {
        id: 3,
        title: "Продвижение по лидам",
        description: "Продвижение по позициям",
        price: "25000 руб",
      },
      {
        id: 4,
        title: "Продвижение по KPI",
        description: "Продвижение по позициям",
        price: "35000 руб",
      },
    ];
    const colors = ["#93E7FF", "#FFD773", "#A3A3FF", "#D1CAFF"].sort(
      () => Math.random() - 0.5
    );

    const images = [
      tariffsIcon,
      tariffsIconTwo,
      tariffsIcon,
      tariffsIconTwo,
    ].sort(() => Math.random() - 0.5);

    const newItems = items.map((item, i) => {
      return { ...item, color: colors[i], image: images[i] };
    });

    return {
      newItems,
    };
  },
};
</script>

<style>
.tariffs {
  background: #f5f7f9;
  padding: 80px 0;
}
@media screen and (max-width: 446px) {
  .tariffs {
    padding-top: 60px;
  }
}
.tariffs__row {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 446px) {
  .tariffs__row {
    flex-direction: column;
  }
}
@media screen and (max-width: 446px) {
  .tariffs__h2 {
    font-size: 35px;
    text-align: center;
  }
}
</style>
