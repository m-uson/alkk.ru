<template>
  <div class="footer__content">
    <router-link :to="item.path" class="footer__title">{{
      item.title
    }}</router-link>
    <div class="list">
      <div>
        <router-link class="footer__link" to="/">{{
          item.listOne
        }}</router-link>
      </div>
      <div>
        <router-link class="footer__link" to="/">{{
          item.listTwo
        }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import TagH from "../TagH/TagH.vue";
export default {
  props: ["item"],
  components: { TagH },
};
</script>

<style>
.footer__content {
  margin-left: 60px;
}
@media screen and (max-width: 446px) {
  .footer__content {
    margin-left: 0;
    margin-top: 30px;
  }
}
.footer__content:first-child {
  margin: 0;
}
.footer__title {
  font-family: "Fira Sans Extra Condensed";
  color: #fff;
  text-align: left;
  position: relative;
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
}
.list div {
  margin-bottom: 15px;
}

.footer__title::after {
  content: "";
  width: 34px;
  height: 2px;
  background: red;
  position: absolute;
  left: 0;
  top: 50px;
}
.list {
  margin-top: 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}
.list div .footer__link {
  display: inline-block;
  color: #ffffff;
  list-style: none;
  background-image: url("~@/assets/mark-light.svg");
  background-repeat: no-repeat;
  background-position: 0 2.5px;
  padding-left: 16px;
  text-decoration: none;
}
.list div .footer__link:last-child {
  margin: 0;
}
</style>
