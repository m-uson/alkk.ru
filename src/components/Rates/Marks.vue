<template>
  <div class="table__marks" v-if="marks">
    <div class="table__mark" v-for="mark in marks" :key="mark.id">
      <div v-if="mark.type === true" class="table__mark-text">
        <span class="table__text">{{ mark.text }}</span>
        <img :src="markIcon" alt="markIcon" />
      </div>
      <div v-else class="table__mark-text">
        <span class="table__text">{{ mark.text }}</span>
        <img :src="markGrayIcon" alt="markGrayIcon" />
      </div>
    </div>
  </div>
</template>

<script>
import markIcon from "@/assets/mark.svg";
import markGrayIcon from "@/assets/mark-gray.svg";
export default {
  props: ["marks"],
  data() {
    return {
      markIcon,
      markGrayIcon,
    };
  },
};
</script>

<style>
.table__marks {
  display: flex;
  width: 50%;
}
.table__mark {
  width: 25%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.table__mark div {
  border-right: 1px solid #eaecef;
  width: 100%;
}
.table__mark:last-child div {
  border: none;
}
.table__mark div img {
  width: 12px;
  height: 8px;
}
.table__text {
  display: none;
}
@media screen and (max-width: 446px) {
  .table__marks {
    width: 100%;
    flex-direction: column;
  }
  .table__mark div {
    border: none;
  }
  .table__mark-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 133px;
    margin-bottom: 12px;
  }
  .table__text {
    display: block;
    font-family: Fira Sans Extra Condensed;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #333333;
  }
}
</style>
