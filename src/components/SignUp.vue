<template>
    <div class="form">
        <h2 class="title">First name</h2>
        <form>
            <input type="text" placeholder="Enter First Name">
        </form>

        <h2 class="title">Last name</h2>
        <form>
            <input type="text" placeholder="Enter Last Name">
        </form>

        <h2 class="title">Email</h2>
        <form>
            <input type="text" placeholder="Enter email">
        </form>

        <h2 class="title">Password</h2>
        <form>
            <input type="text"
            placeholder="Password needs to be at least 6 characters long">
        </form>

        <button type="submit" class="Submit">Submit</button>
    </div>
</template>

<script>
export default {
    name: "SignUp"
}
</script>

<style>
    .form {
        width: 550px;
        height: 450px;
        border: 5px solid black;
        padding: 50px;
        top: 50%;
        left: 50%;
        position: absolute;
        margin-left: -275px;
        margin-top: -225px;
    }

    .title {
        float: left;
        margin-bottom: 2px;
        font-size: 20px;
    }

    .Submit {
        margin-top: 5px;
    }

</style>