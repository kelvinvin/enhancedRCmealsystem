<template>
    <div class="mealSelectForm">
        <div v-if="!registered" class="selectionCheckBox"><SelectionCheckBox/></div>
        <div v-if="registered" class="MyMealPlan"><MyMealPlan/></div>
    </div>
</template>

<script>
import SelectionCheckBox from "@/components/student/SelectionCheckBox";
import MyMealPlan from "@/components/student/MyMealPlan";
import StudentMealPlanService from "@/services/StudentMealPlanService";

export default {
  name: "myMealPlan",
  components: {
    SelectionCheckBox,
    MyMealPlan,
  },
  data() {
    return {
      registered: false,
    }
  },
  async mounted() {
    this.registered = !!(
      await StudentMealPlanService.getStudentMealPlan({
        userID: this.$store.state.user.id
      })
    ).data[0];
  }
};
</script>

   

<style scoped>
    .mealSelectForm {
        margin: auto;
        max-width: 960px;
        padding: 64px;
        height: 100%;
        background-color: white;
    }

  
</style>
