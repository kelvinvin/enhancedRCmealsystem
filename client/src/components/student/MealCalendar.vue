<template>
  <v-col>
    <v-row justify="space-around">
      <h4>Click on a date to open its respective menu</h4>
      <v-date-picker
        v-model="picker"
        :landscape="landscape"
        :reactive="reactive"
        :full-width="fullWidth"
        :show-current="showCurrent"
        :type="month ? 'month' : 'date'"
        :multiple="multiple"
        :readonly="readonly"
        :disabled="disabled"
        :events="enableEvents ? functionEvents : null"
      ></v-date-picker>
    </v-row>
    <v-row v-show="mealsFound.length != 0">
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col v-for="meal in mealsFound" :key="meal" cols="12" sm="4">
            <!-- {{ meal}} -->
            <v-card color="blue lighten-4" id="header" class="pa-2" outlined tile>
                  {{ meal.cuisineType }}
            </v-card>

            <div v-if="!!meal.mealComp1">
            <v-card class="pa-2" outlined tile>
              {{ meal.mealComp1 }}
            </v-card>
            </div>

            <div v-if="!!meal.mealComp2">
            <v-card class="pa-2" outlined tile>
              {{ meal.mealComp2 }}
            </v-card>
            </div>

            <div v-if="!!meal.mealComp3">
            <v-card class="pa-2" outlined tile>
              {{ meal.mealComp3 }}
            </v-card>
            </div>


            <div v-if="!!meal.mealComp4">
            <v-card class="pa-2" outlined tile>
              {{ meal.mealComp4 }}
            </v-card>
            </div>

            <div v-if="!!meal.mealComp5">
            <v-card class="pa-2" outlined tile>
              {{ meal.mealComp5 }}
            </v-card>
            </div>

          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-col>
</template>

<script>
import MealsService from "@/services/MealsService";

export default {
  name: "MealCalendar",
  data() {
    return {
      meals: null,
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false,
      fullWidth: true,
      showCurrent: true,
      month: false,
      multiple: false,
      readonly: false,
      disabled: false,
      enableEvents: false,
      mealsFound: [],
    };
  },
  methods: {
    menuOnDate() {
      // to empty mealsFound array
      this.mealsFound = [];
      // check meal database if menu exists
      console.log("Going through meals..");
      this.meals.forEach((meal) => {
        if (this.picker == meal.date) {
          this.mealsFound.push(meal);
        }
      });
      // if meal does not exist throw an alert
      if (this.mealsFound.length == 0) {
        alert("Dining hall is closed on this date");
      }
    },
  },
  async mounted() {
    this.meals = (await MealsService.getMeals()).data;
    this.menuOnDate();
  },
  watch: {
    // search through database only if new date is picked
    picker: {
      handler: function() {
        this.menuOnDate();
      },
    },
  },
};
</script>

<style scoped>
.table {
  margin-top: 50px;
}
</style>
