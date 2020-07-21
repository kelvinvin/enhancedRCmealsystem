<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-simple-table id="mealTable" class="tbl">
        <template>
          <thead>
            <tr>
              <th scope="col">Day</th>
              <th scope="col">Breakfast</th>
              <th scope="col">Dinner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Monday</th>
              <td>
                <div class="mealCheck" value="bfMon">-</div>
              </td>
              <td>
                <div class="mealCheck" value="diMon">-</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Tuesday</th>
              <td>
                <div class="mealCheck" value="bfTue">-</div>
              </td>
              <td>
                <div class="mealCheck" value="diTue">-</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Wednesday</th>
              <td>
                <div class="mealCheck" value="bfWed">-</div>
              </td>
              <td>
                <div class="mealCheck" value="diWed">-</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Thursday</th>
              <td>
                <div class="mealCheck" value="bfThu">-</div>
              </td>
              <td>
                <div class="mealCheck" value="diThu">-</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Friday</th>
              <td>
                <div class="mealCheck" value="bfFri">-</div>
              </td>
              <td>
                <div class="mealCheck" value="diFri">-</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Saturday</th>
              <td>
                <div class="mealCheck" value="bfSat">-</div>
              </td>
              <td>
                <div class="mealCheck" value="diSat">-</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Sunday</th>
              <td>
                <div class="mealCheck" value="bfSun">-</div>
              </td>
              <td>
                <div class="mealCheck" value="diSun">-</div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
    <v-row>
      <v-hover class="mealCredits">
        <v-card elevation="3" class="mx-auto pa-6"
          >Extra Meal Credits Left: {{ myMealPlan.extraCredit }}</v-card
        >
      </v-hover>
    </v-row>
  </v-container>
</template>

<script>
import StudentMealPlanService from "@/services/StudentMealPlanService";

export default {
  name: "MyMealPlan",
  data() {
    return {
      myMealPlan: null,
      icons: {
        blank: '<i class="mdi mdi-checkbox-blank-outline"></i>',
        tick: '<i class="mdi mdi-checkbox-marked-outline"></i>',
      },
    };
  },
  async mounted() {
    this.myMealPlan = (
      await StudentMealPlanService.getStudentMealPlan({
        userID: this.$store.state.user.id,
      })
    ).data[0];
    setTimeout(
      function() {
        var x = document.querySelectorAll(".mealCheck"),
          i;
        for (i = 0; i < x.length; i++) {
          var mealValue = x[i].attributes.value.value;
          if (this.myMealPlan[mealValue]) {
            x[i].innerHTML = this.icons.tick;
          } else {
            x[i].innerHTML = this.icons.blank;
          }
        }
      }.bind(this),
      1
    );
  },
};
</script>

<style scoped>
.mealCredits {
  font-weight: bold;
  text-align: center;
  margin: 50px;
}

#creditsCount {
  font-weight: bold;
}

.tbl {
  width: 560px;
  text-align: left;
}

.v-data-table
  tbody
  tr:hover:not(.v-data-table__expanded__content) {
  background: #ffffff !important;
}
</style>
