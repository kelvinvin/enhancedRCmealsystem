<template>
  <div>
    <apexchart
      id="chart"
      width="500"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import ConsumptionService from "@/services/ConsumptionService";

export default {
  name: "ConsumptionLineChart",
  data: function() {
    return {
      consumptionData: {},
      chartOptions: {
        chart: {
          id: "consumptionLines",
        },
        xaxis: {
          type: "datetime",
        },
      },
      series: [
        {
          data: [
          ],
        },
      ],
    };
  },
  async mounted() {
    this.consumptionData = (await ConsumptionService.getConsumption()).data;
    this.series = [{data: this.consumptionData}];
  }
}
</script>
