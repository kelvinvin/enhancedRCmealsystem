<template>
  <v-container>
    <v-row>
      <v-col :cols="8">
        <div class="uploadMeal">
          <UploadMeal />
        </div>
      </v-col>
      <v-col :cols="4">
        <div class="initializeSem">
          <InitializeSem />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InitializeSem from "@/components/admin/InitializeSem";
import UploadMeal from "@/components/admin/UploadMeal";

export default {
  name: "initialize",
  components: {
    InitializeSem,
    UploadMeal
  }
};
</script>

<style></style>
