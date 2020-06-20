<template>
  <v-navigation-drawer
    v-model="drawer"
    :color="color"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    :right="right"
    :permanent="permanent"
    :src="bg"
    absolute
    app
    dark
  >
    <v-list dense nav class="py-0">
      <!-- To buffer the top navbar -->
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-content>
          <v-list-item-title>
            <img src="../assets/nusMeals.png"
          /></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click.prevent="item.event()"
        link
        :to="item.path"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
      expandOnHover: false,
      background: false,
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push("/");
    },
  },
  created() {
    this.isAdmin = this.$store.state.user.isAdmin;
  },
  mounted() {
    if (this.isAdmin == "0") {
      this.items = [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          path: "/homepage",
          event: () => {},
        },
        {
          title: "My Meal Plan",
          icon: "mdi-image",
          path: "/myMealPlan",
          event: () => {},
        },
        {
          title: "Feedback",
          icon: "mdi-help-box",
          path: "/submitfeedback",
          event: () => {},
        },
        {
          title: "Actions",
          icon: "mdi-help-box",
          path: "/actions",
          event: () => {},
        },
        {
          title: "Log Out",
          icon: "mdi-help-box",
          path: "/",
          event: () => this.logout(),
        },
      ];
    } else {
      this.items = [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          path: "/admin",
          event: () => {},
        },
        {
          title: "View Feedback",
          icon: "mdi-view-dashboard",
          path: "/viewfeedback",
          event: () => {},
        },
        {
          title: "Payment",
          icon: "mdi-view-dashboard",
          path: "/viewpayments",
          event: () => {},
        },
        {
          title: "Initialize Semester",
          icon: "mdi-view-dashboard",
          path: "/initialize",
          event: () => {},
        },
        {
          title: "Log Out",
          icon: "mdi-help-box",
          path: "/",
          event: () => this.logout(),
        },
      ];
    }
  },
};
</script>

<style scoped>
img {
  /* float: center; */
  max-width: 90%;
}
</style>
