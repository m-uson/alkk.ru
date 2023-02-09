<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: "Gilroy", "Fira Sans Extra Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(0deg, #f5f7f9, #f5f7f9), #ece8e5;
  color: #333333;
}

.container {
  max-width: 980px;
  margin: 0 auto;
}
@media screen and (max-width: 776px) {
  .container {
    max-width: 375px;
    padding: 0 20px;
  }
}

img {
  max-width: 100%;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
