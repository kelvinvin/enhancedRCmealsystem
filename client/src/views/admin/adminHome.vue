<template>
  <div class="container">
    <div>
      <WeeklyConsumption />
    </div>
    <br>
    <div class="consumptionLine">
      <ConsumptionLine />
    </div>
  </div>
</template>

<script>
import WeeklyConsumption from "@/components/admin/WeeklyConsumption";
import ConsumptionLine from "@/components/graphics/linechart";

export default {
  name: "adminHome",
  components: {
    WeeklyConsumption,
    ConsumptionLine
  },
};
</script>

<style scoped>
.container {
  margin: auto;
}
</style>
