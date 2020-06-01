<template>
  <div class="container">
    <div>
        <CostAndDays/>
    </div>
    <div class="uploadMeal">
        <UploadMeal/>
    </div>
  </div>
</template>

<script>
import CostAndDays from '@/components/admin/CostAndDays'
import UploadMeal from '@/components/admin/UploadMeal'

export default {
  name: 'adminHome',
  components: {
      CostAndDays,
      UploadMeal
  },
 
}
</script>

<style scoped>
    .container {
        margin:auto;
    }
    .uploadMeal {
        max-width: 70%;
    }

</style>