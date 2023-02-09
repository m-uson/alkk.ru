<template>
  <header :class="{ burger__header: showBurger === true }" class="header">
    <div class="container">
      <div class="header__row">
        <Logo />
        <Nav :class="{ burger__nav: showBurger === true }" />
        <Contacts :class="{ burger__contacts: showBurger === true }" />
        <div @click="showBurger = !showBurger" class="header__burger">
          <Burger
            :burger="showBurger"
            :class="{ burgerBurger: showBurger === true }"
          />
        </div>
      </div>
    </div>
    <Services :class="{ burger__services: showBurger === true }" />
  </header>
</template>
<script>
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
import Contacts from "./Contacts.vue";
import Services from "./Services.vue";
import Burger from "./Burger.vue";
export default {
  components: { Logo, Nav, Contacts, Services, Burger },
  data() {
    return { showBurger: false };
  },
};
</script>
<style>
@media screen and (max-width: 446px) {
}
.header__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
.header__burger {
  display: none;
}
@media screen and (max-width: 446px) {
  .header__burger {
    display: block;
    background: #fff;
  }
  .burger__header {
    background: #333333;
    height: 100vh;
  }
  .burgerBurger {
    position: relative;
  }
  .burger__services {
    margin-top: 60px;
    display: block;
  }
  .burger__nav {
    display: block;
    margin-top: 80px;
    position: absolute;
    top: 250px;
    left: 145px;
  }
  .burger__contacts {
    display: block;
    position: absolute;
    top: 500px;
    left: 130px;
  }
}
</style>
