<template>
  <div id="nav">
      <span v-if="$store.state.isUserLoggedIn">
      <v-btn @click.prevent="home">Home</v-btn> |
      <v-btn @click.prevent="registerMeal">Register Meal</v-btn> |
      <v-btn @click.prevent="feedback">Feedback</v-btn> |
      <!-- <span v-if="$store.state.user.isAdmin"> -->
      <v-btn @click.prevent="adminHomePage">Admin</v-btn> |
      <v-btn @click.prevent="viewFeedback">Admin Feedback</v-btn> |
      <v-btn @click.prevent="viewPayment">Admin Payment</v-btn>
      <!-- </span> -->
        <v-btn id="logout" @click="logout"> Log Out </v-btn>
      </span>
    <router-view/>
  </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push('/')
        },
        home() {
            this.$router.push('/Homepage')
        },
        registerMeal() {
            this.$router.push('/MealSelection')
        },
        feedback() {
            this.$router.push('/submitFeedback')
        },
        adminHomePage() {
            this.$router.push('/admin')
        },
        viewFeedback() {
            this.$router.push('/viewFeedback')
        },
        viewPayment() {
            this.$router.push('/viewPayments')
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

#logout {
    float: right;  
}
</style>
