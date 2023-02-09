<template>
  <div class="reviews__item">
    <img :src="item.avatar" alt="" class="reviews__image" />
    <div>
      <TagH className="reviews__title" type="h5">{{ item.title }}</TagH>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import ReviewsIcon from "@/assets/reviewIcon.svg";
import TagH from "../TagH/TagH.vue";
export default {
  props: ["item"],
  components: { TagH },
  data() {
    return { ReviewsIcon };
  },
};
</script>

<style>
.reviews__item {
  width: 139px;
}
@media screen and (max-width: 446px) {
  .reviews__item {
    display: flex;
    margin-bottom: 30px;
  }
  .reviews__image {
    margin-right: 20px;
  }
}
.reviews__image {
  width: 139px;
  height: 139px;
}
.reviews__title {
  font-weight: 500;
  font-size: 22px;
  color: #272727;
  margin: 35px 0 13px;
}
.reviews__item p {
  width: 140px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.31px;
  color: #272727;
}
@media screen and (max-width: 446px) {
  .reviews__title,
  .reviews__item p {
    text-align: left;
  }
}
</style>
