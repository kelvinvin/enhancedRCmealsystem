<template>
  <div>
    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
// import ConsumptionService from "@/services/ConsumptionService";

export default {
  name: "ConsumptionLineChart",
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "consumptionLines",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
// async mounted() {
//     this.consumptionData = (await FeedbackService.getFeedback()).data
//     for (var i = 0 ; i < this.feedbackData.length; i++) {
//       var feedbackObj = this.feedbackData[i];
//       feedbackObj.createdAt = moment(feedbackObj.createdAt).format('MM/DD/YYYY');
//       feedbackObj.breakfastOrDinner = feedbackObj.breakfastOrDinner ? "Dinner" : "Breakfast";
//       this.feedbacks.push(feedbackObj);
//     }
// }
</script>
