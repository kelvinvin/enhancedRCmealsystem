<template>
  <div class="container">
    <div>
      <WeeklyConsumption />
    </div>
    <div class="uploadMeal">
      <UploadMeal />
    </div>
    <div class="consumptionLine">
      <ConsumptionLine />
    </div>
  </div>
</template>

<script>
import WeeklyConsumption from "@/components/admin/WeeklyConsumption";
import UploadMeal from "@/components/admin/UploadMeal";
import ConsumptionLine from "@/components/graphics/linechart";

export default {
  name: "adminHome",
  components: {
    WeeklyConsumption,
    UploadMeal,
    ConsumptionLine
  },
};
</script>

<style scoped>
.container {
  margin: auto;
}
</style>
