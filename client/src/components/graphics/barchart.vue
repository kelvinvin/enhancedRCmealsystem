<template>
  <apexchart id="chart" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import ConsumptionService from "@/services/ConsumptionService";

export default {
  name: "ConsumptionLineChart",
  data: function() {
    return {
      consumptionData: {},
      chartOptions: {
        colors: [
          "#0bd626", // consumed color
          "#c20000", // wasted color]
        ],
        title: {
          text: "Consumption Percentage",
          align: "left",
          margin: 10,
          offsetX: 100,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            color: "#263238",
          },
        },
        chart: {
          id: "consumptionBar",
          type: "bar",
          stacked: true,
          stackType: "100%",
        },
        xaxis: {
          type: "category",
        },
        tooltip: {
          enabled: true,
          custom: undefined,
          style: {
            fontSize: "12px",
            fontFamily: undefined,
          },
          y: {
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
        }
      },
      series: [
        {
          name: "Consumed",
          data: [],
        },
        {
          name: "Wasted",
          data: [],
        },
      ],
    };
  },
  async mounted() {
    this.consumptionData = (
      await ConsumptionService.getConsumptionPercentage()
    ).data;
    this.series = [
      {
        name: "Consumed",
        data: this.consumptionData[0],
      },
      {
        name: "Wasted",
        data: this.consumptionData[1],
      },
    ];
  },
};
</script>
