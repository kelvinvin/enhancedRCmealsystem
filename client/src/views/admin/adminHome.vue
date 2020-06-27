<template>
  <div class="container">
    <div>
      <WeeklyConsumption />
    </div>
    <br />
    <v-container fluid class="consumptionLine">
      <v-row>
        <v-col>
          <ConsumptionLine />
        </v-col>
        <v-col>
          <ConsumptionBar />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import WeeklyConsumption from "@/components/admin/WeeklyConsumption";
import ConsumptionLine from "@/components/graphics/linechart";
import ConsumptionBar from "@/components/graphics/barchart";

export default {
  name: "adminHome",
  components: {
    WeeklyConsumption,
    ConsumptionLine,
    ConsumptionBar,
  },
};
</script>

<style scoped>
.container {
  margin: auto;
}
</style>
