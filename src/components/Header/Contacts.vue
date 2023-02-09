<template>
  <div class="contacts">
    <div class="contacts__content">
      <ul class="contacts__list">
        <li class="contacts__item">
          <img class="contacts__icon" :src="whatsappIcon" alt="Whatsapp" />
        </li>
        <li class="contacts__item">
          <img class="contacts__icon" :src="viber" alt="Viber" />
        </li>
      </ul>
      <a class="contacts__phone" href="phone:8 (444) 123-17-18"
        >8 (444) 123-17-18</a
      >
    </div>
  </div>
</template>

<script>
import whatsappIcon from "@/assets/whatsapp.svg";
import viber from "@/assets/viber.svg";
export default {
  data() {
    return {
      whatsappIcon,
      viber,
    };
  },
};
</script>

<style>
.contacts__content,
.contacts__list {
  display: flex;
}
.contacts__item {
  margin-right: 5px;
}
.contacts__item:last-child {
  margin-right: 12px;
}
.contacts__phone {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  text-underline-position: under;
  color: #333333;
}
@media screen and (max-width: 756px) {
  .contacts {
    display: none;
  }
}
@media screen and (max-width: 446px) {
  .contacts__content {
    flex-direction: column;
    align-items: center;
  }
  .contacts__phone {
    margin-top: 10px;
    color: #fff;
  }
}
</style>
