<template>
  <div class="container">
    <v-carousel height="975px" width="1600px" hide-delimiters :show-arrow="false" cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div class="words">
      <h1>National University of</h1>
      <h1>Singapore</h1>

      <h3>Sign in with your organizational account</h3>

      <form>
        <input
          type="text"
          class="username"
          v-model="email"
          placeholder="Enter your NUS email here..."
        />
        <input
          type="password"
          class="password"
          v-model="password"
          placeholder="Enter your password here..."
        />
        <v-btn color="primary" large @click.prevent="login">
          Login
        </v-btn>
        <div class="errorMsg" v-if="!!error">
          You have entered invalid login information.
        </div>
      </form>

      <div class="SignUp">
        <router-link to="/register">Sign Up</router-link>
      </div>

      <div class="ForgotPassword">
        <router-link to="/forgotpassword">Forgot Password</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
// import background1 from "@/assets/background1.jpg"

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      items: [
        {
          src: require("@/assets/background1.jpg"),
        },
        {
          src: require("@/assets/background2.jpg"),
        },
        {
          src: require("@/assets/background3.jpg"),
        },
        {
          src: require("@/assets/background4.jpg"),
        },
      ],
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        if (response.data.role === "ADMIN") {
          this.$router.push("/admin");
        } else {
          this.$router.push("/HomePage");
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.words {
  font-family: Arial, Helvetica, sans-serif;
  text-align: right;
  float: right;
  width: 30%;
}

.words h1 {
  font-size: 30px;
}

.words h3 {
  font-size: 20px;
}

input[type="text"],
select {
  width: 100%;
  border: 5px solid black;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: 4px;
  box-sizing: border-box;
}

input[type="password"],
select {
  width: 100%;
  border: 5px solid black;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.picture img {
  float: left;
  margin-left: 5px 5px 5px 30px;
  width: 65%;
  height: 30%px;
}

.SignUp {
  margin: 20px 0;
}

.username {
  margin-bottom: 15px;
}

.errorMsg {
  color: red;
}
</style>
