<template>
  <div>
    <div class="initializeSem">
      <InitializeSem />
    </div>
    <div class="uploadMeal">
      <UploadMeal />
    </div>
  </div>
</template>

<script>
import InitializeSem from "@/components/admin/InitializeSem";
import UploadMeal from "@/components/admin/UploadMeal";

export default {
  name: "initialize",
  components: {
    InitializeSem,
    UploadMeal
  },
};
</script>

<style></style>
