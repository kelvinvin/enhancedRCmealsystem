<template>
  <div class="container">
    <div>
        <Cost/>
    </div>
    <div class="uploadMeal">
        <UploadMeal/>
    </div>
  </div>
</template>

<script>
import Cost from '@/components/admin/Cost'
import UploadMeal from '@/components/admin/UploadMeal'

export default {
  name: 'adminHome',
  components: {
      Cost,
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