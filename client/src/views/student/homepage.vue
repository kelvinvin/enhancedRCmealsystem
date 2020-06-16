<template>
    <div id="app">
        <div class="container"> 
            <div class="MealCalendar"><MealCalendar/></div>
        </div>
    </div>
</template>

<script>
import MealCalendar from '@/components/student/MealCalendar'

export default {
  name: 'homepage',
  components: {
    MealCalendar,
  }
}
</script>

<style scoped>
    .container {
      /* max-width: 960px; */
      margin: auto;
    }

    .MealCalendar {
      margin: 20px;
      padding: 10px;
    }
</style>