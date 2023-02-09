<template>
  <div @click="burger = !burger" class="burger">
    <span :class="{ active: burger === true }" class="burger-first"></span>
    <span
      :class="{ active__second: burger === true }"
      class="burger-second"
    ></span>
  </div>
</template>

<script>
export default {
  props: ["burger"],
  data() {},
};
</script>

<style>
.burger {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.burger span {
  display: block;
  height: 2px;
  background: #333333;
}
.burger-first {
  width: 25px;
  margin-bottom: 8px;
}
.burger-second {
  width: 18px;
}
.active {
  transform: rotate(45deg);
  position: absolute;
  top: -1px;
  right: 0;
  transition: 0.2s;
  background-color: #fff;
}
.active__second {
  transition: 0.2s;
  min-width: 25px;
  transform: rotate(-45deg);
  position: absolute;
  bottom: -1px;
  right: 0;
  background-color: #fff;
}
</style>
