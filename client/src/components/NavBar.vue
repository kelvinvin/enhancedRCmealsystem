<template>
  <div id="nav">
      <span v-if="$store.state.isUserLoggedIn">
      <router-link to="Homepage">Home</router-link> |
      <router-link to="About">About</router-link> |
      <router-link to="MealSelection">Meal Selection</router-link>
        <v-btn id="logout" @click="logout">
          Log Out
        </v-btn>
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
