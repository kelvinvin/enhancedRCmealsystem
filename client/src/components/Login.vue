<template>
    <div class="login">
        <div class="words">
            <h1>National University of</h1>
            <h1>Singapore</h1>

            <h3>Sign in with your organizational account</h3>

            <form>
                <input type="text" class="username" v-model="email" placeholder="Enter your NUS email here...">
                <input type="password" class="password" v-model="password" 
                placeholder="Enter your password here...">
                <button class="btn btn-primary" @click.prevent="login">
                    Login
                </button>
            </form>

            <div class="SignUp">
                <router-link to="/SignUp">Sign Up</router-link>
            </div>
            
            <div class="ForgotPassword">
                <router-link to="/ForgotPassword">Forgot Password</router-link>
            </div>
        </div>

        <div class="picture">
            <img src="../assets/loginDH.jpg">
        </div>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async login() {
            const response = await AuthenticationService.login({
                email: this.email,
                password: this.password
            })
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
        }
    }
}
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

    input[type="text"], select {
        width: 100%;
        border: 5px solid black;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: 4px;
        box-sizing: border-box;
    }

    input[type="password"], select {
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

</style>