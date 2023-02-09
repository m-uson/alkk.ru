<template>
  <router-link to="/">
    <img :src="logoIcon" alt="Allk.ru - интернет агенство" />
  </router-link>
</template>

<script>
import logoIcon from "@/assets/logo.svg";
export default {
  data() {
    return {
      logoIcon,
    };
  },
};
</script>

<style></style>
