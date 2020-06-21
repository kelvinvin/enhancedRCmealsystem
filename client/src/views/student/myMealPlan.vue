<template>
  <div class="mealSelectForm">
    <div class="SelectionCheckBox"><SelectionCheckBox /></div>
    <div class="MyMealPlan"><MyMealPlan /></div>
  </div>
</template>

<script>
import SelectionCheckBox from "@/components/student/SelectionCheckBox";
import MyMealPlan from "@/components/student/MyMealPlan";

export default {
  name: "myMealPlan",
  components: {
    SelectionCheckBox,
    MyMealPlan,
  },
};
</script>

<style scoped>
.mealSelectForm {
  margin: auto;
  max-width: 960px;
  padding: 30px;
}
</style>
