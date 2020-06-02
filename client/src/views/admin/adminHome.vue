<template>
  <div class="container">
    <div>
        <InitializeSem/>
    </div>
    <div class="uploadMeal">
        <UploadMeal/>
    </div>
    <!-- <div>
        <AddSemester/>
    </div> -->
  </div>
</template>

<script>
import InitializeSem from '@/components/admin/InitializeSem'
import UploadMeal from '@/components/admin/UploadMeal'
// import AddSemester from '@/components/admin/AddSemester'

export default {
  name: 'adminHome',
  components: {
      InitializeSem,
      UploadMeal,
      // AddSemester
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