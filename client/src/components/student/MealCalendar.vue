<template>
  <v-col>
    <v-row justify="space-around">
      <v-col>
        <v-tooltip v-model="show" left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>{{ items.icon }}</v-icon>
            </v-btn>
          </template>
          <span>
            To view menu,
            <br />click on the date in the calendar
          </span>
        </v-tooltip>
        <v-date-picker
          v-model="picker"
          :landscape="landscape"
          :reactive="reactive"
          width="480px"
          :show-current="showCurrent"
          :type="month ? 'month' : 'date'"
          :multiple="multiple"
          :readonly="readonly"
          :disabled="disabled"
          :events="enableEvents ? functionEvents : null"
        ></v-date-picker>
        <div
          v-show="breakfastsFound.length == 0 && dinnersFound.length == 0"
          class="message"
        >
          Dining Hall is not open on this day
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-container id="menuContainer">
        <v-expansion-panels
          hover
          focusable
          multiple
          v-show="breakfastsFound.length != 0 || dinnersFound.length != 0"
        >
          <v-expansion-panel v-show="breakfastsFound.length != 0">
            <v-expansion-panel-header color="orange lighten-1">
              <div class="panelHeader">Breakfast</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-container fluid>
                <v-row v-show="breakfastsFound.length != 0" no-gutters>
                  <v-col
                    v-for="meal in breakfastsFound"
                    :key="meal.Meal_Id"
                    md=""
                    cols="12"
                  >
                    <v-card
                      color="orange lighten-2"
                      id="header"
                      class="pa-2"
                      outlined
                      tile
                      >{{ meal.cuisineType }}</v-card
                    >
                    <div v-for="mealComp in mealAttributes" :key="mealComp">
                      <v-card
                        v-if="!!meal[mealComp]"
                        class="pa-2"
                        outlined
                        tile
                        >{{ meal[mealComp] }}</v-card
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel v-show="dinnersFound.length != 0">
            <v-expansion-panel-header color="blue lighten-1">
              <div class="panelHeader">Dinner</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-container>
                <v-row v-show="dinnersFound.length != 0" no-gutters>
                  <v-col
                    v-for="meal in dinnersFound"
                    :key="meal.Meal_Id"
                    md=""
                    cols="12"
                  >
                    <v-card
                      color="blue lighten-2"
                      id="header"
                      class="pa-2"
                      outlined
                      tile
                      >{{ meal.cuisineType }}</v-card
                    >
                    <div v-for="mealComp in mealAttributes" :key="mealComp">
                      <v-card
                        v-if="!!meal[mealComp]"
                        class="pa-2"
                        outlined
                        tile
                        >{{ meal[mealComp] }}</v-card
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
      items: { icon: "mdi-help-circle-outline" },
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
              "Error, meal " + meal.Meal_id + " is neither dinner nor breakfast"
            );
          }
        }
      });
    },
  },
  async mounted() {
    this.meals = (await MealsService.getMeals()).data;
    console.log("meals", this.meals);
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

.panelHeader {
  font-weight: bold;
}

.pa-2{
  min-width: 100px;
}
</style>
