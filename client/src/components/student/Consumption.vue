<template>
  <div class="container">
    <!-- Success message -->
    <div>
      <v-alert type="error" v-if="error != null">Caanoot</v-alert>
      <v-alert type="success" v-else-if="submitted && error == null">can</v-alert>
    </div>
    <br />
    <!-- Options for bfast/ dinner -->
    <div>
      <b-form-group label="Select Menu Time:">
        <b-form-radio v-model="mealTiming" name="menu-time" value="0">Breakfast</b-form-radio>
        <b-form-radio v-model="mealTiming" name="menu-time" value="1">Dinner</b-form-radio>
      </b-form-group>
    </div>
    <br />
    <!-- Menu type -->
    <div v-if="mealTiming == 0">
      <p>Select Cuisine type:</p>
      <b-form-select v-model="dropDownSelect" :options="dropDownOptionsBreakfast"></b-form-select>
    </div>
    <div v-if="mealTiming == 1">
      <p>Select Cuisine type:</p>
      <b-form-select v-model="dropDownSelect" :options="dropDownOptionsDinner"></b-form-select>
    </div>
    <!-- Error -->
    <div class="error" v-html="error" />
    <br />
    <!-- Submit button -->
    <b-button @click.prevent="submitConsumption">Tap in!</b-button>
  </div>
</template>

<script>
import ConsumptionService from "@/services/ConsumptionService";

export default {
  name: "Consumption",
  data() {
    return {
      date: new Date(),
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
      submitted: false,
      error: null
    };
  },
  methods: {
    submitConsumption() {
      try {
        if (this.mealTiming == -1) {
          this.error = "Please select Menu time";
        } else if (this.dropDownSelect == null) {
          this.error = "Please select Cuisine Type";
        } else {
          
          const authUser = this.$store.state.user;
          ConsumptionService.submitConsumption({
            breakfastOrDinner: this.mealTiming,
            cuisineType: this.dropDownSelect,
            UserId: authUser.id
          });
          this.submitted = true;
          alert("Eaten")
          this.$router.push("/homepage");
        }
      } catch (error) {
        this.error = error.response.data.error;
        console.log(error);
        alert("Cannot eat")
      }
    }
  }
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
