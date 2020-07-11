<template>
<v-container>
  <v-row>
    <v-col>
    <div class="title">
      Upload Meals
    </div>
    <div v-if="submitted" class="alert alert-success">
      <strong>Success!</strong> Meal has been uploaded!
    </div>
    <div class="error" v-html="error" />
    <div class="row">
      <!-- Date to select -->
      <div class="col-md-12">
        <p>Choose your date to add meal</p>
        <date-picker v-model="date" :config="options"></date-picker>
      </div>
    </div>
    <br />
    <!-- Options for bfast/ dinner -->
    <div>
      <b-form-group label="Select Menu Time:">
        <b-form-radio v-model="mealTiming" name="menu-time" value="0"
          >Breakfast</b-form-radio
        >
        <b-form-radio v-model="mealTiming" name="menu-time" value="1"
          >Dinner</b-form-radio
        >
      </b-form-group>
    </div>

    <!-- Menu type -->
    <div v-if="mealTiming == 0">
      <p>Select Cuisine type:</p>
      <b-form-select
        v-model="dropDownSelect"
        :options="dropDownOptionsBreakfast"
      >
      </b-form-select>
    </div>
    <div v-if="mealTiming == 1">
      <p>Select Cuisine type:</p>
      <b-form-select v-model="dropDownSelect" :options="dropDownOptionsDinner">
      </b-form-select>
    </div>
    <br />
    <div class="mealComponents">
      <!-- Meal components section -->
      <v-text-field solo v-model="mealComp1" label="Meal component 1"></v-text-field>
      <v-text-field
      solo
        v-model="mealComp2"
        :disabled="!validMealComp2"
        label="Meal component 2"
      ></v-text-field>
      <v-text-field
      solo
        v-model="mealComp3"
        :disabled="!validMealComp3"
        label="Meal component 3"
      ></v-text-field>
      <v-text-field
      solo
        v-model="mealComp4"
        :disabled="!validMealComp4"
        label="Meal component 4"
      ></v-text-field>
      <v-text-field
      solo
        v-model="mealComp5"
        :disabled="!validMealComp5"
        label="Meal component 5"
      ></v-text-field>
    </div>

    <v-btn class="ma-2" solo color="orange lighten-1" @click.prevent="addMeal"
      >Add Meal</v-btn
    >
    <v-card height="60px" color="transparent" outlined></v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
import MealsService from "@/services/MealsService";

// Rating Initialization

export default {
  name: "UploadMeal",
  computed: {
    validMealComp2() {
      return !!this.mealComp1;
    },
    validMealComp3() {
      return this.validMealComp2 && !!this.mealComp2;
    },
    validMealComp4() {
      return this.validMealComp3 && !!this.mealComp3;
    },
    validMealComp5() {
      return this.validMealComp4 && !!this.mealComp4;
    },
  },
  data() {
    return {
      date: new Date(),
      options: {
        format: "MM/DD/YYYY",
        useCurrent: false,
      },
      mealTiming: -1,
      dropDownSelect: null,
      dropDownOptionsBreakfast: [
        { value: "SELF SERVICE", text: "SELF SERVICE" },
        { value: "WESTERN", text: "WESTERN" },
        { value: "NOODLE", text: "NOODLE" },
        { value: "ASIAN", text: "ASIAN" },
        { value: "ASIAN VEGETARIAN", text: "ASIAN VEGETARIAN" },
        { value: "MALAY", text: "MALAY" },
        { value: "HALAL VEGETARIAN", text: "HALAL VEGETARIAN" },
        { value: "GRAB & GO", text: "GRAB & GO" },
      ],
      dropDownOptionsDinner: [
        { value: "SELF SERVICE", text: "SELF SERVICE" },
        { value: "WESTERN", text: "WESTERN" },
        { value: "NOODLE", text: "NOODLE" },
        { value: "ASIAN", text: "ASIAN" },
        { value: "VEGETARIAN", text: "VEGETARIAN" },
        { value: "MALAY", text: "MALAY" },
        { value: "INDIAN", text: "INDIAN" },
      ],
      mealComp1: "",
      mealComp2: "",
      mealComp3: "",
      mealComp4: "",
      mealComp5: "",
      text: "",
      submitted: false,
      error: null,
    };
  },
  components: {
    datePicker,
  },
  methods: {
    async addMeal() {
      try {
        if (this.dropDownSelect == null || this.mealTiming == -1) {
          this.error = "Unable to submit meal due to incomplete registeration"
        } else {
        const req = {
          date: this.date,
          mealComp1: this.mealComp1,
          mealComp2: this.mealComp2,
          mealComp3: this.mealComp3,
          mealComp4: this.mealComp4,
          mealComp5: this.mealComp5,
          cuisineType: this.dropDownSelect,
          breakfastOrDinner: this.mealTiming,
        };
        console.log(req);
        await MealsService.addMeal(req);
        this.submitted = true;
        }
      } catch (err) {
        this.alreadyExists = true;
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.checked {
  color: orange;
}

.error {
  background-color: white;
}
</style>
