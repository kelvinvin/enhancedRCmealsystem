<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mealselection">Meal Selection</router-link> |
      <router-link to="/HomePage">HomePage</router-link>
        <v-btn id="logout" v-if="$store.state.isUserLoggedIn" @click="logout">
          Log Out
        </v-btn>
      </div>
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
