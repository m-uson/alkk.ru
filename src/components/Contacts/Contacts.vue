<template>
  <div class="contact">
    <div class="container">
      <TagH type="h2">Контакты</TagH>
      <div class="contact-content">
        <div class="contact-office">
          <img :src="MapIcon" />
          <div>
            <p class="contact-title">Офис:</p>
            <p class="contact-office-text">
              Москва, Пресненский район, Краснопресненская Набережная
            </p>
          </div>
        </div>
        <div class="contact-office">
          <img :src="CallIcon" />
          <div>
            <p class="contact-title">Телефон:</p>
            <p class="contact-office-text">
              +7 (499) 112-41-44, <br />
              +7 (499) 256-75-65
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagH from "../../components/TagH/TagH.vue";
import MapIcon from "@/assets/map.svg";
import CallIcon from "@/assets/call.svg";
export default {
  components: { TagH },
  data() {
    return { MapIcon, CallIcon };
  },
};
</script>

<style>
.contact {
  padding: 80px 0;
  background: linear-gradient(0deg, #f5f7f9, #f5f7f9), #ece8e5;
}
.contact-content {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.contact-office div {
  display: flex;
  flex-direction: column;
}
.contact-title {
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  text-transform: uppercase;
  color: #333333;
  margin-bottom: 10px;
}
.contact-office {
  background: #ffffff;
  border-radius: 20px;
  padding: 30px 24px;
  display: flex;
  width: 472px;
  box-sizing: border-box;
}
.contact-office img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.contact-office-text {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  opacity: 0.9;
}
@media screen and (max-width: 776px) {
  .contact-content {
    flex-wrap: wrap;
  }
  .contact-office {
    padding: 30px 20px;
    margin-bottom: 15px;
  }
}
</style>
