<template>
    <div id="app">
        <div class="container"> 
            <div class="MealCalendar"><MealCalendar/></div>
            <div class="MyMealPlan"><MyMealPlan/></div>
        </div>
    </div>
</template>

<script>
import MealCalendar from '@/components/student/MealCalendar'
import MyMealPlan from '@/components/student/MyMealPlan'

export default {
  name: 'homepage',
  components: {
    MealCalendar,
    MyMealPlan
  }
}
</script>

<style scoped>
    .container {
      max-width: 960px;
      margin: auto;
    }

    .MealCalendar {
      margin: 20px;
      padding: 10px;
    }
</style>