<template>
  <div class="tariffs__content">
    <div>
      <TagH className="tariffs__title" type="h6">{{ item.title }}</TagH>
      <img class="tariffs__image" :src="item.image" alt="" />
      <div class="tariffs__description">{{ item.description }}</div>
      <div class="tariffs__price">{{ item.price }}</div>
    </div>
    <Button text="Оставить заявку" />
  </div>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import Button from "../Buttons/Button.vue";
export default {
  components: { TagH, Button, Image },
  props: ["item"],
  data() {
    return {};
  },
};
</script>

<style>
.tariffs__content {
  padding: 39px 22px 20px 22px;
  margin-top: 45px;
  background: #93e7ff;
  border-radius: 20px;
  width: 230px;
}
.tariffs__title {
  width: 170px;
}
.tariffs__image {
  width: 114px;
  height: 114px;
  margin: 31px 0 39px 0;
}
.tariffs__content div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tariffs__content button {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 13px 31px;
  color: #000000;
  border: none;
}
.tariffs__content button:hover {
  color: red;
  background: #fff;
}
.tariffs__description {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #000000;
  width: 135px;
  margin-bottom: 15px;
}
.tariffs__price {
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #000000;
  margin-bottom: 25px;
}
</style>
