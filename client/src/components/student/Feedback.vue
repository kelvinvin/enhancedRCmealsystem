<template>
  <v-container>
    <header>
      <v-alert type="success" v-if="submitted"
        >Success! Your feedback has been successfully submitted!</v-alert
      >
      <v-alert type="error" v-else-if="error != null">{{ error }}</v-alert>
      <h1>Submit Feedback</h1>
    </header>

    <!-- Date to select -->
    <div class="comp">
      <span>Choose your date for feedback:</span>
      <date-picker v-model="date" :config="options"></date-picker>
    </div>

    <!-- Menu type -->
    <div>
      <span>Select Cuisine type:</span>
      <v-radio-group mandatory v-model="mealTiming" row>
        <v-radio color="orange lighten-1" label="Breakfast" value="0"></v-radio>
        <v-radio color="orange lighten-1" label="Dinner" value="1"></v-radio>
      </v-radio-group>
      <div v-if="mealTiming == 0">
        <v-select
          solo
          dense
          v-model="dropDownSelect"
          :items="dropDownOptionsBreakfast"
        ></v-select>
      </div>
      <div v-if="mealTiming == 1">
        <v-select
          solo
          dense
          v-model="dropDownSelect"
          :items="dropDownOptionsDinner"
        ></v-select>
      </div>
    </div>

    <!-- Rating -->
    <div>
      <div class="comp">
        Rating:
        <v-rating
          v-model="rating"
          :length="5"
          :hover="true"
          :size="32"
          :dense="true"
          color="orange lighten-1"
          background-color="blue darken-1"
        ></v-rating>
      </div>
      
      <!-- Feedback box section -->
      <div>
        Message:
        <v-textarea
          id="textarea"
          solo
          v-model="text"
          placeholder="Enter feedback here... (Optional)"
          rows="7"
        ></v-textarea>
      </div>
    </div>
    <v-btn color="orange lighten-1" @click.prevent="submitFeedback"
      >Submit Feedback</v-btn
    >
  </v-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
import FeedbackService from "@/services/FeedbackService";
import store from "@/store/store";
var moment = require("moment");

// Rating Initialization

export default {
  name: "Feedback",
  data() {
    return {
      date: moment(new Date()).format("L"),
      options: {
        format: "MM/DD/YYYY",
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
          const feedbackObj = {
            date: this.date,
            breakfastOrDinner: this.mealTiming,
            cuisineType: this.dropDownSelect,
          };
          if (
            store.state.feedbacks.find(
              (x) => JSON.stringify(x) == JSON.stringify(feedbackObj)
            )
          ) {
            this.submitted = false;
            this.error = "You have already submitted a feedback for this meal.";
          } else {
            console.log("No");
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
            this.$store.dispatch("incrementCount", feedbackObj);
          }
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.comp {
  margin-bottom: 20px;
}
</style>
