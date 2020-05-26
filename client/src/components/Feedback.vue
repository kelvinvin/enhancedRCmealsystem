<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <p>Choose your date for feedback</p>
        <date-picker v-model="date" :config="options"></date-picker>
      </div>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Food type
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item">Malay</a>
                <a class="dropdown-item">Another action</a>
                <a class="dropdown-item">Something else here</a>
            </div>
        </div>
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
      }
    },
    components: {
      datePicker
    },
    methods: {
        
    }
  }
</script>

<style scoped>

</style>