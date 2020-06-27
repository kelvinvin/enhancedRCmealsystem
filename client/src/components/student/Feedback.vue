<template>
  <v-container>
    <v-alert type="success" v-if="submitted">Success! Your feedback has been successfully submitted!</v-alert>
    <v-alert type="error" v-if="error != null">{{error}}</v-alert>
    <!-- Date to select -->
    <div class="comp">
      <span>Choose your date for feedback</span>
      <date-picker v-model="date" :config="options"></date-picker>
    </div>
    <!-- Menu type -->
    <div class="comp">
      <span>Select Cuisine type</span>
      <v-radio-group mandatory v-model="mealTiming" row>
        <v-radio label="Breakfast" value="0"></v-radio>
        <v-radio label="Dinner" value="1"></v-radio>
      </v-radio-group>
      <div v-if="mealTiming == 0">
        <v-select solo dense v-model="dropDownSelect" :items="dropDownOptionsBreakfast"></v-select>
      </div>
      <div v-if="mealTiming == 1">
        <v-select solo dense v-model="dropDownSelect" :items="dropDownOptionsDinner"></v-select>
      </div>
    </div>
    <!-- Rating -->
    <div class="comp">
      Rating
      <v-rating
        v-model="rating"
        :length="5"
        :hover="true"
        :size="32"
        :dense="true"
        color="blue darken-1"
        background-color="blue darken-1"
      ></v-rating>
      <!-- Feedback box section -->
      <v-textarea
        id="textarea"
        solo
        append-icon="mdi-comment"
        v-model="text"
        placeholder="Enter feedback here... (Optional)"
        rows="7"
      ></v-textarea>
    </div>
    <br />
    <v-btn color="primary" @click.prevent="submitFeedback">Submit Feedback</v-btn>
  </v-container>
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
        useCurrent: false
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
        { value: "GRAB & GO", text: "GRAB & GO" }
      ],
      dropDownOptionsDinner: [
        { value: "SELF SERVICE", text: "SELF SERVICE" },
        { value: "WESTERN", text: "WESTERN" },
        { value: "NOODLE", text: "NOODLE" },
        { value: "ASIAN", text: "ASIAN" },
        { value: "VEGETARIAN", text: "VEGETARIAN" },
        { value: "MALAY", text: "MALAY" },
        { value: "INDIAN", text: "INDIAN" }
      ],
      text: "",
      rating: null,
      rate: null,
      submitted: false,
      error: null
    };
  },
  components: {
    datePicker
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
            UserId: authUser.id
          });
          setTimeout(() => {
            this.$router.push("/homepage");
          }, 1000);
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.comp {
  margin-bottom: 40px;
}
</style>
