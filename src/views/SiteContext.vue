<template>
  <main>
    <BackgroundContext />
    <Comparison />
    <ApplyForm />
    <Text />
    <Portfolio />
  </main>
</template>

<script>
import Calculator from "@/components/Calculator/Calculator.vue";
import TagH from "../components/TagH/TagH.vue";
import ApplyForm from "@/components/ApplyForm/ApplyForm.vue";
import Comparison from "@/components/Comparison/Comparison.vue";
import Portfolio from "@/components/Portfolio/Portfolio.vue";
import BackgroundContext from "../components/Background/BackgroundContext.vue";
import Text from "../components/Text/Text.vue";
export default {
  components: {
    Calculator,
    TagH,
    ApplyForm,
    Portfolio,
    BackgroundContext,
    Comparison,
    Text,
  },
};
</script>
