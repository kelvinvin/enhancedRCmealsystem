<template>
    <div class="container">
        <h1>Forgot Password</h1>
        <br>
        <h3>USERNAME</h3>
        <form>
            <input type="text">
            <input type="submit">
        </form>

    </div>
</template>

<script>
export default {
    name: "ForgotPassword"
}
</script>

<style>
    .container {
        width: 300px;
        height: 250px;
        border: 5px solid black;
        padding: 50px;
        top: 50%;
        left: 50%;
        position: absolute;
        margin-left: -150px;
        margin-top: -125px;
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