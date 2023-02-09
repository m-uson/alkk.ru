<template>
  <section class="comparison">
    <div class="container">
      <TagH type="h2"> Сравнение тарифов </TagH>
      <ComparisonYellow :items="items" />
      <ComparisonBlue :items="itemsBlue" />
    </div>
  </section>
</template>

<script>
import TagH from "@/components/TagH/TagH.vue";
import ComparisonYellow from "./ComparisonYellow.vue";
import ComparisonBlue from "./ComparisonBlue.vue";
export default {
  components: { TagH, ComparisonYellow, ComparisonBlue },
  setup() {
    const items = [
      {
        id: 1,
        title: "Общий аудит сайта",
        description: "SEO, юзабилити, тексты. Пример аудита",
        text: `это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую`,
      },
      {
        id: 2,
        title: "Общий аудит сайта",
        description: "Определим основных конкурентов, их ",
        text: `это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" `,
      },
      {
        id: 3,
        title: "Составление семантического ядра",
        description: "SEO, юзабилити, тексты. Пример аудита",
        text: `Некий безымянный печатник создал большую `,
      },
    ];
    const itemsBlue = [
      {
        id: 3,
        title: "Общий аудит сайта",
        description: "Определим основных конкурентов, их ",
        text: `это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" `,
      },
      {
        id: 2,
        title: "Составление семантического ядра",
        description: "SEO, юзабилити, тексты. Пример аудита",
        text: `это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" `,
      },
    ];

    return { items, itemsBlue };
  },
};
</script>

<style>
.comparison {
  padding: 80px 0;
  background: #ffff;
}
.comparison h2 {
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 100%;
  text-transform: uppercase;
  color: #333333;
}
@media screen and (max-width: 445px) {
  .comparison {
    padding: 60 0;
  }
  .comparison h2 {
    margin-bottom: 30px;
    font-size: 35px;
  }
}
</style>
