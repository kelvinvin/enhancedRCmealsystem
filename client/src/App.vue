<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes.light.background}">
    <div>
      <NavBar v-if="$store.state.isUserLoggedIn"/>
      <SideBar v-if="$store.state.isUserLoggedIn"/>
    </div>
    <v-main>
      <v-content>
        <router-view />
      </v-content>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import SideBar from "./components/SideNavBar"

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
    SideBar
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
