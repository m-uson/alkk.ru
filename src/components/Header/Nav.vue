<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item" v-for="(item, index) in navItems" :key="item">
        <router-link :to="item.path" class="nav__link" href="#">
          {{ item.label }}
        </router-link>
        <span v-if="index !== navItems.length - 1">/</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          id: 1,
          label: "Акции",
          path: "/",
        },
        {
          id: 2,
          label: "О компании",
          path: "/",
        },
        {
          id: 3,
          label: "Контакты",
          path: "/contacts",
        },
      ],
    };
  },
};
</script>

<style>
.nav__list {
  display: flex;
}

.nav__link + span {
  margin-right: 25px;
  margin-left: 25px;
}

.nav__link,
.nav__link + span {
  display: inline-block;
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #333333;
  text-decoration: none;
}
.nav__item:first-child .nav__link {
  margin-left: 0;
}
@media screen and (max-width: 756px) {
  .nav {
    display: none;
  }
  .nav__list {
    flex-direction: column;
    align-items: center;
  }
  .nav__item {
    margin-bottom: 20px;
  }
  .nav__link {
    font-size: 16px;
    line-height: 19px;
    color: #fff;
  }
  .nav__item span {
    display: none;
  }
}
</style>
