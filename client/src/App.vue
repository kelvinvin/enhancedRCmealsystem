<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <SideBar class="sidebar"
      v-if="$store.state.isUserLoggedIn"
      @hoverevent="on()"
      @nohoverevent="off()"
    />
    <v-content>
      <div id="overlay"></div>
      <router-view />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/footer";
import SideBar from "./components/SideNavBar";

export default {
  name: "App",

  components: {
    Footer,
    SideBar,
  },

  data: () => ({
    //
  }),
  methods: {
    on() {
      document.getElementById("overlay").style.display = "block";
    },

    off() {
      document.getElementById("overlay").style.display = "none";
    },
  },
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

#overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 12; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}

.sidebar {
  z-index:13;
}
</style>
