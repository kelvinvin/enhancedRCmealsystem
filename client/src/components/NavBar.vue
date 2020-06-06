<template>
  <v-app-bar
    dark
    app
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <span class="container" v-if="$store.state.isUserLoggedIn"  id="toolbar">
        <img @click="home()" src="../assets/nusMeals.png" />
        <v-app-bar-title> Hi {{ userId }}! </v-app-bar-title>
        <span class="middle" v-if="isAdmin == '0'">
          <v-btn @click.prevent="home">Home</v-btn> |
          <v-btn @click.prevent="registerMeal">Register Meal</v-btn> |
          <v-btn @click.prevent="feedback">Feedback</v-btn> |
        </span>
        <span class="middle" v-if="isAdmin == '1'">
          <v-btn @click.prevent="adminHomePage">Home</v-btn> |
          <v-btn @click.prevent="viewFeedback">View Feedback</v-btn> |
          <v-btn @click.prevent="viewPayment">View Payment</v-btn> |
        </span>
        <v-btn id="logout" @click="logout"> Log Out </v-btn>
    </span>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      userId: null,
      isAdmin: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push("/");
    },
    home() {
      this.$router.push("/homepage");
    },
    registerMeal() {
      this.$router.push("/mealselection");
    },
    feedback() {
      this.$router.push("/submitfeedback");
    },
    adminHomePage() {
      this.$router.push("/admin");
    },
    viewFeedback() {
      this.$router.push("/viewfeedback");
    },
    viewPayment() {
      this.$router.push("/viewpayments");
    },
  },
  created() {
    this.userId = this.$store.state.user.name;
    this.isAdmin = this.$store.state.user.isAdmin;
  },
};
</script>

<style scoped>
#toolbar {
  display: inline-block;
  margin-left: 0px;
  margin-right: 0px
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

img {
    float:left;
    margin-right:5px;
    width: 10%;
    cursor: pointer;
}
</style>
