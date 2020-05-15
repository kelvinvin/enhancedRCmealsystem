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
        height: 300px;
        width: 300px;
        position: absolute;
        border: 5px solid black;
        margin: 5%;
        padding: 5%;
        text-align: center;
        left: 30%;
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