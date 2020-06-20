<template>
  <div>
    <v-app-bar
      dark
      app
      fixed
      height="48px"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <div class="container" v-if="$store.state.isUserLoggedIn" id="toolbar">
        <img @click="home()" src="../assets/nusMeals.png" />
        <v-app-bar-title>Hi {{ userId }}!</v-app-bar-title>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: null,
    };
  },
  created() {
    this.userId = this.$store.state.user.name;
  }
};
</script>

<style scoped>
#toolbar {
  display: inline-block;
  margin-left: 0px;
  margin-right: 0px;
}

img {
  float: left;
  margin-right: 5px;
  width: 10%;
  cursor: pointer;
}
</style>
