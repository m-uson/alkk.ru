<template>
  <form>
    <input type="text" placeholder="Имя" />
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
input {
  border: 1px solid #656565;
  box-sizing: border-box;
  border-radius: 5px;
  background: #333;
  height: 49px;
  width: 314px;
  padding: 18px 15px;
  outline: none;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #eaeaea;
}
input::placeholder {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #eaeaea;
}
</style>
