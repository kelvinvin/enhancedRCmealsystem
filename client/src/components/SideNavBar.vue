<template>
  <div @mouseleave="hoveringnot()" @mouseenter="hovering()">
    <v-hover v-slot:default="{ hover }">
      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        height="100%"
        absolute
        app
        dark
        permanent
      >
        <v-list dense nav class="py-0">
          <!-- To buffer the top navbar -->
          <v-container fluid>
            <a href="/homepage">
              <v-img
                v-show="!$vuetify.breakpoint.xs && hover"
                src="../assets/nusMeals.png"
              />
            </a>
          </v-container>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click.prevent="item.event()"
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
    </v-hover>
  </div>
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
      miniVariant: false,
      expandOnHover: true,
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
    hovering() {
      this.$emit("hoverevent");
    },
    hoveringnot() {
      this.$emit("nohoverevent");
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
          title: "Log Out",
          icon: "mdi-logout",
          path: "/",
          event: () => {
            this.hoveringnot();
            this.logout();
          },
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
          event: () => {
            this.hoveringnot();
            this.logout();
          },
        },
      ];
    }
  },
};
</script>

<style scoped></style>
