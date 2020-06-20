<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :color="color"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      :permanent="permanent"
      :src="bg"
      absolute
      dark
    >
      <v-list dense nav class="py-0">
          <!-- To buffer the top navbar -->
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
        <v-list-item-icon>
          <v-icon>{{icons.mdiLogout}}</v-icon>
        </v-list-item-icon>
        <v-list-item id="logoutWord" @click.prevent="logout">{{logoutWord}}</v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mdiLogout } from "@mdi/js";
export default {
  data() {
    return {
      isAdmin: null,
      drawer: true,
      items: null,
      icons: { mdiLogout },
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: true,
      background: false,
      logoutWord: "Log Out"
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push("/");
    }
  },
  created() {
    this.isAdmin = this.$store.state.user.isAdmin;
  },
  mounted() {
    if (this.isAdmin == "0") {
      this.items = [
        { title: "Dashboard", icon: "mdi-view-dashboard", path: "/homepage" },
        { title: "My Meal Plan", icon: "mdi-image", path: "/myMealPlan" },
        { title: "Feedback", icon: "mdi-help-box", path: "/submitfeedback" },
        { title: "Actions", icon: "mdi-help-box", path: "/actions" }
      ];
    } else {
        this.items = [
        { title: "Dashboard", icon: "mdi-view-dashboard", path: "/admin" },
        { title: "View Feedback", icon: "mdi-view-dashboard", path: "/viewfeedback" },
        { title: "Payment", icon: "mdi-view-dashboard", path: "/viewpayments" },
        { title: "Initialize Semester", icon: "mdi-view-dashboard", path: "/initialize" },
        ]
    }
  }
};
</script>

<style scoped>
</style>