<template>
  <div class="static">
    <div class="container">
      <div class="static__row">
        <ItemStatic v-for="item in newItems" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemStatic from "./ItemStatic.vue";
export default {
  components: { ItemStatic },
  setup() {
    const items = [
      {
        id: 1,
        number: 1047,
        description: "Небольшое описание в 2 строчки",
      },
      {
        id: 2,
        number: 10547,
        description: "Небольшое описание в 2 строчки",
      },
      {
        id: 3,
        number: 1047,
        description: "Небольшое описание в 2 строчки",
      },
      {
        id: 4,
        number: 10547,
        description: "Небольшое описание в 2 строчки",
      },
    ];

    const background = [
      "linear-gradient(270deg, rgba(255, 4, 4, 0.35) 0%, rgba(255, 4, 4, 0) 100%)",
      "linear-gradient(270deg, rgba(255, 215, 115, 0.65) 0%, rgba(255, 215, 115, 0) 100%)",
      "linear-gradient(270deg, rgba(163, 163, 255, 0.65) 0%, rgba(163, 163, 255, 0) 100%)",
      "linear-gradient(270deg, #FFD7CA 0%, rgba(255, 221, 202, 0) 100%)",
    ];

    const newItems = items.map((item, i) => {
      return { ...item, background: background[i] };
    });

    return { newItems };
  },
};
</script>

<style>
.static {
  padding: 62px 0;
  background: #fff;
}
.static__row {
  display: flex;
  justify-content: space-between;
}
.static__num {
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 100%;
  text-transform: uppercase;
  color: #333333;
  text-align: center;
  margin-bottom: 12px;
}
.static__description {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.31px;
  color: #272727;
  width: 140px;
  text-align: center;
}
.static__item {
  border-right: 2px solid #eaecef;
  padding-right: 60px;
}
.static__item:last-child {
  border: none;
  padding-right: 0;
}
@media screen and (max-width: 445px) {
  .static__row {
    flex-wrap: wrap;
  }
  .static__num {
    font-size: 35px;
  }
  .static__item {
    border-right: none;
    padding-right: 25px;
    margin-bottom: 60px;
  }

  .static__item:nth-child(3),
  .static__item:nth-child(4) {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
  .static__item:nth-child(2),
  .static__item:nth-child(4) {
    border-right: none;
    padding-right: 0;
  }
}
</style>
