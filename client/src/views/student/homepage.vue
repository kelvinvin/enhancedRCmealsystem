<template>
  <div id="app">
    <MealCalendar/>
    <MyMealPlan/>
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

<style>
</style>