<template>
  <div class="container">
    <v-img class="background" 
    v-for="(item, i) in items" 
    :key="i" 
    :src="item.src" 
    aspect-ratio="1.7">
    </v-img>
    <v-form class="form" onSubmit="login">
          <v-container fill-height>
            <v-layout>
              <v-flex text-xs-center>
                <v-text-field
                  filled
                  solo
                  label="Email"
                  type="text"
                  class="username"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  solo
                  filled
                  label="Password"
                  class="password"
                  v-model="password"
                  :append-icon="showPass ? 'visibility' : 'visibility_off'"
                  :type="showPass ? 'text' : 'password'"
                  @click:append="showPass = !showPass"
                ></v-text-field>
                <v-btn color="primary" large @click.prevent="login" type="submit">Login</v-btn>
                <div class="SignUp">
                  <v-btn small @click.prevent="signUp">Sign Up</v-btn>
                </div>
                <v-alert v-if="!!error" type="error">You have entered invalid login information</v-alert>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      showPass: false,
      gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)",
      items: [
        {
          src: require("@/assets/background2.jpg")
        }
      ]
    };
  },
  methods: {
    signUp() {
      return this.$router.push("/register");
    },

    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
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
    }
  }
};
</script>

<style scoped>
.SignUp {
  margin: 20px 0;
}

.username {
  margin-bottom: 15px;
}

.toolbar {
  min-width: 100%
}

.background {
  position: fixed; 
  top: 0; 
  left: 0; 
	
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}

.form {
  text-align: center;
  display: inline-block;
  margin-top: 10%
}

.errorMsg {
  color: red;
  background-color: white;
}
</style>
