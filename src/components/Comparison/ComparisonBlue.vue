<template>
  <div class="comparison-blue">
    <TagH className="comparison-blue__title" type="h3"> Заголовок </TagH>
    <div>
      <div class="comparison-blue__row" v-for="item in items" :key="item.id">
        <div>
          <TagH type="h5">{{ item.title }}</TagH>
          <p>{{ item.description }}</p>
        </div>
        <div class="comparison-text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import TagH from "@/components/TagH/TagH.vue";
export default {
  components: { TagH },
  props: ["items"],
};
</script>

<style>
.comparison-blue__title {
  padding: 8px 0;
  margin: 45px 0 35px 0;
  border-radius: 5px;
  background: linear-gradient(0deg, #77cbfa, #77cbfa), #f4f7fe;
}
.comparison-blue__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eaecef;
}
.comparison-blue__row:last-child {
  border: none;
}
.comparison-blue__row .comparison-text {
  max-width: 411px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  opacity: 0.9;
}
.comparison-blue__row div p {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  opacity: 0.9;
}
.comparison-blue__row div {
  margin: 22px 0;
  width: 100%;
}
.comparison-blue__row div h5 {
  text-align: left;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  text-transform: uppercase;
  color: #333333;
}

@media screen and (max-width: 445px) {
  .comparison-blue__title {
    font-size: 25px;
    margin-bottom: 20px;
  }
  .comparison-blue__row {
    flex-direction: column;
  }
  .comparison-blue__row .comparison-text {
    margin-top: 0;
  }
  .comparison-blue__row div {
    text-align: left;
  }
}
</style>
