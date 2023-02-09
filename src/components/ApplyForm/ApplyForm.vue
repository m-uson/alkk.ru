<template>
  <div class="apply-form">
    <div class="container">
      <TagH className="apply-form__title" type="h2">Форма заявки</TagH>
      <form class="apply-form__form">
        <div class="apply-form__input">
          <div><Input /></div>
          <div><Input /></div>
          <div><Input /></div>
          <div><Input /></div>
        </div>
        <div class="apply-form__btn">
          <Checkbox
            className="apply-form__checkbox"
            label="Нажимая на кнопку, вы соглашаетесь с нашей политикой обработки"
            name="apply-form"
          />
          <Button text="Оставить заявку" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TagH from "@/components/TagH/TagH.vue";
import Input from "../Inputs/Input.vue";
import Checkbox from "../Inputs/Checkbox.vue";
import Button from "../Buttons/Button.vue";
export default {
  components: { TagH, Input, Checkbox, Button },
};
</script>

<style>
.apply-form {
  background: #333;
  padding: 80px 0;
}
@media screen and (max-width: 446px) {
  .apply-form {
    padding: 60px 0;
    height: 556px;
  }
}
.apply-form__title {
  color: #fff;
}
@media screen and (max-width: 446px) {
  .apply-form__title {
    font-size: 35px;
  }
}
.apply-form__form {
  margin-top: 44px;
  display: flex;
  height: 120px;
}
@media screen and (max-width: 446px) {
  .apply-form__title {
    font-size: 35px;
  }
  .apply-form__form {
    flex-wrap: wrap;
  }
}
.apply-form__input {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  width: 648px;
}
@media screen and (max-width: 446px) {
  .apply-form__input div input {
    margin-bottom: 10px;
    width: 100%;
  }
}

.apply-form__input div {
  margin-right: 20px;
}
@media screen and (max-width: 446px) {
  .apply-form__input div {
    margin-right: 0;
  }
}
.apply-form__input div:nth-child(3),
.apply-form__input div:nth-child(4) {
  margin: 0;
}
.apply-form__btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  width: 314px;
}
@media screen and (max-width: 446px) {
  .apply-form__btn {
    flex-direction: column-reverse;
    margin: 30px 0 0 0;
    width: 100%;
  }
}
.apply-form__btn button {
  width: 314px;
  background: #ff0404;
  color: #fff;
}
@media screen and (max-width: 446px) {
  .apply-form__btn button {
    margin: 0 0 20px 0;
    width: 100%;
  }
}
.apply-form__btn button:hover {
  background: #fff;
  color: #ff0404;
}
.apply-form .apply-form__checkbox span {
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.9;
}
.apply-form .apply-form__checkbox label::before {
  top: 50%;
  transform: translateY(-50%);
}
</style>
