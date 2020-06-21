<template>
  <v-navigation-drawer
    v-model="drawer"
    :color="color"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    :right="right"
    src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    :permanent="permanent"
    height="100%"
    absolute
    app
    dark
  >
    <v-list dense nav class="py-0">
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
export default {
  data() {
    return {
      isAdmin: null,
      drawer: true,
      items: null,
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
          icon: "mdi-account",
          path: "/myMealPlan",
          event: () => {},
        },
        {
          title: "Feedback",
          icon: "mdi-comment-text",
          path: "/submitfeedback",
          event: () => {},
        },
        {
          title: "Actions",
          icon: "mdi-gesture-double-tap",
          path: "/actions",
          event: () => {},
        },
        {
          title: "Log Out",
          icon: "mdi-logout",
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
          icon: "mdi-comment-text-multiple",
          path: "/viewfeedback",
          event: () => {},
        },
        {
          title: "Payment",
          icon: "mdi-credit-card-outline",
          path: "/viewpayments",
          event: () => {},
        },
        {
          title: "Initialize Semester",
          icon: "mdi-clock-start",
          path: "/initialize",
          event: () => {},
        },
        {
          title: "Log Out",
          icon: "mdi-logout",
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
