<template>
  <h1 :class="{ [className]: className }" v-if="type === 'h1'"><slot /></h1>
  <h2 :class="{ [className]: className }" v-if="type === 'h2'"><slot /></h2>
  <h3 :class="{ [className]: className }" v-if="type === 'h3'"><slot /></h3>
  <h4 :class="{ [className]: className }" v-if="type === 'h4'"><slot /></h4>
  <h5 :class="{ [className]: className }" v-if="type === 'h5'"><slot /></h5>
  <h6 :class="{ [className]: className }" v-if="type === 'h6'"><slot /></h6>
</template>

<script>
export default {
  props: ["type", "className"],
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  line-height: 100%;
  text-transform: uppercase;
  color: #333333;
  text-align: center;
  font-weight: 700;
}
h1 {
  font-size: 55px;
}
h2 {
  font-size: 50px;
}
h3 {
  font-size: 30px;
}
h4 {
  font-size: 24px;
}
h5 {
  font-size: 22px;
}
h6 {
  font-size: 20px;
}
</style>
