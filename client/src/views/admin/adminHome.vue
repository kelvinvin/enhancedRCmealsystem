<template>
  <div class="container">
    <br />
    <WeeklyConsumption />
    <br />
    <v-container>
      <v-row>
        <v-col>
          <ConsumptionLine />
        </v-col>
        <v-col>
          <ConsumptionBar />
        </v-col>
      </v-row>
    </v-container>
    <br />
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
