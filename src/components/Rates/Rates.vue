<template>
  <section class="rates">
    <div class="container">
      <TagH type="h2"> Сравнение тарифов </TagH>
      <div class="rates__titles">
        <span>Продвинутый</span>
        <span>Комплексный</span>
        <span>Оптимизация</span>
        <span>Потрясающий</span>
      </div>
      <Analysis :items="items" />
      <Keywords :items="itemsKeywords" />
      <div class="rates__btns">
        <div class="rates__btns-price">
          <div>
            <span>Продвинутый</span>
            <TagH type="h4">30 680 ₽</TagH>
          </div>
          <Button text="Выбрать" />
        </div>
        <div class="rates__btns-price">
          <div>
            <span>Комплексный</span>
            <TagH type="h4">21 590 ₽</TagH>
          </div>
          <Button text="Выбрать" />
        </div>
        <div class="rates__btns-price">
          <div>
            <span>Оптимизация</span>
            <TagH type="h4">21 590 ₽</TagH>
          </div>
          <Button text="Выбрать" />
        </div>
        <div class="rates__btns-price">
          <div>
            <span>Потрясающий</span>
            <TagH type="h4">13 500 ₽</TagH>
          </div>
          <Button text="Выбрать" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TagH from "@/components/TagH/TagH.vue";
import Analysis from "./Analysis.vue";
import Keywords from "./Keywords.vue";
import Button from "../Buttons/Button.vue";
export default {
  components: { TagH, Analysis, Keywords, Button },
  setup() {
    const items = [
      {
        id: 1,
        marks: [
          {
            id: 1,
            text: "Продвинутый",
            type: false,
          },
          {
            id: 2,
            text: "Комплексный",
            type: false,
          },
          {
            id: 3,
            text: "Оптимизация",
            type: true,
          },
          {
            id: 4,
            text: "Потрясающий",
            type: true,
          },
        ],
        title: "Общий аудит сайта",
        description: "SEO, юзабилити, тексты. Пример аудита",
      },
      {
        id: 2,
        marks: [
          {
            id: 1,
            text: "Продвинутый",
            type: false,
          },
          {
            id: 2,
            text: "Комплексный",
            type: false,
          },
          {
            id: 3,
            text: "Оптимизация",
            type: true,
          },
          {
            id: 4,
            text: "Потрясающий",
            type: true,
          },
        ],
        title: "Общий аудит сайта",
        description:
          "Определим основных конкурентов, их преимущества и недостатки, выстроим стратегию продвижения, без предоставления отчета",
      },
      {
        id: 3,
        marks: [
          {
            id: 1,
            text: "Продвинутый",
            type: true,
          },
          {
            id: 2,
            text: "Комплексный",
            type: true,
          },
          {
            id: 3,
            text: "Оптимизация",
            type: false,
          },
          {
            id: 4,
            text: "Потрясающий",
            type: false,
          },
        ],
        title: "Составление семантического ядра",
        description:
          "Страхуем себя и ваш сайт, чтобы ничего не пострадало. Копию храним до 3 месяцев",
      },
    ];
    const itemsKeywords = [
      {
        id: 1,
        marks: [
          {
            id: 1,
            text: "Продвинутый",
            type: false,
          },
          {
            id: 2,
            text: "Комплексный",
            type: false,
          },
          {
            id: 3,
            text: "Оптимизация",
            type: true,
          },
          {
            id: 4,
            text: "Потрясающий",
            type: true,
          },
        ],
        title: "Общий аудит сайта",
        description:
          "Определим основных конкурентов, их преимущества и недостатки, выстроим стратегию продвижения, без предоставления отчета",
      },
      {
        id: 2,
        marks: [
          {
            id: 1,
            text: "Продвинутый",
            type: true,
          },
          {
            id: 2,
            text: "Комплексный",
            type: true,
          },
          {
            id: 3,
            text: "Оптимизация",
            type: false,
          },
          {
            id: 4,
            text: "Потрясающий",
            type: false,
          },
        ],
        title: "Составление семантического ядра",
        description:
          "Страхуем себя и ваш сайт, чтобы ничего не пострадало. Копию храним до 3 месяцев",
      },
    ];

    return { items, itemsKeywords };
  },
};
</script>

<style>
.rates {
  margin: 80px 0 0;
  padding: 80px 0;
  background: #ffff;
}
.rates__btns {
  display: flex;
  justify-content: flex-end;
}
.rates__btns div h4 {
  margin-bottom: 15px;
  text-align: center;
}
.rates__btns div {
  margin-left: 10px;
}
.rates__btns button {
  padding: 8px 20px;
}

.rates__titles {
  text-align: right;
  margin: 45px 0 20px;
}
.rates__blue,
.rates__yellow {
  padding: 8px 0;
  border-radius: 5px;
}
.rates__yellow {
  background: linear-gradient(0deg, #ffd773, #ffd773), #f4f7fe;
}
.rates .rates__titles span {
  margin-left: 40px;
  font-family: Fira Sans Extra Condensed;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  color: #333333;
}
.rates__btns-price div span {
  display: none;
}
@media screen and (max-width: 445px) {
  .rates {
    padding: 60 0;
  }
  .rates h2 {
    margin-bottom: 30px;
    font-size: 35px;
  }
  .rates__titles {
    display: none;
  }
  .rates__btns {
    flex-direction: column;
  }
  .rates__btns div {
    margin-left: 0;
  }
  .rates__btns div h4 {
    margin: 3px 0 0 0;
  }
  .rates__btns-price div span {
    display: block;
    font-family: "Fira Sans Extra Condensed";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;

    color: #333333;
  }
  .rates__btns-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(0deg, #f5f7f9, #f5f7f9), #eaecef;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 20px;
  }
}
</style>
