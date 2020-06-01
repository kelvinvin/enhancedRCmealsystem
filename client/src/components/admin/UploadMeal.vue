<template>
    <div class="container">
        <div v-if="submitted" class="alert alert-success">
            <strong>Success!</strong> Meal has been uploaded!
        </div>
        <div class="row">
            <!-- Date to select -->
            <div class="col-md-12">
                <p>Choose your date to add meal</p>
                <date-picker v-model="date" :config="options"></date-picker>
            </div>
        </div>
            <br>
            <!-- Options for bfast/ dinner -->
        <div>
            <b-form-group label="Select Menu Time:">
                <b-form-radio v-model="radioSelected" name="menu-time" value="Breakfast">Breakfast</b-form-radio>
                <b-form-radio v-model="radioSelected" name="menu-time" value="Dinner">Dinner</b-form-radio>
            </b-form-group>
            <div class="mt-3">Selected: <strong>{{ radioSelected }}</strong></div>
        </div>
            <br>
            <!-- Menu type -->
        <div v-if="radioSelected=='Breakfast'">
            <p>Select Cuisine type:</p>
            <b-form-select v-model="dropDownSelect" 
            :options="dropDownOptionsBreakfast">
            </b-form-select>
        </div>
        <div v-if="radioSelected=='Dinner'">
            <p>Select Cuisine type:</p>
            <b-form-select v-model="dropDownSelect" 
            :options="dropDownOptionsDinner">
            </b-form-select>
        </div>
            <br> 
        <div class="mealComponents">         
            <!-- Meal components section -->
            <v-text-field v-model="mealComp1" label="Meal component 1"></v-text-field>
            <v-text-field v-model="mealComp2" label="Meal component 2"></v-text-field>
            <v-text-field v-model="mealComp3" label="Meal component 3"></v-text-field>
            <v-text-field v-model="mealComp4" label="Meal component 4"></v-text-field>
            <v-text-field v-model="mealComp5" label="Meal component 5"></v-text-field> 
        </div>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn class="ma-2" outlined color="indigo" @click.prevent="addMeal">Add Meal</v-btn>

    </div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css';
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import FeedbackService from '@/services/FeedbackService'

// Rating Initialization
    
  export default {    
    name: 'UploadMeal',
    data () {
      return {
        date: new Date(),
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        },
        radioSelected: '',
        dropDownSelect: null,
        dropDownOptionsBreakfast: [
          { value: 'SELF SERVICE', text: 'SELF SERVICE' },
          { value: 'WESTERN', text: 'WESTERN' },
          { value: 'NOODLE', text: 'NOODLE' },
          { value: 'ASIAN', text: 'ASIAN' },
          { value: 'ASIAN VEGETARIAN', text: 'ASIAN VEGETARIAN' },
          { value: 'MALAY', text: 'MALAY' },
          { value: 'HALAL VEGETARIAN', text: 'HALAL VEGETARIAN'},
          { value: 'GRAB & GO', text: 'GRAB & GO'}
        ],
        dropDownOptionsDinner: [
          { value: 'SELF SERVICE', text: 'SELF SERVICE' },
          { value: 'WESTERN', text: 'WESTERN' },
          { value: 'NOODLE', text: 'NOODLE' },
          { value: 'ASIAN', text: 'ASIAN' },
          { value: 'VEGETARIAN', text: 'VEGETARIAN' },
          { value: 'MALAY', text: 'MALAY' },
          { value: 'INDIAN', text: 'INDIAN'}
        ],
        text: '',
        submitted: false,
        error: null
      }
    },
    components: {
      datePicker
    },
    methods: {
        submitFeedback() {
            try {
                if (this.radioSelected == '') {
                    this.error = 'Please select Menu time'
                } else if (this.dropDownSelect == null) {
                    this.error = 'Please select Cuisine Type'
                } else if (this.rating == null) {
                    this.error = 'Please indicate your rating preference in your feedback'
                } else {
                    this.submitted = true;
                    const authUser = this.$store.state.user;
                    FeedbackService.submitFeedback({
                        date: this.date,
                        breakfastOrDinner: this.radioSelected == 'Breakfast' ? '0' : '1',
                        rating: this.rating,
                        cuisineType: this.dropDownSelect,
                        comment: this.text,
                        UserId: authUser.id
                    })
                }
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    },
  }
</script>

<style scoped>
    .checked {
        color: orange;
    }

    .error {
        color: red;
    }
</style>