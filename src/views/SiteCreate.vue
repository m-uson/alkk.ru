<template>
  <main>
    <Background />
    <Static />
    <ApplyForm />
    <Reviews />
    <Tariffs />
    <Rates />
    <Portfolio />
  </main>
</template>

<script>
import Calculator from "@/components/Calculator/Calculator.vue";
import Rates from "@/components/Rates/Rates.vue";
import TagH from "../components/TagH/TagH.vue";
import ApplyForm from "@/components/ApplyForm/ApplyForm.vue";
import Reviews from "@/components/Review/Reviews.vue";
import Tariffs from "@/components/Tariffs/Tariffs.vue";
import Portfolio from "@/components/Portfolio/Portfolio.vue";
import Background from "../components/Background/Background.vue";
import Static from "../components/Static/Static.vue";
export default {
  components: {
    Calculator,
    Rates,
    TagH,
    ApplyForm,
    Reviews,
    Tariffs,
    Portfolio,
    Background,
    Static,
  },
};
</script>

<style></style>
