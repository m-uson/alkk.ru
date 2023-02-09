<template>
  <div class="dropdown">
    <div @click="showList = !showList" class="dropdown__label">
      {{ label }}
      <img :class="{ rotate: showList === true }" :src="arrowIcon" />
    </div>
    <ul>
      <li v-for="item in dropdownList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import arrowIcon from "@/assets/arrow.svg";
export default {
  props: ["items", "label"],
  data() {
    return {
      arrowIcon,
      dropdownList: this.$props.items,
      label: this.$props.label,
      showList: false,
    };
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: 10px;
}
.rotate {
  transform: rotate(180deg);
}
.dropdown:last-child {
  margin-right: 0;
}
.dropdown ul {
  display: none;
}
.dropdown.active ul {
  display: block;
}
.dropdown__label {
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
  opacity: 0.9;
  padding: 8px 16px;
  background: #eaecef;
  border-radius: 5px;
}
.dropdown__label img {
  margin-left: 8px;
  margin-top: 2px;
}
ul {
  position: absolute;
  z-index: 1;
  top: 45px;
  left: 0;
  background: #eaecef;
  border-radius: 10px;
  padding: 15px 5px;
  min-width: 200px;
}
li {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
  padding: 8px 16px;
  text-align: left;
}
li:hover {
  background: #ffffff;
  border-radius: 10px;
}
@media screen and (max-width: 445px) {
  .dropdown {
    width: 100%;
    margin-bottom: 8px;
  }
  .dropdown__label {
    justify-content: space-between;
  }
}
</style>
