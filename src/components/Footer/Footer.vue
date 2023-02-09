<template>
  <section class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <router-link to="/">
          <img :src="Logo" class="footer__logo" />
        </router-link>
        <div class="footer__row">
          <Item v-for="item in items" :key="item" :item="item" />
        </div>
      </div>
      <div class="footer__bottom">
        <div>с 2021. ALKK</div>
        <router-link to="/contacts" class="footer__map"
          >Карта сайта</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "@/assets/logoIcon.svg";
import Item from "./Item.vue";
export default {
  components: { Item },
  data() {
    return {
      Logo,
      items: [
        {
          id: 1,
          title: "Продвижение сайтов",
          path: "/",
          listOne: "По позициям",
          listTwo: "По трафику",
        },
        {
          id: 2,
          title: "Создание сайтов",
          path: "/site-creating",
          listOne: "Визитки",
          listTwo: "Каталог",
        },
        {
          id: 3,
          title: "Контекстная реклама ",
          path: "/context-ads",
          listOne: "Яндекс Директ",
          listTwo: "Google Adwords",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  background: #333333;
  padding: 80px 0 24px 0;
}
.footer__container {
  max-width: 1180px;
  margin: 0 auto;
}
@media screen and (max-width: 446px) {
  .footer {
    padding: 60px 0 24px 0;
  }
  .footer__container {
    max-width: 375px;
    padding: 0 20px;
  }
}
.footer__body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 80px;
  padding-right: 140px;
}
@media screen and (max-width: 446px) {
  .footer__body {
    flex-direction: column;
    padding-right: 0;
    margin-bottom: 40px;
  }
}
.footer__row {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 446px) {
  .footer__row {
    flex-direction: column;
  }
  img {
    margin-bottom: 40px;
  }
}
.footer__bottom {
  border-top: 1px solid #666666;
  display: flex;
  justify-content: space-between;
}
.footer__bottom div {
  margin-top: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.footer__map {
  margin-top: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
}
</style>
