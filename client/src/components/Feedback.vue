<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <p>Choose your date for feedback</p>
                <date-picker v-model="date" :config="options"></date-picker>
            </div>
            
       
      
    </div>
        <div>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="7"
            max-rows="30"
            ></b-form-textarea>
        </div>
    </div>
</template>


<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import datePicker from 'vue-bootstrap-datetimepicker';
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
   
  export default {    
    data () {
      return {
        date: new Date(),
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        },
        text: '',
      }
    },
    components: {
      datePicker
    },
    methods: {
        
    },
    mounted() {
    this.$root.$on('bv::dropdown::show', bvEvent => {
      console.log('Dropdown is about to be shown', bvEvent)
    })
  }
  }
</script>

