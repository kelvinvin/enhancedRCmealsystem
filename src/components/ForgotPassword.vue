<template>
    <div class="forgotpassword">
        <h1>Forgot Password</h1>
        <br>
        <h3>USERNAME</h3>
        <form>
            <input type="text">
            <button type="submit">Submit</button>
        </form>

    </div>
</template>

<script>
export default {
    name: "ForgotPassword"
}
</script>

<style>
    .forgotpassword {
        width: 500px;
        height: 400px;
        border: 5px solid black;
        padding: 50px;
        top: 50%;
        left: 50%;
        position: absolute;
        margin-left: -250px;
        margin-top: -200px;
    }

    input[type="text"] {
        margin-bottom: 15px;
    }

    input[type="submit"] {
        border: none;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        color: white;
        background-color: blue;
        width: 100%;
    }

    input[type="submit"]:hover {
        background-color: orange;
        color: white;
    }
</style>