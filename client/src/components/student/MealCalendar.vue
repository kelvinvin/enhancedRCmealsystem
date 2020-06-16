<template>
  <v-col>
    <v-row justify="space-around">
      <v-col>
        <h4>Click on a date to open its respective menu</h4>
        <v-date-picker
          v-model="picker"
          :landscape="landscape"
          :reactive="reactive"
          width="450px"
          :show-current="showCurrent"
          :type="month ? 'month' : 'date'"
          :multiple="multiple"
          :readonly="readonly"
          :disabled="disabled"
          :events="enableEvents ? functionEvents : null"
        ></v-date-picker>
      </v-col>
    </v-row>
    <v-row>
      <v-container class="grey lighten-5">
        <div v-show="breakfastsFound.length == 0 && dinnersFound.length== 0" class="message"> No meals found </div>
        <div v-show="breakfastsFound.length != 0" class="message">Breakfast</div>
        <v-row v-show="breakfastsFound.length != 0" no-gutters>
          <v-col v-for="meal in breakfastsFound" :key="meal" cols="12" sm="2">
            <v-card
              color=
              id="header"
              class="pa-2"
              outlined
              tile
            >
              {{ meal.cuisineType }}
            </v-card>

            <div v-for="mealComp in mealAttributes" :key="mealComp">
              <v-card v-if="!!meal[mealComp]" class="pa-2" outlined tile>
                {{ meal[mealComp] }}
              </v-card>
            </div>
          </v-col>
        </v-row>

        <div v-show="dinnersFound.length != 0" class="message">Dinner</div>
        <v-row v-show="dinnersFound.length != 0" no-gutters>
          <v-col v-for="meal in dinnersFound" :key="meal" cols="12" sm="2">
            <v-card
              color="blue lighten-2"
              id="header"
              class="pa-2"
              outlined
              tile
            >
              {{ meal.cuisineType }}
            </v-card>

            <div v-for="mealComp in mealAttributes" :key="mealComp">
              <v-card v-if="!!meal[mealComp]" class="pa-2" outlined tile>
                {{ meal[mealComp] }}
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
      breakfastsFound: [],
      dinnersFound: [],
      mealAttributes: [
        "mealComp1",
        "mealComp2",
        "mealComp3",
        "mealComp4",
        "mealComp5",
      ],
    };
  },
  methods: {
    menuOnDate() {
      // to empty breakfastsFound array
      this.breakfastsFound = [];
      this.dinnersFound = [];
      // check meal database if menu exists
      console.log("Going through meals..");
      this.meals.forEach((meal) => {
        if (this.picker == meal.date) {
          if (meal.breakfastOrDinner == 0) {
            this.breakfastsFound.push(meal);
          } else if (meal.breakfastOrDinner == 1) {
            this.dinnersFound.push(meal);
          } else {
            console.log(
              "Error, meal " + meal.Meal_id + "is neither dinner nor breakfast"
            );
          }
        }
      });
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

.message {
  /* font-style: italic; */
  font-weight: bold;
  text-align: center;
  color: black;
  font-size: medium;
  line-height: 50px;
}
</style>
