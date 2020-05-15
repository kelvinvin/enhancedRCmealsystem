<template>
    <div class="login">
        <div class="words">
            <h1>National University of</h1>
            <h1>Singapore</h1>

            <h3>Sign in with your organizational account</h3>

            <form>
                <input type="text" placeholder="Enter your NUS email here...">
                <input type="text" placeholder="Enter your password here...">
                <input type="submit">
            </form>
            <br>
            <router-link to="/ForgotPassword">Forgot Password</router-link>
        </div>

        <div class="picture">
            <img src="../assets/loginDH.jpg">
        </div>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style>
    .words {
        font-family: Arial, Helvetica, sans-serif;
        text-align: right;
        float: right;
        width: 30%
    }

    .words h1 {
        font-size: 30px;
    }

    .words h3 {
        font-size: 20px;
    }

    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
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

</style>