<template>
  <div class="container">
    <Feedback/>
  </div>
</template>

<script>
import Feedback from '@/components/student/Feedback'

export default {
  name: 'submitFeedback',
  components: {
    Feedback
  }
}
</script>

<style scoped>
    .container {
        margin: auto;
        max-width: 960px;
    }
</style>