<template>
  <div class="checkbox" id="mealForm">
    <header>
      <v-alert v-show="error != null" type="error">{{error}}</v-alert>
      <h1>Meal Registeration</h1>
    </header>
    <div class="wordSection">
      Please indicate the days of meals that you require this semester.
      <br />Note that you have to choose at least 9 meals/ week.
    </div>
    <v-form action="#" method="get" id="form1">
      <v-simple-table class="tableMeal">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>
              <strong>Monday</strong>
            </th>
            <th>
              <strong>Tuesday</strong>
            </th>
            <th>
              <strong>Wednesday</strong>
            </th>
            <th>
              <strong>Thursday</strong>
            </th>
            <th>
              <strong>Friday</strong>
            </th>
            <th>
              <strong>Saturday</strong>
            </th>
            <th>
              <strong>Sunday</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Breakfast</strong>
            </td>
            <td>
              <v-checkbox color="primary" v-model="mondayBreakfast" name="bfMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="tuesdayBreakfast" name="bfMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="wednesdayBreakfast" name="bfMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="thursdayBreakfast" name="bfMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="fridayBreakfast" name="bfMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="saturdayBreakfast" name="bfMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="sundayBreakfast" name="bfMeal" disabled />
            </td>
          </tr>

          <tr>
            <td>
              <p>
                <strong>Dinner</strong>
              </p>
            </td>
            <td>
              <v-checkbox color="primary" v-model="mondayDinner" name="dinMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="tuesdayDinner" name="dinMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="wednesdayDinner" name="dinMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="thursdayDinner" name="dinMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="fridayDinner" name="dinMeal" />
            </td>
            <td>
              <v-checkbox color="primary" v-model="saturdayDinner" name="dinMeal" disabled />
            </td>
            <td>
              <v-checkbox color="primary" v-model="sundayDinner" name="dinMeal" />
            </td>
          </tr>
        </tbody>
      </v-simple-table>

      <div class="wordSection">
        <span>
          I would like to opt for recess week consumption:
          <v-tooltip v-model="show" top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>{{items.icon}}</v-icon>
              </v-btn>
            </template>
            <span>Note that you have to opt for all the meals during recess week.</span>
          </v-tooltip>
        
        <v-radio-group v-model="recessSelect" row>
          <v-radio label="Yes" value="1"></v-radio>
          <v-radio label="No" value="0"></v-radio>
        </v-radio-group>
        </span>
      </div>
      <div class="wordSection">
        Dietary requirement:
        <v-select dense outlined v-model="dietaryReqSelect" :items="dietaryReqOptions"></v-select>
      </div>
      <div class="wordSection">
        <span>
          Extra Credits:
          <v-tooltip v-model="show" top max-width="400px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>{{items.icon}}</v-icon>
              </v-btn>
            </template>
            <span>
              This Extra Credits will be deducted from your account
              when you consume meals during days that you do not register for,
              or when you choose to consume more than one meal during a session.
              You can only register extra credits now - before the semester commences.
            </span>
          </v-tooltip>
        </span>
        <v-select dense outlined v-model="creditSelect" :items="creditOptions"></v-select>
      </div>
      <v-btn class="costButton" @click.prevent="updateCount">Calculate Cost</v-btn>
      <h4>Cost: ${{ returnCost }}</h4>
      
      <MealPlanTnC />
      <br />
      <!-- <div class="error" v-html="error" /> -->
      <br />
      <v-btn
        color="primary"
        type="submit"
        form="form1"
        value="Submit"
        @click.prevent="registerMealPlan"
      >Register Meal Plan</v-btn>
      
    </v-form>
  </div>
</template>

<script>
import MealPlanTnC from "./MealPlanTnC.vue";
import StudentMealPlan from "@/services/StudentMealPlanService";
import PaymentService from "@/services/PaymentService";
import CostService from "@/services/CostService";
import SemesterYear from "@/services/SemesterYear";

export default {
  name: "SelectionCheckBox",
  components: {
    MealPlanTnC
  },
  async mounted() {
    const cost = (await CostService.getCosts()).data.map(
      element => element.cost
    );
    this.breakfastCost = cost[0];
    this.dinnerCost = cost[1];

    const res = (await SemesterYear.getCurrentSem()).data;
    this.currentSemester = res.semesterYear;
    this.recWeek = res.totalWeeksWithRecWeek;
    this.noRecWeek = res.totalWeeksWithoutRecWeek;
  },
  data() {
    return {
      items: { icon: "mdi-help-circle-outline" },
      cost: 0,
      error: null,
      dietaryReqSelect: null,
      dietaryReqOptions: [
        { value: "none", text: "No Dietary Requirements" },
        { value: "halal", text: "Halal" },
        { value: "vegetarian", text: "Vegetarian" }
      ],
      creditSelect: 0,
      creditOptions: [
        { value: "0", text: "No extra credits needed" },
        { value: "5", text: "5" },
        { value: "10", text: "10" },
        { value: "15", text: "15" },
        { value: "20", text: "20" },
        { value: "25", text: "25" }
      ],
      mondayBreakfast: false,
      mondayDinner: false,
      tuesdayBreakfast: false,
      tuesdayDinner: false,
      wednesdayBreakfast: false,
      wednesdayDinner: false,
      thursdayBreakfast: false,
      thursdayDinner: false,
      fridayBreakfast: false,
      fridayDinner: false,
      saturdayBreakfast: false,
      saturdayDinner: false,
      sundayBreakfast: false,
      sundayDinner: false,

      breakfastCost: 0,
      dinnerCost: 0,

      currentSemester: null,
      recWeek: null,
      noRecWeek: null
    };
  },
  methods: {
    updateCount() {
      var noOfBreakfast = document.querySelectorAll(
        "input[name=bfMeal]:checked"
      ).length;
      var noOfDinner = document.querySelectorAll("input[name=dinMeal]:checked")
        .length;
      if (this.recessSelect == "1") {
        this.cost =
          (this.breakfastCost * noOfBreakfast + this.dinnerCost * noOfDinner) *
          this.recWeek;
      } else {
        this.cost =
          (this.breakfastCost * noOfBreakfast + this.dinnerCost * noOfDinner) *
          this.noRecWeek;
      }
      this.cost += this.creditSelect * this.dinnerCost;
    },
    registerMealPlan() {
      var bfMealsSelected = document.querySelectorAll(
        "input[name=bfMeal]:checked"
      ).length;
      var dinMealsSelected = document.querySelectorAll(
        "input[name=dinMeal]:checked"
      ).length;
      var mealsSelected = bfMealsSelected + dinMealsSelected;
      var termsAndCond = document.getElementById("agree").checked;
      if (mealsSelected < 9) {
        this.error =
          "Please ensure that you have indicated at least 9 meals/week";
      } else if (this.recessSelect == null) {
        this.error =
          "Please ensure that you have indicated recess week meal plan";
      } else if (this.dietaryReqSelect == null) {
        this.error = "Please indicate if you have any dietary requirement";
      } else if (!termsAndCond) {
        this.error =
          "Please ensure that you have read the terms and conditions above";
      } else {
        const authUser = this.$store.state.user;
        StudentMealPlan.registerMealPlan({
          recessWeek: this.recessSelect,
          dietaryRequirement: this.dietaryReqSelect,
          breakfastMonday: this.mondayBreakfast,
          breakfastTuesday: this.tuesdayBreakfast,
          breakfastWednesday: this.wednesdayBreakfast,
          breakfastThursday: this.thursdayBreakfast,
          breakfastFriday: this.fridayBreakfast,
          breakfastSaturday: this.saturdayBreakfast,
          dinnerSunday: this.sundayDinner,
          dinnerMonday: this.mondayDinner,
          dinnerTuesday: this.tuesdayDinner,
          dinnerWednesday: this.wednesdayDinner,
          dinnerThursday: this.thursdayDinner,
          dinnerFriday: this.fridayDinner,
          extraCredit: this.creditSelect,
          UserId: authUser.id
        });

        PaymentService.registerAmount({
          amount: this.cost,
          SemesterDaySemesterYear: this.currentSemester,
          paymentMade: false,
          UserId: authUser.id
        });

        this.$router.push("/homepage");
        alert("Meal Registration successful");
      }
    }
  },
  computed: {
    returnCost() {
      return this.cost;
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}

.costButton {
  margin-bottom: 24px;
}

.tableMeal {
  margin-bottom: 24px;
}
</style>
