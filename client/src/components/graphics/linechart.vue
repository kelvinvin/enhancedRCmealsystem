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
          shared: true,
          intersect: false,
          inverseOrder: false,
          custom: undefined,
          fillSeriesColor: false,
          style: {
            fontSize: "12px",
            fontFamily: undefined,
          },
          onDatasetHover: {
            highlightDataSeries: false,
          },
          x: {
            show: false,
            format: "hh:mm tt dd MMM",
            formatter: undefined,
          },
          y: {
            formatter: undefined,
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
          z: {
            formatter: undefined,
            title: "Size: ",
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
