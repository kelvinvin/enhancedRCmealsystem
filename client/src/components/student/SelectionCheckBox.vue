<template>
  <div class="checkbox" id="mealForm">
    <header><h1>Meal Selection</h1></header>
    <p>
      Please indicate the days and meals that you require this semester.
      <br>
      Note that you have to choose at least 9 meals/ week.
    </p>
    <form action="#" method="get" id="form1">
      I would like to consume every:
      <table>
        <tr>
          <th>&nbsp;</th>
          <th><p>Monday</p></th>
          <th><p>Tuesday</p></th>
          <th><p>Wednesday</p></th>
          <th><p>Thursday</p></th>
          <th><p>Friday</p></th>
          <th><p>Saturday</p></th>
          <th><p>Sunday</p></th>
        </tr>

        <tr>
          <td>
            <p><strong>Breakfast</strong></p>
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="mondayBreakfast"
              name="bfMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="tuesdayBreakfast"
              name="bfMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="wednesdayBreakfast"
              name="bfMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="thursdayBreakfast"
              name="bfMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="fridayBreakfast"
              name="bfMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="saturdayBreakfast"
              name="bfMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="sundayBreakfast"
              name="bfMeal"
              disabled
            />
          </td>
        </tr>

        <tr>
          <td>
            <p><strong>Dinner</strong></p>
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="mondayDinner"
              name="dinMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="tuesdayDinner"
              name="dinMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="wednesdayDinner"
              name="dinMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="thursdayDinner"
              name="dinMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="fridayDinner"
              name="dinMeal"
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="saturdayDinner"
              name="dinMeal"
              disabled
            />
          </td>
          <td>
            <input
              type="checkbox"
              @change="updateCount"
              v-model="sundayDinner"
              name="dinMeal"
            />
          </td>
        </tr>
      </table>

      Please indicate if you would like to consume during recess week. Note that
      you have to opt for full-week meals in this category.
      <br />
      <div>
        <p>I would like to opt for recess week consumption:</p>
        <b-form-select v-model="recessSelect" :options="recessOptions">
        </b-form-select>
      </div>
      <br />
      <div>
        <p>Do you have any dietary requirement:</p>
        <b-form-select v-model="dietaryReqSelect" :options="dietaryReqOptions">
        </b-form-select>
      </div>
      <br />
      <div>
        <p>Extra Credits:</p>
        <b-form-select
          v-model="creditSelect"
          :options="creditOptions"
          @change="updateCount"
        >
        </b-form-select>
      </div>
      <br />
      <i>Total cost based on this semester</i>
      <p>${{ returnCost }}</p>
    </form>

    <MealPlanTnC />
    <br>
    <div class="error" v-html="error" />
    <br>
    <button
      type="submit"
      class="btn btn-primary"
      form="form1"
      value="Submit"
      @click.prevent="registerMealPlan"
    >
      Register Meal Plan
    </button>
  </div>
</template>

<script>
import MealPlanTnC from "./MealPlanTnC.vue";
import StudentMealPlan from "@/services/StudentMealPlanService";
import StudentMealPlanService from "@/services/StudentMealPlanService";
import PaymentService from "@/services/PaymentService";
import CostService from "@/services/CostService";
import SemesterYear from "@/services/SemesterYear";

export default {
  name: "SelectionCheckBox",
  components: {
    MealPlanTnC,
  },
  async mounted() {
    var registrationExisting = !!(
      await StudentMealPlanService.getStudentMealPlan({
        userID: this.$store.state.user.id,
      })
    ).data[0];
    if (registrationExisting) {
      document.getElementById("mealForm").innerHTML =
        "You have already registered for this semester's meal plan";
    }
    const cost = (await CostService.getCosts()).data.map(
      (element) => element.cost
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
      cost: 0,
      costPerMeal: 200,
      costRecessWeek: 500,
      error: null,
      recessSelect: false,
      recessOptions: [
        { value: "0", text: "No" },
        { value: "1", text: "Yes" },
      ],
      dietaryReqSelect: null,
      dietaryReqOptions: [
        { value: "none", text: "No Dietary Requirements" },
        { value: "halal", text: "Halal" },
        { value: "vegetarian", text: "Vegetarian" },
      ],
      creditSelect: 0,
      creditOptions: [
        { value: "0", text: "No extra credits needed" },
        { value: "5", text: "5" },
        { value: "10", text: "10" },
        { value: "15", text: "15" },
        { value: "20", text: "20" },
        { value: "25", text: "25" },
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

      breakfastCost: null,
      dinnerCost: null,

      currentSemester: null,
      recWeek: null,
      noRecWeek: null,
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
          UserId: authUser.id,
        });

        PaymentService.registerAmount({
          amount: this.cost,
          SemesterDaySemesterYear: this.currentSemester,
          paymentMade: false,
          UserId: authUser.id,
        });

        this.$router.push("/homepage");
        alert("Meal Registration successful");
      }
    },
  },
  computed: {
    returnCost() {
      return this.cost;
    },
  },
};
</script>

<style scoped>
table {
  border: 2px solid black;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 40px;
  width: 100%;
  align-self: center;
  text-align: center;
}

.error {
  color: red;
}
</style>
