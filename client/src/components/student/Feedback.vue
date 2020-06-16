<template>
  <div class="container">
    <div v-if="submitted" class="alert alert-success">
      <strong>Success!</strong> Your feedback has been successfully submitted!
    </div>
    <div class="row">
      <!-- Date to select -->
      <div class="col-md-12">
        <p>Choose your date for feedback</p>
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
    <br />
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
    <!-- Rating -->
    <div>
      Rating:
      <v-rating
        v-model="rating"
        :length="5"
        :hover="true"
        :size="32"
        :dense="true"
        color="yellow darken-1"
        background-color="yellow darken-1"
      ></v-rating>
    </div>
    <!-- Feedback box section -->
    <div>
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter feedback here..."
        rows="7"
        max-rows="30"
      ></b-form-textarea>
    </div>
    <br />
    <div class="error" v-html="error" />
    <br />
    <b-button @click.prevent="submitFeedback">Submit Feedback</b-button>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
import FeedbackService from "@/services/FeedbackService";

// Rating Initialization

export default {
  name: "Feedback",
  data() {
    return {
      date: new Date(),
      options: {
        format: "DD/MM/YYYY",
        useCurrent: false,
      },
      mealTiming: 0,
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
      text: "",
      rating: null,
      rate: null,
      submitted: false,
      error: null,
    };
  },
  components: {
    datePicker,
  },
  methods: {
    submitFeedback() {
      try {
        if (this.mealTiming == -1) {
          this.error = "Please select Menu time";
        } else if (this.dropDownSelect == null) {
          this.error = "Please select Cuisine Type";
        } else if (this.rating == null) {
          this.error =
            "Please indicate your rating preference in your feedback";
        } else {
          this.submitted = true;
          const authUser = this.$store.state.user;
          FeedbackService.submitFeedback({
            date: this.date,
            breakfastOrDinner: this.mealTiming,
            rating: this.rating,
            cuisineType: this.dropDownSelect,
            comment: this.text,
            UserId: authUser.id,
          });
        }
      } catch (error) {
        this.error = error.response.data.error;
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
  color: red;
}
</style>
