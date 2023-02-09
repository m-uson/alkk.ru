<template>
  <div class="text">
    <div class="container">
      <TagH type="h2">Текстовый текст</TagH>
      <div class="text-content">
        <div v-for="text in texts" :key="text" class="text-container">
          <div class="text-title">{{ text.title }}</div>
          <div class="text-description">{{ text.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagH from "../../components/TagH/TagH.vue";
export default {
  components: { TagH },
  data() {
    return {
      texts: [
        {
          id: 1,
          title: "Что такое Lorem Ipsum?",
          description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
        },
        {
          id: 2,
          title: "Почему он используется?",
          description: `Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).`,
        },
        {
          id: 3,
          title: "Почему он используется?",
          description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
        },
      ],
    };
  },
};
</script>

<style>
.text {
  padding: 80px 0;
  background: linear-gradient(0deg, #f5f7f9, #f5f7f9), #ece8e5;
}
.text h2 {
  margin-bottom: 45px;
}
.text-content {
  padding: 45px 100px 5px 100px;
  background: linear-gradient(0deg, #ffffff, #ffffff), #f4f7fe;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
}
.text-title {
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 100%;
  text-transform: uppercase;
  color: #333333;
  margin-bottom: 20px;
}
.text-description {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: #333333;
  opacity: 0.9;
  margin-bottom: 40px;
}
@media screen and (max-width: 446px) {
  .text {
    padding: 60px 0;
  }
  .text h2 {
    font-size: 25px;
  }
  .text-title {
    font-size: 25px;
  }
  .text-content {
    padding: 45px 20px 5px 20px;
  }
}
</style>
