<template>
  <div>
    {{consumptionData}}
    <apexchart
      id="chart"
      width="500"
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
          categories: [
            "Monday Breakfast",
            "Tuesday Breakfast",
            "Wednesday Breakfast",
            "Thursday Breakfast",
            "Friday Breakfast",
            "Saturday Breakfast",
            "Sunday Dinner",
            "Monday Dinner",
            "Tuesday Dinner",
            "Wednesday Dinner",
            "Thursday Dinner",
            "Friday Dinner",
            "Saturday Dinner",
          ],
        },
        tooltip: {
          enabled: true,
          custom: undefined,
          style: {
            fontSize: "12px",
            fontFamily: undefined,
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
        },
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
    this.consumptionData = (await ConsumptionService.getConsumptionPercentage()).data;
    this.series = [
      { name: "Consumed", data: [1,2,3,4,5,6,3,8, 9,10,11,12] },
      { name: "Wasted", data: [1,2,3,4,5,6,7,8, 9,10,11,12] },
    ];
  },
};
</script>