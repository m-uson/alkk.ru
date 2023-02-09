<template>
  <div class="reviews">
    <div class="container">
      <div class="reviews__row">
        <Item v-for="item in items" :key="item" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import ReviewsIcon from "@/assets/reviewIcon.svg";
export default {
  components: { Item },
  data() {
    return {
      items: [
        {
          id: 1,
          avatar: ReviewsIcon,
          title: "Заголовок #1",
          description: "Небольшое описание в 2 строчки",
        },
        {
          id: 2,
          avatar: ReviewsIcon,
          title: "Заголовок #2",
          description: "Небольшое описание в 2 строчки",
        },
        {
          id: 3,
          avatar: ReviewsIcon,
          title: "Заголовок #3",
          description: "Небольшое описание в 2 строчки",
        },
        {
          id: 4,
          avatar: ReviewsIcon,
          title: "Заголовок #4",
          description: "Покупатель некоего товара.",
        },
      ],
    };
  },
};
</script>

<style>
.reviews {
  padding: 80px 0;
  background: #fff;
}
.reviews__row {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 446px) {
  .reviews__row {
    flex-direction: column;
  }
}
</style>
