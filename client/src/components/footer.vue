<template>
  <v-content>
    <v-footer dark padless absolute>
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          Orbital {{ new Date().getFullYear() }} —
          <strong>Wincent Tjoi, Kelvin Wong</strong>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
            href="https://github.com/kelvinvin/enhancedRCmealsystem"
            target="_blank"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-github"],
  }),
};
</script>

<style scoped>
  .v-btn {
    text-decoration: none;
  }
</style>
