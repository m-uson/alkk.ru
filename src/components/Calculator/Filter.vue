<template>
  <Dropdown
    v-for="(dropdown, index) in dropdowns"
    :class="{ active: index === openDropdownIndex }"
    @click="handleDropdownOpen(index)"
    :key="dropdown.label"
    :label="dropdown.label"
    :items="dropdown.items"
  />
</template>

<script>
import Dropdown from "../Dropdown/Dropdown.vue";
export default {
  components: { Dropdown },
  data() {
    return {
      openDropdownIndex: null,
      dropdowns: [
        {
          label: "Регион",
          items: [
            "Название Один",
            "Название Два",
            "Название Три",
            "Название Четыре",
            "Название Пять",
          ],
        },
        {
          label: "Поиск. сист.",
          items: [
            "Вурдалак",
            "Франкенштейн",
            "Название Три",
            "Название Четыре",
            "Название Пять",
          ],
        },
        {
          label: "Тематика",
          items: [
            "Название Один",
            "Название Два",
            "Название Три",
            "Название Четыре",
            "Название Пять",
          ],
        },
      ],
    };
  },
  methods: {
    handleDropdownOpen(index) {
      if (this.openDropdownIndex === index) {
        this.openDropdownIndex = null;
      } else {
        this.openDropdownIndex = index;
      }
    },
  },
};
</script>
