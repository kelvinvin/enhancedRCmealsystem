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
        title: {
          text: "Consumption Trends (hourly)",
          align: "centre",
          margin: 10,
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
          // initial dates shown will be within a week of today's date. all data still available via panning
          range: new Date("2020-01-08").getTime() - new Date("2020-01-01").getTime()
        },
        yaxis: {
          labels: {
            formatter: function(val) {
              return val.toFixed(0);
            },
          },
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
