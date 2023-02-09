<template>
  <div>
    <input :id="name" type="checkbox" />
    <label :for="name">
      <span :class="{ [className]: className }">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: ["name", "label"],
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
}
label {
  position: relative;
  padding-left: 34px;
  cursor: pointer;
}
label span {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
}
input {
  display: none;
}
label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
}
label:hover::before {
  filter: grayscale(100%);
  background: url("~@/assets/mark.svg") no-repeat center;
}

input:checked + label::before {
  background: url("~@/assets/mark.svg") no-repeat center;
}
input:checked + label:hover::before {
  filter: grayscale(0);
}
</style>
