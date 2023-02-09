<template>
  <div class="services">
    <ul class="services__row">
      <li class="services__item" v-for="item in servicesItems" :key="item.id">
        <router-link :to="item.path" class="services__link">{{
          item.label
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicesItems: [
        {
          id: 1,
          label: "Продвижение сайтов",
          path: "/",
        },
        {
          id: 2,
          label: "Создание сайтов",
          path: "/site-creating",
        },
        {
          id: 3,
          label: "Контекстная реклама",
          path: "/context-ads",
        },
      ],
    };
  },
};
</script>

<style>
.services {
  background-color: #333333;
  padding: 8px 0;
}
.services__row {
  display: flex;
  justify-content: center;
}
.services__item {
  margin-right: 56px;
}
.services__item:last-child {
  margin-right: 0;
}
.services__link {
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
}
@media screen and (max-width: 756px) {
  .services {
    display: none;
  }
}
@media screen and (max-width: 446px) {
  .services__row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .services__link {
    font-size: 20px;
    line-height: 150%;
  }
  .services__item {
    margin: 0 0 20px 0;
  }
}
</style>
