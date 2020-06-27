<template>
  <div class="feedbackContainer">
    <Feedback />
  </div>
</template>

<script>
import Feedback from "@/components/student/Feedback";

export default {
  name: "submitFeedback",
  components: {
    Feedback
  }
};
</script>

<style scoped>
.feedbackContainer {
  margin: auto;
  max-width: 960px;
  padding: 64px;
  background-color: white;
  height: 100%;
}
</style>