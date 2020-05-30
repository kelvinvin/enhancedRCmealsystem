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
        <div>
            <p>Select Cuisine type:</p>
            <b-form-select v-model="dropDownSelect" 
            :options="dropDownOptions">
            </b-form-select>
        </div>
            <br>
            <!-- Rating -->
        <div>
            <b-form-group label="Rating:">
                <b-form-radio v-model="rating" name="rating" value="5">5</b-form-radio>
                <b-form-radio v-model="rating" name="rating" value="4">4</b-form-radio>
                <b-form-radio v-model="rating" name="rating" value="3">3</b-form-radio>
                <b-form-radio v-model="rating" name="rating" value="2">2</b-form-radio>
                <b-form-radio v-model="rating" name="rating" value="1">1</b-form-radio>
            </b-form-group>
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
        <br>
        <div class="error" v-html="error" />
        <br>
        <b-button @click.prevent="submitFeedback">Submit Feedback</b-button>
    </div>
</template>


<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import datePicker from 'vue-bootstrap-datetimepicker';
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
  import FeedbackService from '@/services/FeedbackService'

// Rating Initialization
    
  export default {    
    name: 'Feedback',
    data () {
      return {
        date: new Date(),
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        },
        radioSelected: '',
        dropDownSelect: null,
        dropDownOptions: [
          { value: 'malay', text: 'Malay' },
          { value: 'indian', text: 'Indian' },
          { value: 'asian', text: 'Asian' },
          { value: 'western', text: 'Western' },
          { value: 'vegetarian', text: 'Vegetarian' },
          { value: 'noodles', text: 'Noodles' },
          { value: 'mealEnhancement', text: 'Meal Enhancements'}
        ],
        text: '',
        rating: null,
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
                    this.submitted = true
                    FeedbackService.submitFeedback({
                        date: this.date,
                        breakfastOrDinner: this.radioSelected == 'Breakfast' ? '0' : '1',
                        rating: this.rating,
                        cuisineType: this.dropDownSelect,
                        comment: this.text
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