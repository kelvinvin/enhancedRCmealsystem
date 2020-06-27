<template>
  <apexchart
    id="chart"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
import ConsumptionService from "@/services/ConsumptionService";

export default {
  name: "ConsumptionLineChart",
  data: function() {
    return {
      consumptionData: {},
      chartOptions: {
        title: {
          text: "Consumption Trends (hourly)",
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
          id: "consumptionLines",
          zoom: {
            autoScaleYaxis: true,
          },
        },
        xaxis: {
          type: "datetime",
        },
        stroke: {
          // curve: "stepline",
        },
        markers: {
          // size: 5,
        },
        tooltip: {
          enabled: true,
          style: {
            fontSize: "12px",
          },
          x: {
            show: false,
            format: "hh:mm tt dd MMM",
          },
          y: {
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
          marker: {
            show: true,
          },
          fixed: {
            enabled: false,
            position: "topRight",
            offsetX: 0,
            offsetY: 0,
          },
        },
      },
      series: [
        {
          data: [],
        },
      ],
    };
  },
  async mounted() {
    this.consumptionData = (await ConsumptionService.getConsumption()).data;
    this.series = [{ name: "Meals Count", data: this.consumptionData }];
  },
};
</script>
