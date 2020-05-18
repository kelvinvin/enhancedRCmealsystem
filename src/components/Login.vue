<template>
    <div class="login">
        <div class="words">
            <h1>National University of</h1>
            <h1>Singapore</h1>

            <h3>Sign in with your organizational account</h3>

            <form>
                <input type="text" class="username" v-model="username" placeholder="Enter your NUS email here...">
                <input type="password" class="password" v-model="password" placeholder="Enter your password here...">
                <button class="btn btn-primary" @click.prevent="LoginCheck">
                    <!-- <router-link to="/HomePage">Submit</router-link> -->
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
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        LoginCheck() {
            if (this.username == 'wincent' && this.password == 'password')
                return this.$router.push('/HomePage');
        }
    }
}
</script>

<style>
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

    input[type=text], select {
        width: 100%;
        border: 5px solid black;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 20%;
    }

    input[type=submit]:hover {
        background-color: orange;
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