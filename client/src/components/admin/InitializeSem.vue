<template>
  <v-container>
    <!-- Select Semester drop down -->
    <p>Select Academic Year:</p>
    <v-select dense solo v-model="AcadYear" :items="AcadYearOptions" @change="fetchWeeks"></v-select>

    <!-- Data fetched from database -->
    <h2>{{AcadYear}}</h2>
    <p>Breakfast Cost/ meal: {{fetchedBreakfastCost}}</p>
    <p>Dinner Cost/ meal: {{fetchedDinnerCost}}</p>
    <p>Total weeks with recess week: {{recWeeks}}</p>
    <p>Total weeks without recess week: {{noRecWeeks}}</p>
    <hr />

    <!-- Initialize -->
    <v-btn
      id="initializeBtn"
      color="orange lighten-1"
      @click.prevent="initializeCost"
    >INITIALIZE COST</v-btn>
    <v-btn
      color="orange lighten-1"
      id="initializeBtn"
      solo
      @click.prevent="initializeSemester"
    >INITIALIZE NEW SEMESTER</v-btn>
    <v-container>
      <div class="updateCostForm" v-if="initialize">
        <div>
          <v-text-field
            label="Enter breakfast cost to be updated"
            v-model="breakfastCost"
            hide-details="auto"
            solo
            type="number"
            prefix="$"
          ></v-text-field>
          <v-btn
            class="ma-2"
            solo
            color="orange lighten-3"
            @click.prevent="updateBreakfastCost"
          >Update</v-btn>
        </div>
        <br>
        <div>
          <v-text-field
            label="Enter dinner cost to be updated"
            v-model="dinnerCost"
            hide-details="auto"
            solo
            type="number"
            prefix="$"
          ></v-text-field>
          <v-btn class="ma-2" solo color="orange lighten-3" @click.prevent="updateDinnerCost">Update</v-btn>
        </div>
      </div>
    </v-container>

      <AddSemester v-if="semester"/>
   
  </v-container>
</template>

<script>
import CostService from "@/services/CostService";
import SemesterYear from "@/services/SemesterYear";
import AddSemester from "./AddSemester";

export default {
  name: "InitializeSem",
  components: {
    AddSemester
  },
  data() {
    return {
      breakfastCost: null,
      dinnerCost: null,
      initialize: false,
      semester: false,
      error: null,
      AcadYear: null,
      AcadYearOptions: [],
      fetchedBreakfastCost: null,
      fetchedDinnerCost: null,
      recWeeks: null,
      noRecWeeks: null
    };
  },
  methods: {
    initializeCost() {
      this.semester = false;
      this.initialize = !this.initialize;
    },
    initializeSemester() {
      this.initialize = false;
      this.semester = !this.semester;
    },
    updateBreakfastCost() {
      CostService.updateBreakfastCost({
        breakfastOrDinner: "0",
        cost: this.breakfastCost
      });
      window.location.reload();
    },
    updateDinnerCost() {
      CostService.updateDinnerCost({
        breakfastOrDinner: "1",
        cost: this.dinnerCost
      });
      window.location.reload();
    },
    async fetchWeeks(value) {
      const weeks = (await SemesterYear.getWeeks({ semesterYear: value })).data;
      this.recWeeks = weeks.totalWeeksWithRecWeek;
      this.noRecWeeks = weeks.totalWeeksWithoutRecWeek;
    }
  },
  async mounted() {
    this.AcadYearOptions = (await SemesterYear.getSemesters()).data.map(
      element => element.semesterYear
    );
    const cost = (await CostService.getCosts()).data.map(
      element => element.cost
    );
    this.fetchedBreakfastCost = cost[0];
    this.fetchedDinnerCost = cost[1];
  }
};
</script>

<style scoped>
.ma-2 {
  margin-top: 15px;
}

.updateCostForm {
  max-width: 70%;
}

#initializeBtn {
  margin: 10px;
}

</style>