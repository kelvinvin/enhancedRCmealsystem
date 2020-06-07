<template>
  <div class="container">
    <div>
        <WeeklyConsumption/>
    </div>
    <div class="uploadMeal">
        <UploadMeal/>
    </div>
  </div>
</template>

<script>
import WeeklyConsumption from '@/components/admin/WeeklyConsumption'
import UploadMeal from '@/components/admin/UploadMeal'

export default {
  name: 'adminHome',
  components: {
      WeeklyConsumption,
      UploadMeal,
  }
}
</script>

<style scoped>
    .container {
        margin:auto;
    }

</style>